<?php
require_once 'erp_auth.php';

// Ensure user is logged in
requireLogin();

// Database connection
$host = 'localhost';
$dbname = 'erp_management';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

$action = $_GET['action'] ?? '';

switch($action) {
    case 'dashboard_stats':
        getDashboardStats();
        break;
    case 'recent_activities':
        getRecentActivities();
        break;
    case 'inventory':
        getInventory();
        break;
    case 'sales':
        getSales();
        break;
    case 'employees':
        getEmployees();
        break;
    case 'attendance':
        getAttendance();
        break;
    case 'payroll':
        getPayroll();
        break;
    case 'generate_payroll':
        generatePayroll();
        break;
    case 'process_payment':
        processPayment();
        break;
    case 'submit_complaint':
        submitComplaint();
        break;
    case 'get_complaints':
        getComplaints();
        break;
    case 'resolve_complaint':
        resolveComplaint();
        break;
    case 'delete_complaint':
        deleteComplaint();
        break;
    default:
        echo json_encode(['success' => false, 'message' => 'Invalid action']);
        break;
}

function getDashboardStats() {
    global $pdo;
    
    try {
        $stats = [];
        
        // Get total products
        $stmt = $pdo->query("SELECT COUNT(*) as count FROM products");
        $stats['total_products'] = $stmt->fetch(PDO::FETCH_ASSOC)['count'];
        
        // Get total revenue
        $stmt = $pdo->query("SELECT SUM(total_amount) as total FROM orders WHERE status = 'delivered'");
        $stats['total_revenue'] = $stmt->fetch(PDO::FETCH_ASSOC)['total'] ?? 0;
        
        // Get total employees
        $stmt = $pdo->query("SELECT COUNT(*) as count FROM employees");
        $stats['total_employees'] = $stmt->fetch(PDO::FETCH_ASSOC)['count'];
        
        // Get pending orders
        $stmt = $pdo->query("SELECT COUNT(*) as count FROM orders WHERE status = 'pending'");
        $stats['pending_orders'] = $stmt->fetch(PDO::FETCH_ASSOC)['count'];
        
        echo json_encode(['success' => true, 'data' => $stats]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

function getEmployees() {
    global $pdo;
    
    try {
        $stmt = $pdo->query("SELECT * FROM employees ORDER BY name");
        $employees = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(['success' => true, 'data' => $employees]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

function getInventory() {
    global $pdo;
    
    try {
        $stmt = $pdo->query("SELECT * FROM products ORDER BY name");
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(['success' => true, 'data' => $products]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

function getSales() {
    global $pdo;
    
    try {
        $stmt = $pdo->query("SELECT * FROM orders ORDER BY order_date DESC");
        $sales = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(['success' => true, 'data' => $sales]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

function getAttendance() {
    global $pdo;
    
    try {
        $stmt = $pdo->query("SELECT * FROM attendance WHERE date = CURDATE() ORDER BY check_in");
        $attendance = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(['success' => true, 'data' => $attendance]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

function getPayroll() {
    global $pdo;
    
    try {
        $stmt = $pdo->query("SELECT * FROM payroll WHERE month = MONTH(CURDATE()) AND year = YEAR(CURDATE())");
        $payroll = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(['success' => true, 'data' => $payroll]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

function getRecentActivities() {
    global $pdo;
    
    try {
        $stmt = $pdo->query("SELECT * FROM orders ORDER BY order_date DESC LIMIT 5");
        $activities = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(['success' => true, 'data' => $activities]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

function generatePayroll() {
    global $pdo;
    
    try {
        $current_month = date('Y-m-01');
        
        // Get all active employees
        $stmt = $pdo->query("SELECT * FROM employees WHERE status = 'active'");
        $employees = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        foreach ($employees as $employee) {
            // Calculate payroll (basic + allowances - deductions)
            $basic_salary = $employee['salary'];
            $allowances = $basic_salary * 0.2; // 20% allowances
            $deductions = $basic_salary * 0.1; // 10% deductions
            $net_salary = $basic_salary + $allowances - $deductions;
            
            // Insert payroll record
            $payroll_stmt = $pdo->prepare("
                INSERT INTO payroll (employee_id, month, basic_salary, allowances, deductions, net_salary, status) 
                VALUES (?, ?, ?, ?, ?, 'generated')
            ");
            $payroll_stmt->execute([
                $employee['id'],
                $current_month,
                $basic_salary,
                $allowances,
                $deductions,
                $net_salary
            ]);
        }
        
        echo json_encode(['success' => true, 'message' => 'Payroll generated successfully']);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

function processPayment() {
    global $pdo;
    
    try {
        $employee_id = $_POST['employee_id'] ?? '';
        $amount = $_POST['amount'] ?? '';
        
        if (empty($employee_id) || empty($amount)) {
            echo json_encode(['success' => false, 'message' => 'Missing required fields']);
            return;
        }
        
        // Update payroll status
        $stmt = $pdo->prepare("
            UPDATE payroll SET status = 'paid', payment_date = CURDATE() 
            WHERE employee_id = ? AND month = MONTH(CURDATE()) AND year = YEAR(CURDATE())
        ");
        $stmt->execute([$employee_id]);
        
        echo json_encode(['success' => true, 'message' => 'Payment processed successfully']);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}
?>
        processPayment();
        break;
    default:
        echo json_encode(['success' => false, 'message' => 'Invalid action']);
        break;
}

// Get dashboard statistics
function getDashboardStats() {
    global $pdo;
    
    try {
        // Total products
        $stmt = $pdo->query("SELECT COUNT(*) as count FROM products");
        $totalProducts = $stmt->fetch(PDO::FETCH_ASSOC)['count'];
        
        // Total revenue (from completed orders)
        $stmt = $pdo->query("SELECT SUM(total_amount) as total FROM orders WHERE status = 'delivered'");
        $totalRevenue = $stmt->fetch(PDO::FETCH_ASSOC)['total'] ?? 0;
        
        // Total employees
        $stmt = $pdo->query("SELECT COUNT(*) as count FROM employees WHERE status = 'active'");
        $totalEmployees = $stmt->fetch(PDO::FETCH_ASSOC)['count'];
        
        // Pending orders
        $stmt = $pdo->query("SELECT COUNT(*) as count FROM orders WHERE status IN ('pending', 'processing')");
        $pendingOrders = $stmt->fetch(PDO::FETCH_ASSOC)['count'];
        
        echo json_encode([
            'success' => true,
            'total_products' => $totalProducts,
            'total_revenue' => $totalRevenue,
            'total_employees' => $totalEmployees,
            'pending_orders' => $pendingOrders
        ]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

// Get recent activities
function getRecentActivities() {
    global $pdo;
    
    try {
        $activities = [];
        
        // Recent sales orders
        $stmt = $pdo->query("
            SELECT o.order_number, o.total_amount, o.order_date, c.customer_name,
                   'order' as type
            FROM orders o 
            JOIN customers c ON o.customer_id = c.customer_id 
            ORDER BY o.created_at DESC 
            LIMIT 5
        ");
        
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $activities[] = [
                'title' => "New Order: {$row['order_number']}",
                'description' => "Order from {$row['customer_name']} - ₹{$row['total_amount']}",
                'date' => date('M j, Y', strtotime($row['order_date']))
            ];
        }
        
        // Recent purchase orders
        $stmt = $pdo->query("
            SELECT po.po_number, po.total_amount, po.order_date, s.supplier_name,
                   'purchase' as type
            FROM purchase_orders po 
            JOIN suppliers s ON po.supplier_id = s.supplier_id 
            ORDER BY po.created_at DESC 
            LIMIT 5
        ");
        
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $activities[] = [
                'title' => "Purchase Order: {$row['po_number']}",
                'description' => "PO to {$row['supplier_name']} - ₹{$row['total_amount']}",
                'date' => date('M j, Y', strtotime($row['order_date']))
            ];
        }
        
        // Sort by date
        usort($activities, function($a, $b) {
            return strtotime($b['date']) - strtotime($a['date']);
        });
        
        echo json_encode([
            'success' => true,
            'activities' => array_slice($activities, 0, 5)
        ]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

// Get inventory data
function getInventory() {
    global $pdo;
    
    try {
        $search = $_GET['search'] ?? '';
        $category = $_GET['category'] ?? '';
        
        $query = "
            SELECT p.product_id, p.product_code, p.product_name, p.category, 
                   p.stock_quantity, p.unit_price, p.reorder_level
            FROM products p
            WHERE 1=1
        ";
        
        $params = [];
        
        if (!empty($search)) {
            $query .= " AND (p.product_name LIKE ? OR p.product_code LIKE ?)";
            $params[] = "%{$search}%";
            $params[] = "%{$search}%";
        }
        
        if (!empty($category)) {
            $query .= " AND p.category = ?";
            $params[] = $category;
        }
        
        $query .= " ORDER BY p.product_name";
        
        $stmt = $pdo->prepare($query);
        $stmt->execute($params);
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'products' => $products
        ]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

// Get sales data
function getSales() {
    global $pdo;
    
    try {
        $stmt = $pdo->query("
            SELECT 
                o.order_id, o.order_number, o.order_date, o.delivery_date, 
                o.total_amount, o.status,
                c.customer_name
            FROM orders o 
            JOIN customers c ON o.customer_id = c.customer_id 
            ORDER BY o.order_date DESC
        ");
        
        $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'orders' => $orders
        ]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

// Get purchases data
function getPurchases() {
    global $pdo;
    
    try {
        $stmt = $pdo->query("
            SELECT 
                po.po_id, po.po_number, po.order_date, po.expected_delivery, 
                po.total_amount, po.status,
                s.supplier_name
            FROM purchase_orders po 
            JOIN suppliers s ON po.supplier_id = s.supplier_id 
            ORDER BY po.order_date DESC
        ");
        
        $purchaseOrders = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'purchase_orders' => $purchaseOrders
        ]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

// Get employees data
function getEmployees() {
    global $pdo;
    
    try {
        $search = $_GET['search'] ?? '';
        $department = $_GET['department'] ?? '';
        
        $query = "
            SELECT employee_id, first_name, last_name, email, department, 
                   designation, status
            FROM employees
            WHERE 1=1
        ";
        
        $params = [];
        
        if (!empty($search)) {
            $query .= " AND (first_name LIKE ? OR last_name LIKE ? OR email LIKE ?)";
            $params[] = "%{$search}%";
            $params[] = "%{$search}%";
            $params[] = "%{$search}%";
        }
        
        if (!empty($department)) {
            $query .= " AND department = ?";
            $params[] = $department;
        }
        
        $query .= " ORDER BY first_name, last_name";
        
        $stmt = $pdo->prepare($query);
        $stmt->execute($params);
        $employees = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'employees' => $employees
        ]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

// Get attendance data
function getAttendance() {
    global $pdo;
    
    try {
        $date = $_GET['date'] ?? date('Y-m-d');
        
        $stmt = $pdo->prepare("
            SELECT 
                a.attendance_id, a.check_in, a.check_out, a.status,
                CONCAT(e.first_name, ' ', e.last_name) as employee_name,
                TIMESTAMPDIFF(HOUR, a.check_in, a.check_out) as working_hours
            FROM attendance a 
            JOIN employees e ON a.employee_id = e.employee_id 
            WHERE a.date = ?
            ORDER BY a.check_in
        ");
        
        $stmt->execute([$date]);
        $attendance = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'attendance' => $attendance
        ]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

// Get payroll data
function getPayroll() {
    global $pdo;
    
    try {
        $month = $_GET['month'] ?? date('Y-m');
        
        $stmt = $pdo->prepare("
            SELECT 
                p.payroll_id, p.basic_salary, p.allowances, p.deductions,
                p.overtime_pay, p.net_salary, p.payment_status, p.payment_date,
                CONCAT(e.first_name, ' ', e.last_name) as employee_name
            FROM payroll p 
            JOIN employees e ON p.employee_id = e.employee_id 
            WHERE p.month = ?
            ORDER BY employee_name
        ");
        
        $stmt->execute([$month]);
        $payroll = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'payroll' => $payroll
        ]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

// Generate payroll
function generatePayroll() {
    global $pdo;
    
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        $month = $data['month'] ?? '';
        
        if (empty($month)) {
            echo json_encode(['success' => false, 'message' => 'Month is required']);
            return;
        }
        
        // Get all active employees
        $stmt = $pdo->query("SELECT employee_id, salary FROM employees WHERE status = 'active' AND salary IS NOT NULL");
        $employees = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        foreach ($employees as $employee) {
            // Check if payroll already exists
            $checkStmt = $pdo->prepare("SELECT COUNT(*) FROM payroll WHERE employee_id = ? AND month = ?");
            $checkStmt->execute([$employee['employee_id'], $month]);
            
            if ($checkStmt->fetchColumn() == 0) {
                // Calculate payroll (simplified)
                $basicSalary = $employee['salary'];
                $allowances = $basicSalary * 0.2; // 20% allowances
                $deductions = $basicSalary * 0.1; // 10% deductions
                $overtimePay = 0; // Would need actual overtime data
                $netSalary = $basicSalary + $allowances - $deductions + $overtimePay;
                
                // Insert payroll record
                $insertStmt = $pdo->prepare("
                    INSERT INTO payroll 
                    (employee_id, month, basic_salary, allowances, deductions, overtime_pay, net_salary) 
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                ");
                
                $insertStmt->execute([
                    $employee['employee_id'],
                    $month,
                    $basicSalary,
                    $allowances,
                    $deductions,
                    $overtimePay,
                    $netSalary
                ]);
            }
        }
        
        echo json_encode(['success' => true, 'message' => 'Payroll generated successfully']);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

// Process payment
function processPayment() {
    global $pdo;
    
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        $payrollId = $data['payroll_id'] ?? 0;
        
        if (empty($payrollId)) {
            echo json_encode(['success' => false, 'message' => 'Payroll ID is required']);
            return;
        }
        
        $stmt = $pdo->prepare("
            UPDATE payroll 
            SET payment_status = 'paid', payment_date = CURDATE() 
            WHERE payroll_id = ?
        ");
        
        $stmt->execute([$payrollId]);
        
        echo json_encode(['success' => true, 'message' => 'Payment processed successfully']);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

// Submit a new complaint
function submitComplaint() {
    global $pdo;
    
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        $subject = $data['subject'] ?? '';
        $description = $data['description'] ?? '';
        $employee_id = $_SESSION['employee_id'] ?? null;
        
        if (empty($subject) || empty($description) || empty($employee_id)) {
            echo json_encode(['success' => false, 'message' => 'Missing required fields or session expired']);
            return;
        }
        
        $stmt = $pdo->prepare("
            INSERT INTO complaints (employee_id, subject, description) 
            VALUES (?, ?, ?)
        ");
        
        $stmt->execute([$employee_id, $subject, $description]);
        
        echo json_encode(['success' => true, 'message' => 'Complaint registered successfully']);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

// Get all complaints (anonymized)
function getComplaints() {
    global $pdo;
    
    try {
        // Fetch complaints - we don't return the employee_id or name to maintain anonymity in the UI
        $stmt = $pdo->query("
            SELECT id, subject, description, status, action_taken, manager_id, created_at, updated_at
            FROM complaints 
            ORDER BY created_at DESC
        ");
        
        $complaints = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'complaints' => $complaints
        ]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
// Resolve a complaint
function resolveComplaint() {
    global $pdo;
    
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        $complaintId = $data['complaint_id'] ?? 0;
        $actionTaken = $data['action_taken'] ?? '';
        $status = $data['status'] ?? 'resolved';
        $manager_id = $_SESSION['employee_id'] ?? null;
        
        if (empty($complaintId) || empty($actionTaken)) {
            echo json_encode(['success' => false, 'message' => 'Missing required fields']);
            return;
        }
        
        // Only managers and admins should be able to resolve complaints
        if (!in_array($_SESSION['role'], ['admin', 'manager', 'hr'])) {
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }
        
        $stmt = $pdo->prepare("
            UPDATE complaints 
            SET status = ?, action_taken = ?, manager_id = ?, updated_at = NOW()
            WHERE id = ?
        ");
        
        $stmt->execute([$status, $actionTaken, $manager_id, $complaintId]);
        
        echo json_encode(['success' => true, 'message' => 'Complaint status updated successfully']);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

// Delete a complaint
function deleteComplaint() {
    global $pdo;
    
    try {
        if ($_SESSION['role'] !== 'admin') {
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        $data = json_decode(file_get_contents('php://input'), true);
        $complaintId = $data['complaint_id'] ?? 0;
        
        if (empty($complaintId)) {
            echo json_encode(['success' => false, 'message' => 'Missing complaint ID']);
            return;
        }
        
        $stmt = $pdo->prepare("DELETE FROM complaints WHERE id = ?");
        $stmt->execute([$complaintId]);
        
        echo json_encode(['success' => true, 'message' => 'Complaint removed successfully']);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}
?>
