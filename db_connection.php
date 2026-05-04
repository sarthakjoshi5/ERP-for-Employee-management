<?php
// ============================================================
//  db_connection.php — PDO MySQL Connection
//  ERP for Employee Management
//  Adjust HOST, USER, PASS, DBNAME to match your setup.
//  Default: XAMPP  →  localhost / root / "" / erp_management
// ============================================================

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');           // blank for XAMPP; 'root' for WAMP
define('DB_NAME', 'erp_management');

try {
    $pdo = new PDO(
        'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4',
        DB_USER,
        DB_PASS,
        [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]
    );
} catch (PDOException $e) {
    // Return JSON error so the JS fallback can detect it gracefully
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'message' => 'DB connection failed: ' . $e->getMessage()]);
    exit;
}
