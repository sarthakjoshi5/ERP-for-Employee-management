-- ============================================================
--  erp_schema.sql  —  Clean ERP Schema
--  Run this in phpMyAdmin or MySQL CLI:
--    mysql -u root -p < erp_schema.sql
-- ============================================================

CREATE DATABASE IF NOT EXISTS erp_management
    CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE erp_management;

-- ──────────────────────────────────────────────────────────
--  EMPLOYEES  (single source of truth for login + all modules)
-- ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS erp_employees (
    id          VARCHAR(20)    NOT NULL PRIMARY KEY,   -- e.g. EMP001
    username    VARCHAR(50)    NOT NULL UNIQUE,
    password    VARCHAR(100)   NOT NULL,               -- plain text (same as localStorage version)
    name        VARCHAR(100)   NOT NULL,
    email       VARCHAR(100)   NOT NULL UNIQUE,
    phone       VARCHAR(30)    DEFAULT '',
    department  VARCHAR(50)    DEFAULT '',
    designation VARCHAR(100)   DEFAULT '',
    role        VARCHAR(20)    NOT NULL DEFAULT 'employee',
    salary      DECIMAL(12,2)  DEFAULT 0,
    status      VARCHAR(20)    DEFAULT 'active',
    location    VARCHAR(100)   DEFAULT '',
    join_date   DATE           DEFAULT (CURDATE()),
    attendance  JSON           DEFAULT ('[]'),         -- stored as JSON array
    created_at  TIMESTAMP      DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP      DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ──────────────────────────────────────────────────────────
--  COMPLAINTS
-- ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS erp_complaints (
    id           INT            AUTO_INCREMENT PRIMARY KEY,
    employee_id  VARCHAR(20)    NOT NULL,
    subject      VARCHAR(255)   NOT NULL,
    description  TEXT           NOT NULL,
    status       VARCHAR(30)    DEFAULT 'pending',
    action_taken TEXT,
    manager_id   VARCHAR(20),
    created_at   TIMESTAMP      DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP      DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES erp_employees(id) ON DELETE CASCADE
);

-- ──────────────────────────────────────────────────────────
--  LEAVE REQUESTS
-- ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS erp_leaves (
    id              VARCHAR(30)   NOT NULL PRIMARY KEY,  -- e.g. LV1714800000000
    employee_id     VARCHAR(20)   NOT NULL,
    employee_name   VARCHAR(100)  NOT NULL,
    type            VARCHAR(30)   NOT NULL,
    start_date      DATE          NOT NULL,
    end_date        DATE          NOT NULL,
    days            INT           NOT NULL DEFAULT 1,
    reason          TEXT,
    status          VARCHAR(20)   DEFAULT 'pending',
    approver_id     VARCHAR(20),
    approver_name   VARCHAR(100),
    created_at      TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES erp_employees(id) ON DELETE CASCADE
);

-- ──────────────────────────────────────────────────────────
--  SEED DATA — default employees (mirrors erp_dashboard.js)
-- ──────────────────────────────────────────────────────────
INSERT IGNORE INTO erp_employees (id, username, password, name, email, department, designation, role, salary, status, join_date) VALUES
('EMP001','sarthak',  'pass123','Sarthak Joshi',      'sarthak.joshi@company.com',     'Management','CEO',                 'admin',      120000, 'active','2023-01-01'),
('EMP002','vaishnavi','pass123','Vaishnavi Gaikwad',  'vaishnavi.gaikwad@company.com', 'Management','Managing Director',   'admin',      100000, 'active','2023-01-01'),
('EMP003','haripriya','pass123','Haripriya Patil',    'haripriya.patil@company.com',   'Management','General Manager',     'admin',       90000, 'active','2023-01-01'),
('EMP004','akash',    'pass123','Akash Chavan',       'akash.chavan@company.com',      'Management','Assistant Manager',   'admin',       85000, 'active','2023-01-01'),
('EMP005','rajesh',   'pass123','Rajesh Kumar',       'rajesh.kumar@company.com',      'Management','Manager',             'manager',     80000, 'active','2023-01-01'),
('EMP006','priya',    'pass123','Priya Sharma',       'priya.sharma@company.com',      'HR',        'HR Manager',          'hr',          55000, 'active','2023-01-01'),
('EMP007','amit',     'pass123','Amit Patel',         'amit.patel@company.com',        'Finance',   'Finance Manager',     'finance',     65000, 'active','2023-01-01'),
('EMP008','neha',     'pass123','Neha Gupta',         'neha.gupta@company.com',        'Sales',     'Sales Manager',       'sales',       50000, 'active','2023-01-01'),
('EMP009','vijay',    'pass123','Vijay Singh',        'vijay.singh@company.com',       'IT',        'IT Manager',          'it',          60000, 'active','2023-01-01'),
('EMP010','anita',    'pass123','Anita Desai',        'anita.desai@company.com',       'Marketing', 'Marketing Manager',   'marketing',   48000, 'active','2023-01-01'),
('EMP011','rahul',    'pass123','Rahul Verma',        'rahul.verma@company.com',       'Operations','Operations Manager',  'operations',  52000, 'active','2023-01-01'),
('EMP012','sneha',    'pass123','Sneha Reddy',        'sneha.reddy@company.com',       'HR',        'HR Executive',        'hr',          35000, 'active','2023-01-01'),
('EMP013','karthik',  'pass123','Karthik Nair',       'karthik.nair@company.com',      'Sales',     'Sales Executive',     'sales',       32000, 'active','2023-01-01'),
('EMP014','divya',    'pass123','Divya Krishnan',     'divya.krishnan@company.com',    'Finance',   'Accountant',          'finance',     38000, 'active','2023-01-01'),
('EMP015','arjun',    'pass123','Arjun Mehta',        'arjun.mehta@company.com',       'IT',        'Software Developer',  'it',          45000, 'active','2023-01-01'),
('EMP016','kavita',   'pass123','Kavita Joshi',       'kavita.joshi@company.com',      'Marketing', 'Marketing Executive', 'marketing',   30000, 'active','2023-01-01'),
('EMP017','rohit',    'pass123','Rohit Sharma',       'rohit.sharma@company.com',      'Operations','Operations Executive','operations',  28000, 'active','2023-01-01'),
('EMP018','meera',    'pass123','Meera Iyer',         'meera.iyer@company.com',        'Sales',     'Sales Coordinator',   'sales',       26000, 'active','2023-01-01'),
('EMP019','suresh',   'pass123','Suresh Babu',        'suresh.babu@company.com',       'IT',        'System Administrator','it',          42000, 'active','2023-01-01');
