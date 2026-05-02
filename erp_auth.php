<?php
session_start();

require_once 'db_connection.php';

// Handle login request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    
    // Validate input
    if (empty($username) || empty($password)) {
        echo json_encode([
            'success' => false,
            'message' => 'Please fill in all fields'
        ]);
        exit;
    }
    
    try {
        // Prepare and execute query
        $stmt = $pdo->prepare("
            SELECT u.*, e.name, e.email, e.department, e.designation
                FROM users u 
                LEFT JOIN employees e ON u.username = e.username 
                WHERE u.username = ?
        ");
        $stmt->execute([$username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($user && password_verify($password, $user['password'])) {
            // Set session variables
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['role'] = $user['role'];
            $_SESSION['name'] = $user['name'];
            $_SESSION['email'] = $user['email'];
            $_SESSION['department'] = $user['department'];
            $_SESSION['designation'] = $user['designation'];
            
            echo json_encode([
                'success' => true,
                'role' => $user['role'],
                'name' => $user['name'],
                'redirect' => 'erp_dashboard.html'
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Invalid username or password'
            ]);
        }
    } catch(PDOException $e) {
        echo json_encode([
            'success' => false,
            'message' => 'Login error: ' . $e->getMessage()
        ]);
    }
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method'
    ]);
}
?>
            $_SESSION['department'] = $user['department'];
            $_SESSION['designation'] = $user['designation'];
            $_SESSION['logged_in'] = true;
            
            // Determine redirect URL based on role
            $redirect_url = 'erp_dashboard.html';
            switch($user['role']) {
                case 'admin':
                    $redirect_url = 'erp_admin_dashboard.html';
                    break;
                case 'hr':
                    $redirect_url = 'erp_hr_dashboard.html';
                    break;
                case 'finance':
                    $redirect_url = 'erp_finance_dashboard.html';
                    break;
                case 'manager':
                    $redirect_url = 'erp_manager_dashboard.html';
                    break;
                case 'employee':
                    $redirect_url = 'erp_employee_dashboard.html';
                    break;
            }
            
            echo json_encode([
                'success' => true,
                'message' => 'Login successful! Redirecting...',
                'role' => $user['role'],
                'redirect_url' => $redirect_url
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Invalid username or password'
            ]);
        }
    } catch(PDOException $e) {
        echo json_encode([
            'success' => false,
            'message' => 'Database error: ' . $e->getMessage()
        ]);
    }
}

// Handle logout request
if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: erp_login.html');
    exit;
}

// Function to check if user is logged in
function isLoggedIn() {
    return isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true;
}

// Function to check user role
function getUserRole() {
    return $_SESSION['role'] ?? '';
}

// Function to get current user data
function getCurrentUser() {
    return [
        'id' => $_SESSION['user_id'] ?? null,
        'username' => $_SESSION['username'] ?? '',
        'role' => $_SESSION['role'] ?? '',
        'employee_id' => $_SESSION['employee_id'] ?? null,
        'first_name' => $_SESSION['first_name'] ?? '',
        'last_name' => $_SESSION['last_name'] ?? '',
        'department' => $_SESSION['department'] ?? '',
        'designation' => $_SESSION['designation'] ?? ''
    ];
}

// Redirect if not logged in
function requireLogin() {
    if (!isLoggedIn()) {
        header('Location: erp_login.html');
        exit;
    }
}

// Redirect if not Admin
function requireAdmin() {
    requireLogin();
    if (getUserRole() !== 'admin') {
        header('Location: erp_dashboard.html');
        exit;
    }
}

// Redirect if not HR
function requireHR() {
    requireLogin();
    if (getUserRole() !== 'hr' && getUserRole() !== 'admin') {
        header('Location: erp_dashboard.html');
        exit;
    }
}

// Redirect if not Finance
function requireFinance() {
    requireLogin();
    if (getUserRole() !== 'finance' && getUserRole() !== 'admin') {
        header('Location: erp_dashboard.html');
        exit;
    }
}

// Redirect if not Manager
function requireManager() {
    requireLogin();
    if (getUserRole() !== 'manager' && getUserRole() !== 'admin') {
        header('Location: erp_dashboard.html');
        exit;
    }
}

// Redirect if not Employee
function requireEmployee() {
    requireLogin();
    if (!in_array(getUserRole(), ['employee', 'hr', 'finance', 'manager', 'admin'])) {
        header('Location: erp_login.html');
        exit;
    }
}
?>
