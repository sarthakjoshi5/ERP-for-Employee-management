<?php
// ============================================================
//  erp_employees_api.php
//  REST-like API for Employee CRUD
//  Called by erp_dashboard.js via fetch()
// ============================================================

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once 'db_connection.php';

$action = $_GET['action'] ?? '';

switch ($action) {
    case 'get_all':       getAllEmployees();    break;
    case 'add':           addEmployee();        break;
    case 'edit':          editEmployee();       break;
    case 'delete':        deleteEmployee();     break;
    case 'update_profile': updateProfile();    break;
    default:
        echo json_encode(['success' => false, 'message' => 'Invalid action']);
}

// ──────────────────────────────────────────────────────────
//  GET ALL EMPLOYEES
// ──────────────────────────────────────────────────────────
function getAllEmployees() {
    global $pdo;
    try {
        $stmt = $pdo->query("SELECT * FROM erp_employees ORDER BY name ASC");
        $employees = $stmt->fetchAll();
        // Decode attendance JSON column
        foreach ($employees as &$emp) {
            $emp['attendance'] = json_decode($emp['attendance'] ?? '[]', true) ?? [];
        }
        echo json_encode(['success' => true, 'employees' => $employees]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

// ──────────────────────────────────────────────────────────
//  ADD EMPLOYEE
// ──────────────────────────────────────────────────────────
function addEmployee() {
    global $pdo;
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        if (!$data) {
            echo json_encode(['success' => false, 'message' => 'No data received']);
            return;
        }

        $id          = trim($data['id']          ?? '');
        $username    = trim($data['username']    ?? '');
        $password    = trim($data['password']    ?? '');
        $name        = trim($data['name']        ?? '');
        $email       = trim($data['email']       ?? '');
        $phone       = trim($data['phone']       ?? '');
        $department  = trim($data['department']  ?? '');
        $designation = trim($data['designation'] ?? '');
        $role        = trim($data['role']        ?? 'employee');
        $salary      = floatval($data['salary']  ?? 0);
        $status      = trim($data['status']      ?? 'active');
        $location    = trim($data['location']    ?? '');
        $joinDate    = trim($data['joinDate']    ?? date('Y-m-d'));

        // Validate required fields
        if (empty($id) || empty($username) || empty($password) || empty($name) || empty($email)) {
            echo json_encode(['success' => false, 'message' => 'Missing required fields (id, username, password, name, email)']);
            return;
        }

        // Check duplicate
        $check = $pdo->prepare("SELECT id FROM erp_employees WHERE id = ? OR username = ? OR email = ?");
        $check->execute([$id, $username, $email]);
        if ($check->fetch()) {
            echo json_encode(['success' => false, 'message' => 'Employee ID, username, or email already exists']);
            return;
        }

        $stmt = $pdo->prepare("
            INSERT INTO erp_employees
                (id, username, password, name, email, phone, department, designation, role, salary, status, location, join_date, attendance)
            VALUES
                (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, '[]')
        ");
        $stmt->execute([
            $id, $username, $password, $name, $email,
            $phone, $department, $designation, $role,
            $salary, $status, $location, $joinDate
        ]);

        echo json_encode(['success' => true, 'message' => 'Employee added successfully', 'id' => $id]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

// ──────────────────────────────────────────────────────────
//  EDIT EMPLOYEE
// ──────────────────────────────────────────────────────────
function editEmployee() {
    global $pdo;
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        if (!$data) {
            echo json_encode(['success' => false, 'message' => 'No data received']);
            return;
        }

        $id          = trim($data['id']          ?? '');
        $username    = trim($data['username']    ?? '');
        $password    = trim($data['password']    ?? '');
        $name        = trim($data['name']        ?? '');
        $email       = trim($data['email']       ?? '');
        $phone       = trim($data['phone']       ?? '');
        $department  = trim($data['department']  ?? '');
        $designation = trim($data['designation'] ?? '');
        $role        = trim($data['role']        ?? 'employee');
        $salary      = floatval($data['salary']  ?? 0);
        $status      = trim($data['status']      ?? 'active');
        $location    = trim($data['location']    ?? '');

        if (empty($id)) {
            echo json_encode(['success' => false, 'message' => 'Employee ID is required']);
            return;
        }

        $stmt = $pdo->prepare("
            UPDATE erp_employees SET
                username    = ?,
                password    = ?,
                name        = ?,
                email       = ?,
                phone       = ?,
                department  = ?,
                designation = ?,
                role        = ?,
                salary      = ?,
                status      = ?,
                location    = ?
            WHERE id = ?
        ");
        $stmt->execute([
            $username, $password, $name, $email,
            $phone, $department, $designation, $role,
            $salary, $status, $location, $id
        ]);

        if ($stmt->rowCount() === 0) {
            echo json_encode(['success' => false, 'message' => 'Employee not found or no changes made']);
            return;
        }

        echo json_encode(['success' => true, 'message' => 'Employee updated successfully']);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

// ──────────────────────────────────────────────────────────
//  DELETE EMPLOYEE
// ──────────────────────────────────────────────────────────
function deleteEmployee() {
    global $pdo;
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        $id   = trim($data['id'] ?? '');

        if (empty($id)) {
            echo json_encode(['success' => false, 'message' => 'Employee ID is required']);
            return;
        }

        $stmt = $pdo->prepare("DELETE FROM erp_employees WHERE id = ?");
        $stmt->execute([$id]);

        if ($stmt->rowCount() === 0) {
            echo json_encode(['success' => false, 'message' => 'Employee not found']);
            return;
        }

        echo json_encode(['success' => true, 'message' => 'Employee deleted successfully']);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

// ──────────────────────────────────────────────────────────
//  UPDATE PERSONAL PROFILE (name, email, phone, location)
// ──────────────────────────────────────────────────────────
function updateProfile() {
    global $pdo;
    try {
        $data     = json_decode(file_get_contents('php://input'), true);
        $id       = trim($data['id']       ?? '');
        $name     = trim($data['name']     ?? '');
        $email    = trim($data['email']    ?? '');
        $phone    = trim($data['phone']    ?? '');
        $location = trim($data['location'] ?? '');

        if (empty($id)) {
            echo json_encode(['success' => false, 'message' => 'Employee ID is required']);
            return;
        }

        $stmt = $pdo->prepare("
            UPDATE erp_employees
            SET name = ?, email = ?, phone = ?, location = ?
            WHERE id = ?
        ");
        $stmt->execute([$name, $email, $phone, $location, $id]);

        echo json_encode(['success' => true, 'message' => 'Profile updated successfully']);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}
