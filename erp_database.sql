-- ERP Management System Database Schema
-- Create database
CREATE DATABASE IF NOT EXISTS erp_management;
USE erp_management;

-- Users table for authentication
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'manager', 'employee', 'hr', 'finance') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Employees table
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    department VARCHAR(50),
    designation VARCHAR(50),
    salary DECIMAL(10,2),
    status ENUM('active', 'inactive', 'terminated') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(200) NOT NULL,
    category VARCHAR(100),
    stock_quantity INT DEFAULT 0,
    unit_price DECIMAL(10,2),
    status ENUM('active', 'inactive', 'discontinued') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders table
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_number VARCHAR(50) UNIQUE NOT NULL,
    customer_name VARCHAR(200) NOT NULL,
    order_date DATE NOT NULL,
    total_amount DECIMAL(10,2),
    status ENUM('pending', 'processing', 'delivered', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Attendance table
CREATE TABLE attendance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    date DATE NOT NULL,
    check_in TIME,
    check_out TIME,
    status ENUM('present', 'absent', 'late', 'half_day') DEFAULT 'present',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);

-- Payroll table
CREATE TABLE payroll (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    month DATE NOT NULL,
    basic_salary DECIMAL(10,2),
    allowances DECIMAL(10,2),
    deductions DECIMAL(10,2),
    net_salary DECIMAL(10,2),
    status ENUM('generated', 'paid', 'processed') DEFAULT 'generated',
    payment_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);

-- Insert admin users
INSERT INTO users (username, password, role) VALUES
('sarthak', '$2y$10$abcdefghijklmnopqrstuvwx', 'admin'),
('vaishnavi', '$2y$10$abcdefghijklmnopqrstuvwx', 'admin'),
('haripriya', '$2y$10$abcdefghijklmnopqrstuvwx', 'admin'),
('akash', '$2y$10$abcdefghijklmnopqrstuvwx', 'admin');

-- Insert employees
INSERT INTO employees (name, email, department, designation, salary) VALUES
('Sarthak Joshi', 'sarthak.joshi@company.com', 'Management', 'CEO', 120000.00),
('Vaishnavi Gaikwad', 'vaishnavi.gaikwad@company.com', 'Management', 'Managing Director', 100000.00),
('Haripriya Patil', 'haripriya.patil@company.com', 'Management', 'General Manager', 90000.00),
('Akash Chavan', 'akash.chavan@company.com', 'Management', 'Assistant Manager', 85000.00),
('Rajesh Kumar', 'rajesh.kumar@company.com', 'Management', 'CEO', 80000.00),
('Priya Sharma', 'priya.sharma@company.com', 'HR', 'HR Manager', 55000.00),
('Amit Patel', 'amit.patel@company.com', 'Finance', 'Finance Manager', 65000.00),
('Neha Gupta', 'neha.gupta@company.com', 'Sales', 'Sales Manager', 50000.00),
('Vijay Singh', 'vijay.singh@company.com', 'IT', 'IT Manager', 60000.00),
('Anita Desai', 'anita.desai@company.com', 'Marketing', 'Marketing Manager', 48000.00),
('Rahul Verma', 'rahul.verma@company.com', 'Operations', 'Operations Manager', 52000.00),
('Sneha Reddy', 'sneha.reddy@company.com', 'HR', 'HR Executive', 35000.00),
('Karthik Nair', 'karthik.nair@company.com', 'Sales', 'Sales Executive', 32000.00),
('Divya Krishnan', 'divya.krishnan@company.com', 'Finance', 'Accountant', 38000.00),
('Arjun Mehta', 'arjun.mehta@company.com', 'IT', 'Software Developer', 45000.00),
('Kavita Joshi', 'kavita.joshi@company.com', 'Marketing', 'Marketing Executive', 30000.00),
('Rohit Sharma', 'rohit.sharma@company.com', 'Operations', 'Operations Executive', 28000.00),
('Meera Iyer', 'meera.iyer@company.com', 'Sales', 'Sales Coordinator', 26000.00),
('Suresh Babu', 'suresh.babu@company.com', 'IT', 'System Administrator', 42000.00);

-- Insert sample products
INSERT INTO products (code, name, category, stock_quantity, unit_price) VALUES
('LAP001', 'Laptop Pro 15"', 'Electronics', 50, 100000.00),
('MOU001', 'Wireless Mouse', 'Electronics', 200, 500.00),
('KEY001', 'Mechanical Keyboard', 'Electronics', 100, 900.00),
('MON001', '24" Monitor', 'Electronics', 5, 30000.00);

-- Insert sample orders
INSERT INTO orders (order_number, customer_name, order_date, total_amount, status) VALUES
('ORD-2024-001', 'ABC Corporation', '2024-01-15', 1500.00, 'delivered'),
('ORD-2024-002', 'XYZ Industries', '2024-01-20', 800.00, 'processing'),
('ORD-2024-002', 'royal pv. ltd.', '2024-01-20', 800.00, 'processing'),
('ORD-2024-002', 'PQR Industries', '2024-01-20', 800.00, 'delivered'),
('ORD-2024-003', 'StartUp Tech', '2024-01-25', 1200.00, 'pending');
    stock_quantity INT DEFAULT 0,
    reorder_level INT DEFAULT 10,
    supplier_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Suppliers table
CREATE TABLE suppliers (
    supplier_id INT AUTO_INCREMENT PRIMARY KEY,
    supplier_name VARCHAR(200) NOT NULL,
    contact_person VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Customers table
CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(200) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(20),
    address TEXT,
    company_name VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders table
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    order_number VARCHAR(50) UNIQUE NOT NULL,
    customer_id INT,
    order_date DATE NOT NULL,
    delivery_date DATE,
    status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    total_amount DECIMAL(10,2),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Order Items table
CREATE TABLE order_items (
    order_item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(10,2),
    total_price DECIMAL(10,2),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Inventory table
CREATE TABLE inventory (
    inventory_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    warehouse_location VARCHAR(100),
    quantity INT DEFAULT 0,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Purchase Orders table
CREATE TABLE purchase_orders (
    po_id INT AUTO_INCREMENT PRIMARY KEY,
    po_number VARCHAR(50) UNIQUE NOT NULL,
    supplier_id INT,
    order_date DATE NOT NULL,
    expected_delivery DATE,
    status ENUM('draft', 'sent', 'received', 'cancelled') DEFAULT 'draft',
    total_amount DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
);

-- Purchase Order Items table
CREATE TABLE purchase_order_items (
    po_item_id INT AUTO_INCREMENT PRIMARY KEY,
    po_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(10,2),
    total_price DECIMAL(10,2),
    FOREIGN KEY (po_id) REFERENCES purchase_orders(po_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Attendance table
CREATE TABLE attendance (
    attendance_id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    date DATE NOT NULL,
    check_in TIME,
    check_out TIME,
    status ENUM('present', 'absent', 'late', 'half_day') DEFAULT 'present',
    notes TEXT,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
    UNIQUE KEY unique_employee_date (employee_id, date)
);

-- Leave Requests table
CREATE TABLE leave_requests (
    leave_id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    leave_type ENUM('sick', 'casual', 'annual', 'maternity', 'paternity') NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    days_count INT NOT NULL,
    reason TEXT,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    approved_by INT,
    approved_at TIMESTAMP NULL,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
    FOREIGN KEY (approved_by) REFERENCES employees(employee_id)
);

-- Payroll table
CREATE TABLE payroll (
    payroll_id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    month DATE NOT NULL,
    basic_salary DECIMAL(10,2) NOT NULL,
    allowances DECIMAL(10,2) DEFAULT 0,
    deductions DECIMAL(10,2) DEFAULT 0,
    overtime_hours DECIMAL(5,2) DEFAULT 0,
    overtime_pay DECIMAL(10,2) DEFAULT 0,
    net_salary DECIMAL(10,2) NOT NULL,
    payment_status ENUM('pending', 'paid') DEFAULT 'pending',
    payment_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
    UNIQUE KEY unique_employee_month (employee_id, month)
);

-- Expenses table
CREATE TABLE expenses (
    expense_id INT AUTO_INCREMENT PRIMARY KEY,
    expense_category VARCHAR(100) NOT NULL,
    description TEXT,
    amount DECIMAL(10,2) NOT NULL,
    date DATE NOT NULL,
    approved_by INT,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (approved_by) REFERENCES employees(employee_id)
);

-- Reports table
CREATE TABLE reports (
    report_id INT AUTO_INCREMENT PRIMARY KEY,
    report_name VARCHAR(200) NOT NULL,
    report_type VARCHAR(50) NOT NULL,
    generated_by INT NOT NULL,
    report_data TEXT,
    generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (generated_by) REFERENCES employees(employee_id)
);

-- Insert sample data for departments
INSERT INTO departments (department_name, description) VALUES
('Management', 'Company management and administration'),
('Sales', 'Sales and marketing operations'),
('IT', 'Information Technology and software development'),
('HR', 'Human Resources and personnel management'),
('Finance', 'Finance and accounting operations'),
('Warehouse', 'Inventory and warehouse management');

-- Insert sample admin user
INSERT INTO users (username, password, role, employee_id) VALUES
('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin', NULL);

-- Insert sample employees
INSERT INTO employees (first_name, last_name, email, phone, department, designation, hire_date, salary) VALUES
('John', 'Smith', 'john.smith@company.com', '1234567890', 'Management', 'CEO', '2023-01-01', 150000.00),
('Jane', 'Doe', 'jane.doe@company.com', '2345678901', 'HR', 'HR Manager', '2023-01-15', 80000.00),
('Mike', 'Johnson', 'mike.johnson@company.com', '3456789012', 'Sales', 'Sales Manager', '2023-02-01', 90000.00),
('Sarah', 'Williams', 'sarah.williams@company.com', '4567890123', 'Finance', 'Finance Manager', '2023-02-15', 95000.00),
('David', 'Brown', 'david.brown@company.com', '5678901234', 'IT', 'IT Manager', '2023-03-01', 100000.00);

-- Insert user accounts for employees (password: 'password')
INSERT INTO users (username, password, role, employee_id) VALUES
('john.smith', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin', 1),
('jane.doe', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'hr', 2),
('mike.johnson', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'manager', 3),
('sarah.williams', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'finance', 4),
('david.brown', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'manager', 5);

-- Insert sample products
INSERT INTO products (product_code, product_name, category, description, unit_price, stock_quantity, reorder_level) VALUES
('LAP001', 'Laptop Pro 15"', 'Electronics', 'High-performance laptop for business use', 1200.00, 50, 10),
('MOU001', 'Wireless Mouse', 'Electronics', 'Ergonomic wireless mouse', 25.00, 200, 20),
('KEY001', 'Mechanical Keyboard', 'Electronics', 'RGB mechanical keyboard', 80.00, 100, 15),
('MON001', '24" Monitor', 'Electronics', 'Full HD LED monitor', 300.00, 75, 12),
('CHA001', 'Office Chair', 'Furniture', 'Ergonomic office chair', 150.00, 30, 8);

-- Insert sample suppliers
INSERT INTO suppliers (supplier_name, contact_person, email, phone, address) VALUES
('Tech Supplies Inc', 'John Tech', 'john@techsupplies.com', '1112223333', '123 Tech Street, Tech City'),
('Furniture Plus', 'Jane Furn', 'jane@furnitureplus.com', '4445556666', '456 Furniture Ave, Furn City'),
('Office Depot', 'Mike Office', 'mike@officedepot.com', '7778889999', '789 Office Blvd, Office City');

-- Insert sample customers
INSERT INTO customers (customer_name, email, phone, address, company_name) VALUES
('ABC Corporation', 'contact@abc.com', '1234567890', '123 Business St, Business City', 'ABC Corporation'),
('XYZ Industries', 'info@xyz.com', '0987654321', '456 Industrial Ave, Industrial City', 'XYZ Industries'),
('StartUp Tech', 'hello@startup.com', '5555555555', '789 Startup Way, Tech Valley', 'StartUp Tech');

-- Insert sample orders
INSERT INTO orders (order_number, customer_id, order_date, delivery_date, status, total_amount) VALUES
('ORD-2024-001', 1, '2024-01-15', '2024-01-20', 'delivered', 1500.00),
('ORD-2024-002', 2, '2024-01-20', '2024-01-25', 'processing', 800.00),
('ORD-2024-003', 3, '2024-01-25', '2024-01-30', 'pending', 1200.00);

-- Insert sample order items
INSERT INTO order_items (order_id, product_id, quantity, unit_price, total_price) VALUES
(1, 1, 1, 1200.00, 1200.00),
(1, 2, 12, 25.00, 300.00),
(2, 3, 10, 80.00, 800.00),
(3, 1, 1, 1200.00, 1200.00);

-- Insert sample attendance data
INSERT INTO attendance (employee_id, date, check_in, check_out, status) VALUES
(1, '2024-02-01', '09:00:00', '18:00:00', 'present'),
(2, '2024-02-01', '08:45:00', '17:45:00', 'present'),
(3, '2024-02-01', '09:15:00', '18:30:00', 'late'),
(4, '2024-02-01', '09:00:00', '18:00:00', 'present'),
(5, '2024-02-01', '09:00:00', '18:00:00', 'present');

-- Complaints table
CREATE TABLE IF NOT EXISTS complaints (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    subject VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status ENUM('pending', 'under_review', 'resolved', 'action_taken') DEFAULT 'pending',
    action_taken TEXT,
    manager_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
    FOREIGN KEY (manager_id) REFERENCES employees(employee_id)
);

-- Admin Change Requests table
CREATE TABLE IF NOT EXISTS admin_change_requests (
    request_id INT AUTO_INCREMENT PRIMARY KEY,
    manager_id INT NOT NULL,
    subject VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    admin_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP NULL,
    FOREIGN KEY (manager_id) REFERENCES employees(employee_id)
);

-- Insert Team Leader employee (ID 6)
INSERT INTO employees (first_name, last_name, email, phone, department, designation, hire_date, salary) VALUES
('Alex', 'TeamLead', 'alex.teamlead@company.com', '1231231234', 'Operations', 'Team Leader', '2023-04-01', 85000.00);

-- Insert User for Team Leader
INSERT INTO users (username, password, role, employee_id) VALUES
('alex.teamlead', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'manager', 6);

