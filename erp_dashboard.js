// ERP Management System JavaScript
// Employee database (in real app, this would be server-side)
let employees = [
    {
        id: 'EMP001',
        username: 'sarthak',
        password: 'pass123',
        name: 'Sarthak Joshi',
        email: 'sarthak.joshi@company.com',
        department: 'Management',
        designation: 'CEO',
        role: 'admin',
        salary: 120000,
        status: 'active',
        attendance: []
    },
    {
        id: 'EMP002',
        username: 'vaishnavi',
        password: 'pass123',
        name: 'Vaishnavi Gaikwad',
        email: 'vaishnavi.gaikwad@company.com',
        department: 'Management',
        designation: 'Managing Director',
        role: 'admin',
        salary: 100000,
        status: 'active',
        attendance: []
    },
    {
        id: 'EMP003',
        username: 'haripriya',
        password: 'pass123',
        name: 'Haripriya Patil',
        email: 'haripriya.patil@company.com',
        department: 'Management',
        designation: 'General Manager',
        role: 'admin',
        salary: 90000,
        status: 'active',
        attendance: []
    },
    {
        id: 'EMP004',
        username: 'akash',
        password: 'pass123',
        name: 'Akash Chavan',
        email: 'akash.chavan@company.com',
        department: 'Management',
        designation: 'Assistant Manager',
        role: 'admin',
        salary: 85000,
        status: 'active',
        attendance: []
    },
    {
        id: 'EMP005',
        username: 'rajesh',
        password: 'pass123',
        name: 'Rajesh Kumar',
        email: 'rajesh.kumar@company.com',
        department: 'Management',
        designation: 'Manager',
        role: 'manager',
        salary: 80000,
        status: 'active',
        attendance: []
    },
    {
        id: 'EMP006',
        username: 'priya',
        password: 'pass123',
        name: 'Priya Sharma',
        email: 'priya.sharma@company.com',
        department: 'HR',
        designation: 'HR Manager',
        role: 'hr',
        salary: 55000,
        status: 'active',
        attendance: []
    },
    {
        id: 'EMP007',
        username: 'amit',
        password: 'pass123',
        name: 'Amit Patel',
        email: 'amit.patel@company.com',
        department: 'Finance',
        designation: 'Finance Manager',
        role: 'finance',
        salary: 65000,
        status: 'active',
        attendance: []
    },
    {
        id: 'EMP008',
        username: 'neha',
        password: 'pass123',
        name: 'Neha Gupta',
        email: 'neha.gupta@company.com',
        department: 'Sales',
        designation: 'Sales Manager',
        role: 'sales',
        salary: 50000,
        status: 'active',
        attendance: []
    },
    {
        id: 'EMP009',
        username: 'vijay',
        password: 'pass123',
        name: 'Vijay Singh',
        email: 'vijay.singh@company.com',
        department: 'IT',
        designation: 'IT Manager',
        role: 'it',
        salary: 60000,
        status: 'active',
        attendance: []
    },
    {
        id: 'EMP010',
        username: 'anita',
        password: 'pass123',
        name: 'Anita Desai',
        email: 'anita.desai@company.com',
        department: 'Marketing',
        designation: 'Marketing Manager',
        role: 'marketing',
        salary: 48000,
        status: 'active',
        attendance: []
    },
    {
        id: 'EMP011',
        username: 'rahul',
        password: 'pass123',
        name: 'Rahul Verma',
        email: 'rahul.verma@company.com',
        department: 'Operations',
        designation: 'Operations Manager',
        role: 'operations',
        salary: 52000,
        status: 'active',
        attendance: []
    },
    {
        id: 'EMP012',
        username: 'sneha',
        password: 'pass123',
        name: 'Sneha Reddy',
        email: 'sneha.reddy@company.com',
        department: 'HR',
        designation: 'HR Executive',
        role: 'hr',
        salary: 35000,
        status: 'active',
        attendance: []
    },
    {
        id: 'EMP013',
        username: 'karthik',
        password: 'pass123',
        name: 'Karthik Nair',
        email: 'karthik.nair@company.com',
        department: 'Sales',
        designation: 'Sales Executive',
        role: 'sales',
        salary: 32000,
        status: 'active',
        attendance: []
    },
    {
        id: 'EMP014',
        username: 'divya',
        password: 'pass123',
        name: 'Divya Krishnan',
        email: 'divya.krishnan@company.com',
        department: 'Finance',
        designation: 'Accountant',
        role: 'finance',
        salary: 38000,
        status: 'active',
        attendance: []
    },
    {
        id: 'EMP015',
        username: 'arjun',
        password: 'pass123',
        name: 'Arjun Mehta',
        email: 'arjun.mehta@company.com',
        department: 'IT',
        designation: 'Software Developer',
        role: 'it',
        salary: 45000,
        status: 'active',
        attendance: []
    },
    {
        id: 'EMP016',
        username: 'kavita',
        password: 'pass123',
        name: 'Kavita Joshi',
        email: 'kavita.joshi@company.com',
        department: 'Marketing',
        designation: 'Marketing Executive',
        role: 'marketing',
        salary: 30000,
        status: 'active',
        attendance: []
    },
    {
        id: 'EMP017',
        username: 'rohit',
        password: 'pass123',
        name: 'Rohit Sharma',
        email: 'rohit.sharma@company.com',
        department: 'Operations',
        designation: 'Operations Executive',
        role: 'operations',
        salary: 28000,
        status: 'active',
        attendance: []
    },
    {
        id: 'EMP018',
        username: 'meera',
        password: 'pass123',
        name: 'Meera Iyer',
        email: 'meera.iyer@company.com',
        department: 'Sales',
        designation: 'Sales Coordinator',
        role: 'sales',
        salary: 26000,
        status: 'active',
        attendance: []
    },
    {
        id: 'EMP019',
        username: 'suresh',
        password: 'pass123',
        name: 'Suresh Babu',
        email: 'suresh.babu@company.com',
        department: 'IT',
        designation: 'System Administrator',
        role: 'it',
        salary: 42000,
        status: 'active',
        attendance: []
    }
];

// Products database
let products = [
    { sku: 'SKU001', name: 'Laptop Dell Inspiron', category: 'Electronics', quantity: 25, price: 45000, status: 'In Stock' },
    { sku: 'SKU002', name: 'Office Chair', category: 'Furniture', quantity: 8, price: 8500, status: 'Low Stock' },
    { sku: 'SKU003', name: 'Windows 10 Pro', category: 'Software', quantity: 50, price: 12000, status: 'In Stock' }
];

// Complaints database
let complaints = [];

// Leaves and Pending Approvals databases
let leaves = [];
let pending_approvals = [];

// Persistence Functions
function saveToLocalStorage() {
    localStorage.setItem('erp_employees', JSON.stringify(employees));
    localStorage.setItem('erp_products', JSON.stringify(products));
    localStorage.setItem('erp_complaints', JSON.stringify(complaints));
    localStorage.setItem('erp_leaves', JSON.stringify(leaves));
    localStorage.setItem('erp_pending_approvals', JSON.stringify(pending_approvals));
}

function loadFromLocalStorage() {
    const savedEmployees = localStorage.getItem('erp_employees');
    const savedProducts = localStorage.getItem('erp_products');
    
    if (savedEmployees) {
        try {
            const parsed = JSON.parse(savedEmployees);
            if (Array.isArray(parsed) && parsed.length > 0) {
                employees = parsed;
            }
        } catch (e) { console.error('Error loading employees:', e); }
    }
    if (savedProducts) {
        try {
            const parsed = JSON.parse(savedProducts);
            if (Array.isArray(parsed) && parsed.length > 0) {
                products = parsed;
            }
        } catch (e) { console.error('Error loading products:', e); }
    }
    
    const savedComplaints = localStorage.getItem('erp_complaints');
    if (savedComplaints) {
        try {
            const parsed = JSON.parse(savedComplaints);
            if (Array.isArray(parsed)) {
                complaints = parsed;
            }
        } catch (e) { console.error('Error loading complaints:', e); }
    }
    
    const savedLeaves = localStorage.getItem('erp_leaves');
    if (savedLeaves) {
        try {
            const parsed = JSON.parse(savedLeaves);
            if (Array.isArray(parsed)) leaves = parsed;
        } catch(e) {}
    }
    
    const savedPendingApprovals = localStorage.getItem('erp_pending_approvals');
    if (savedPendingApprovals) {
        try {
            const parsed = JSON.parse(savedPendingApprovals);
            if (Array.isArray(parsed)) pending_approvals = parsed;
        } catch(e) {}
    }
}

// Initialize persistence
loadFromLocalStorage();

// Handle mode from URL parameters
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    
    if (mode === 'admin') {
        showAdminLogin();
    } else if (mode === 'signup') {
        showSignUp();
    } else {
        showEmployeeLogin();
    }
});

let currentUser = null;



// Show admin login
function showAdminLogin() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('adminLoginPage').style.display = 'flex';
    document.getElementById('signUpPage').style.display = 'none';
}

// Show employee login
function showEmployeeLogin() {
    document.getElementById('adminLoginPage').style.display = 'none';
    document.getElementById('signUpPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'flex';
}

// Show sign up
function showSignUp() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('adminLoginPage').style.display = 'none';
    document.getElementById('signUpPage').style.display = 'flex';
    
    // Set today's date as default join date
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('signupJoinDate').value = today;
}

// Setup login handlers immediately
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const employee = employees.find(emp => emp.username === username && emp.password === password);
        if (employee) {
            currentUser = employee;
            showDashboard(employee);
        } else {
            alert('Invalid username or password. Please check your credentials and try again.');
        }
    });
}

const adminLoginForm = document.getElementById('adminLoginForm');
if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('adminUsername').value;
        const password = document.getElementById('adminPassword').value;
        const adminEmployee = employees.find(emp => emp.username === username && emp.password === password && emp.role === 'admin');
        if (adminEmployee) {
            currentUser = adminEmployee;
            showDashboard(currentUser);
        } else {
            alert('Invalid admin credentials. Please check your username and password and try again.');
        }
    });
}

// Wrap other form initializations in DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Setup sign up form handler
    const signUpForm = document.getElementById('signUpForm');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            console.log('Sign up form submitted'); // Debug log
            
            // Get form values
            const firstName = document.getElementById('signupFirstName').value.trim();
            const lastName = document.getElementById('signupLastName').value.trim();
            const email = document.getElementById('signupEmail').value.trim();
            const phone = document.getElementById('signupPhone').value.trim();
            const department = document.getElementById('signupDepartment').value;
            const username = document.getElementById('signupUsername').value.trim();
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            const termsAccepted = document.getElementById('signupTerms').checked;
            
            console.log('Form values:', { firstName, lastName, email, department, username }); // Debug log
            
            // Validation
            if (!firstName || !lastName || !email || !phone || !department || !username || !password || !confirmPassword) {
                alert('Please fill in all required fields.');
                return;
            }
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }
            
            if (!termsAccepted) {
                alert('You must agree to the terms and conditions.');
                return;
            }
            
            // Check if username already exists
            if (employees.find(emp => emp.username === username)) {
                alert('Username already exists. Please choose a different username.');
                return;
            }
            
            // Check if email already exists
            if (employees.find(emp => emp.email === email)) {
                alert('Email already registered. Please use a different email address.');
                return;
            }
            
            // Generate employee ID
            const newId = 'EMP' + String(employees.length + 1).padStart(3, '0');
            
            // Set default salary and designation based on department
            let defaultSalary = 25000; // Base salary
            let defaultDesignation = 'Employee'; // Base designation
            
            switch(department) {
                case 'IT':
                    defaultSalary = 45000;
                    defaultDesignation = 'IT Professional';
                    break;
                case 'Finance':
                    defaultSalary = 38000;
                    defaultDesignation = 'Finance Executive';
                    break;
                case 'Sales':
                    defaultSalary = 32000;
                    defaultDesignation = 'Sales Executive';
                    break;
                case 'HR':
                    defaultSalary = 35000;
                    defaultDesignation = 'HR Executive';
                    break;
                case 'Marketing':
                    defaultSalary = 30000;
                    defaultDesignation = 'Marketing Executive';
                    break;
                case 'Operations':
                    defaultSalary = 28000;
                    defaultDesignation = 'Operations Executive';
                    break;
            }
            
            // Set today's date as join date
            const today = new Date().toISOString().split('T')[0];
            
            // Create new employee object
            const newEmployee = {
                id: newId,
                username: username,
                password: password,
                name: firstName + ' ' + lastName,
                email: email,
                department: department,
                designation: defaultDesignation,
                role: 'employee', // New sign-ups are always employees
                salary: defaultSalary,
                status: 'active',
                phone: phone,
                joinDate: today,
                attendance: []
            };

            
            console.log('New employee created:', newEmployee); // Debug log
            
            // Add to employees array
            employees.push(newEmployee);
            saveToLocalStorage();
            
            // Show success message with login credentials
            alert('Account created successfully!\n\nYour Employee ID: ' + newId + '\nUsername: ' + username + '\nPassword: ' + password + '\nDesignation: ' + defaultDesignation + '\nDefault Salary: ₹' + defaultSalary.toLocaleString() + '\n\nYou can now login with your credentials.');
            
            // Clear form and redirect to login
            this.reset();
            showEmployeeLogin();
        });
    } else {
        console.log('Sign up form not found'); // Debug log
    }
    
    // Also add event delegation as backup
    document.addEventListener('submit', function(e) {
        if (e.target && e.target.id === 'signUpForm') {
            e.preventDefault();
            console.log('Sign up form submitted via delegation'); // Debug log
            
            // Get form values
            const firstName = document.getElementById('signupFirstName').value.trim();
            const lastName = document.getElementById('signupLastName').value.trim();
            const email = document.getElementById('signupEmail').value.trim();
            const phone = document.getElementById('signupPhone').value.trim();
            const department = document.getElementById('signupDepartment').value;
            const username = document.getElementById('signupUsername').value.trim();
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            const termsAccepted = document.getElementById('signupTerms').checked;
            
            // Validation
            if (!firstName || !lastName || !email || !phone || !department || !username || !password || !confirmPassword) {
                alert('Please fill in all required fields.');
                return;
            }
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }
            
            if (!termsAccepted) {
                alert('You must agree to the terms and conditions.');
                return;
            }
            
            // Check if username already exists
            if (employees.find(emp => emp.username === username)) {
                alert('Username already exists. Please choose a different username.');
                return;
            }
            
            // Check if email already exists
            if (employees.find(emp => emp.email === email)) {
                alert('Email already registered. Please use a different email address.');
                return;
            }
            
            // Generate employee ID
            const newId = 'EMP' + String(employees.length + 1).padStart(3, '0');
            
            // Set default salary and designation based on department
            let defaultSalary = 25000; // Base salary
            let defaultDesignation = 'Employee'; // Base designation
            
            switch(department) {
                case 'IT':
                    defaultSalary = 45000;
                    defaultDesignation = 'IT Professional';
                    break;
                case 'Finance':
                    defaultSalary = 38000;
                    defaultDesignation = 'Finance Executive';
                    break;
                case 'Sales':
                    defaultSalary = 32000;
                    defaultDesignation = 'Sales Executive';
                    break;
                case 'HR':
                    defaultSalary = 35000;
                    defaultDesignation = 'HR Executive';
                    break;
                case 'Marketing':
                    defaultSalary = 30000;
                    defaultDesignation = 'Marketing Executive';
                    break;
                case 'Operations':
                    defaultSalary = 28000;
                    defaultDesignation = 'Operations Executive';
                    break;
            }
            
            // Set today's date as join date
            const today = new Date().toISOString().split('T')[0];
            
            // Create new employee object
            const newEmployee = {
                id: newId,
                username: username,
                password: password,
                name: firstName + ' ' + lastName,
                email: email,
                department: department,
                designation: defaultDesignation,
                role: 'employee', // New sign-ups are always employees
                salary: defaultSalary,
                status: 'active',
                phone: phone,
                joinDate: today
            };
            
            // Add to employees array
            employees.push(newEmployee);
            
            // Show success message with login credentials
            alert('Account created successfully!\n\nYour Employee ID: ' + newId + '\nUsername: ' + username + '\nPassword: ' + password + '\nDesignation: ' + defaultDesignation + '\nDefault Salary: ₹' + defaultSalary.toLocaleString() + '\n\nYou can now login with your credentials.');
            
            // Clear form and redirect to login
            e.target.reset();
            showEmployeeLogin();
        }
    });
});

// Show dashboard
function showDashboard(user) {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('adminLoginPage').style.display = 'none';
    document.getElementById('signUpPage').style.display = 'none';
    document.getElementById('dashboardPage').style.display = 'flex';
    
    const userNameDisplay = document.getElementById('userNameDisplay');
    if (userNameDisplay) userNameDisplay.textContent = user.name;
    
    // Initialize Lucide icons if available
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }    
    // Setup menu based on role
    setupMenu(user.role);
    
    // Hide employee management section for non-admin users
    const employeesSection = document.getElementById('employees');
    if (user.role !== 'admin') {
        employeesSection.classList.add('hidden');
    }
    
    // Show appropriate sections
    if (user.role === 'admin') {
        loadAdminDashboard();
        loadReports();
    } else if (user.role === 'manager') {
        loadManagerDashboard(user);
        loadReports();
    } else {
        loadEmployeeDashboard(user);
    }
    
    // Always load user's attendance table
    loadAttendanceTable();

    // Check for active check-in
    restoreAttendanceStatus(user);
}

// Restore attendance UI status
function restoreAttendanceStatus(user) {
    const statusDiv = document.getElementById('attendanceStatus');
    const workingHoursElem = document.getElementById('workingHours');
    
    if (user.activeCheckIn) {
        const checkInTime = new Date(user.activeCheckIn);
        statusDiv.innerHTML = `
            <p style="color: #22543d; font-weight: bold;">✅ Checked in at ${checkInTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
            <p style="color: #718096;">Have a productive day!</p>
        `;
        statusDiv.style.background = '#f0fff4';
        
        // Update working hours display if possible
        const now = new Date();
        const diff = now - checkInTime;
        const h = Math.floor(diff / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        if (workingHoursElem) workingHoursElem.textContent = `${h}h ${m}m`;
    } else {
        statusDiv.innerHTML = `<p>You haven't checked in today</p>`;
        statusDiv.style.background = '#ebf8ff';
        if (workingHoursElem) workingHoursElem.textContent = '0h 0m';
    }
}


// Setup menu based on role
function setupMenu(role) {
    const menu = document.getElementById('sidebarMenu');
    menu.innerHTML = '';
    
    const commonItems = [
        { href: '#dashboard', text: 'Dashboard' },
        { href: '#myProfile', text: 'My Profile' },
        { href: '#attendance', text: 'Attendance' },
        { href: '#leaves', text: 'Leave Management' },
        { href: '#payroll', text: 'Payroll' },
        { href: '#complaints', text: 'Complaints' }
    ];
    
    const adminItems = [
        { href: '#employees', text: 'Employee Management' },
        { href: '#inventory', text: 'Inventory Management' },
        { href: '#sales', text: 'Sales Management' },
        { href: '#reports', text: 'Reports & Analytics' },
        { href: '#pending_approvals', text: 'Pending Approvals' }
    ];
    
    const managerItems = [
        { href: '#employees', text: 'Employee Management' },
        { href: '#sales', text: 'Sales Management' },
        { href: '#reports', text: 'Reports & Analytics' }
    ];
    
    // Add common items (My Profile is now available to everyone)
    commonItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.href}" class="nav-link ${item.href === '#dashboard' ? 'active' : ''}">${item.text}</a>`;
        menu.appendChild(li);
    });
    
    // Add role-specific items
    if (role === 'admin') {
        adminItems.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${item.href}" class="nav-link">${item.text}</a>`;
            menu.appendChild(li);
        });
    } else if (role === 'manager') {
        managerItems.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${item.href}" class="nav-link">${item.text}</a>`;
            menu.appendChild(li);
        });
    }
    
    // Add logout
    const logoutLi = document.createElement('li');
    logoutLi.innerHTML = '<a href="#" onclick="logout()" class="nav-link">Logout</a>';
    menu.appendChild(logoutLi);
    
    // Setup navigation
    setupNavigation();
}

// Load admin dashboard
function loadAdminDashboard() {
    const statsGrid = document.getElementById('statsGrid');
    statsGrid.innerHTML = `
        <div class="stat-card">
            <div class="stat-icon">👥</div>
            <div class="stat-value">${employees.length}</div>
            <div class="stat-label">Total Employees</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">✅</div>
            <div class="stat-value">${employees.filter(e => e.status === 'active').length}</div>
            <div class="stat-label">Active Employees</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">💰</div>
            <div class="stat-value">₹${employees.reduce((sum, e) => sum + e.salary, 0).toLocaleString()}</div>
            <div class="stat-label">Total Payroll</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">📊</div>
            <div class="stat-value">${employees.filter(e => e.role === 'admin').length}</div>
            <div class="stat-label">Admin Users</div>
        </div>
    `;
    
    loadEmployeeTable();
    loadProfile(currentUser);
    loadPayrollData(currentUser);
    updateCurrentTime();
    loadAttendanceCharts();
}

// Load manager dashboard
function loadManagerDashboard(user) {
    const statsGrid = document.getElementById('statsGrid');
    statsGrid.innerHTML = `
        <div class="stat-card">
            <div class="stat-icon">👥</div>
            <div class="stat-value">${employees.length}</div>
            <div class="stat-label">Team Members</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">💰</div>
            <div class="stat-value">₹8.45L</div>
            <div class="stat-label">Monthly Sales</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">📦</div>
            <div class="stat-value">156</div>
            <div class="stat-label">Products</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">📈</div>
            <div class="stat-value">+24%</div>
            <div class="stat-label">Growth Rate</div>
        </div>
    `;
    
    loadProfile(user);
    loadPayrollData(user);
    updateCurrentTime();
    loadAttendanceCharts();
}

// Load employee dashboard
function loadEmployeeDashboard(user) {
    const statsGrid = document.getElementById('statsGrid');
    
    // Calculate total hours from attendance history
    let totalHoursCount = 0;
    if (user.attendance) {
        user.attendance.forEach(record => {
            const match = record.workingHours.match(/(\d+)h/);
            if (match) totalHoursCount += parseInt(match[1]);
        });
    }

    statsGrid.innerHTML = `
        <div class="stat-card">
            <div class="stat-icon">👤</div>
            <div class="stat-value">${user.name}</div>
            <div class="stat-label">Welcome</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">💼</div>
            <div class="stat-value">${user.designation}</div>
            <div class="stat-label">Position</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">⏱️</div>
            <div class="stat-value">${totalHoursCount}h</div>
            <div class="stat-label">Total Hours Worked</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">💰</div>
            <div class="stat-value">₹${user.salary.toLocaleString()}</div>
            <div class="stat-label">Monthly Salary</div>
        </div>
    `;
    
    loadProfile(user);
    loadPayrollData(user);
    updateCurrentTime();
    loadAttendanceCharts();
}

// Load profile
function loadProfile(user) {
    // Update profile stats
    document.getElementById('profileName').textContent = user.name;
    document.getElementById('profileRole').textContent = user.designation;
    document.getElementById('profileDept').textContent = user.department;
    document.getElementById('profileJoinDate').textContent = '01-Jan-2023';
    
    // Personal Information
    const profileInfo = document.getElementById('profileInfo');
    profileInfo.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <h4>Basic Details</h4>
                <p><strong>Employee ID:</strong> ${user.id}</p>
                <p><strong>Full Name:</strong> ${user.name}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Username:</strong> ${user.username}</p>
            </div>
            <div>
                <h4>Contact Information</h4>
                <p><strong>Work Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>Location:</strong> Mumbai, India</p>
                <p><strong>Time Zone:</strong> IST (UTC+5:30)</p>
            </div>
        </div>
    `;
    
    // Employment Details
    const employmentInfo = document.getElementById('employmentInfo');
    employmentInfo.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <h4>Job Information</h4>
                <p><strong>Department:</strong> ${user.department}</p>
                <p><strong>Designation:</strong> ${user.designation}</p>
                <p><strong>Role:</strong> ${user.role.charAt(0).toUpperCase() + user.role.slice(1)}</p>
                <p><strong>Reports To:</strong> ${user.role === 'admin' ? 'Board of Directors' : user.role === 'manager' ? 'Department Head' : 'Team Lead'}</p>
            </div>
            <div>
                <h4>Compensation</h4>
                <p><strong>Monthly Salary:</strong> ₹${user.salary.toLocaleString()}</p>
                <p><strong>Annual Salary:</strong> ₹${(user.salary * 12).toLocaleString()}</p>
                <p><strong>Pay Grade:</strong> ${user.salary >= 80000 ? 'A' : user.salary >= 50000 ? 'B' : 'C'}</p>
                <p><strong>Employment Type:</strong> Full-time</p>
            </div>
        </div>
    `;
    
    // System Access
    const accessInfo = document.getElementById('accessInfo');
    let accessLevel = '';
    let permissions = [];
    
    if (user.role === 'admin') {
        accessLevel = 'Full System Access';
        permissions = [
            'Employee Management',
            'Inventory Management',
            'Sales Management',
            'Reports & Analytics',
            'Payroll Management',
            'System Administration'
        ];
    } else if (user.role === 'manager') {
        accessLevel = 'Manager Access';
        permissions = [
            'Employee Management',
            'Sales Management',
            'Reports & Analytics',
            'Team Attendance',
            'Payroll View'
        ];
    } else {
        accessLevel = 'Employee Access';
        permissions = [
            'Personal Profile',
            'Attendance Management',
            'Payroll View',
            'Leave Requests'
        ];
    }
    
    accessInfo.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <h4>Access Level</h4>
                <p><strong>Role:</strong> ${user.role.charAt(0).toUpperCase() + user.role.slice(1)}</p>
                <p><strong>Access Level:</strong> ${accessLevel}</p>
                <p><strong>Last Login:</strong> ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                <p><strong>Account Status:</strong> <span class="badge badge-success">Active</span></p>
            </div>
            <div>
                <h4>Permissions</h4>
                <ul style="list-style: none; padding: 0;">
                    ${permissions.map(perm => `<li style="padding: 5px 0;">✅ ${perm}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    // Populate form fields with current user data
    setTimeout(() => {
        const displayNameField = document.getElementById('displayName');
        const emailField = document.getElementById('profileEmail');
        const phoneField = document.getElementById('profilePhone');
        const locationField = document.getElementById('profileLocation');
        
        if (displayNameField) displayNameField.value = user.name;
        if (emailField) emailField.value = user.email;
        if (phoneField) phoneField.value = '+91 98765 43210';
        if (locationField) locationField.value = 'Mumbai, India';
    }, 100);
}

// Load employee table
function loadEmployeeTable() {
    const tbody = document.getElementById('employeeTableBody');
    tbody.innerHTML = '';
    
    employees.forEach(emp => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td><strong>${emp.username}</strong></td>
            <td><span style="background: #fff3cd; color: #856404; padding: 2px 6px; border-radius: 3px; font-family: monospace;">${emp.password}</span></td>
            <td>${emp.department}</td>
            <td>${emp.designation}</td>
            <td>${emp.email}</td>
            <td><span class="badge badge-${emp.role === 'admin' ? 'danger' : emp.role === 'manager' ? 'warning' : 'info'}">${emp.role.charAt(0).toUpperCase() + emp.role.slice(1)}</span></td>
            <td>₹${emp.salary.toLocaleString()}</td>
            <td><span class="badge badge-${emp.status === 'active' ? 'success' : 'secondary'}">${emp.status}</span></td>
            <td>
                <button onclick="editEmployee('${emp.id}')" class="btn" style="padding: 5px 10px; margin-right: 5px;">Edit</button>
                <button onclick="deleteEmployee('${emp.id}')" class="btn" style="padding: 5px 10px; background: #e53e3e;">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Add employee
document.getElementById('addEmployeeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newEmployee = {
        id: document.getElementById('empId').value,
        username: document.getElementById('empUsername').value,
        password: document.getElementById('empPassword').value,
        name: document.getElementById('empName').value,
        email: document.getElementById('empEmail').value,
        department: document.getElementById('empDept').value,
        designation: document.getElementById('empDesignation').value,
        role: document.getElementById('empRole').value,
        salary: parseFloat(document.getElementById('empSalary').value),
        status: 'active',
        attendance: []
    };

    
    // Check if employee already exists (Edit Mode)
    const existingIndex = employees.findIndex(emp => emp.id === newEmployee.id);
    
    if (existingIndex >= 0) {
        // Edit mode
        if (currentUser && currentUser.role === 'manager') {
            const approvalReq = {
                id: 'PA' + Date.now(),
                manager_id: currentUser.id,
                manager_name: currentUser.name,
                action_type: 'Edit Employee',
                module: 'Employee Management',
                details: `Editing Employee: ${newEmployee.name} (${newEmployee.id})`,
                data: newEmployee,
                created_at: new Date().toISOString(),
                status: 'pending'
            };
            pending_approvals.push(approvalReq);
            saveToLocalStorage();
            alert('Employee edit request submitted for admin approval!');
            this.reset();
            return;
        } else {
            // Keep existing attendance
            newEmployee.attendance = employees[existingIndex].attendance;
            employees[existingIndex] = newEmployee;
            alert('Employee updated successfully!');
        }
    } else {
        // Add mode
        // Check if username already exists
        if (employees.find(emp => emp.username === newEmployee.username)) {
            alert('Username already exists. Please choose a different username.');
            return;
        }
        
        // Check if email already exists
        if (employees.find(emp => emp.email === newEmployee.email)) {
            alert('Email already registered. Please use a different email address.');
            return;
        }
        
        if (currentUser && currentUser.role === 'manager') {
            const approvalReq = {
                id: 'PA' + Date.now(),
                manager_id: currentUser.id,
                manager_name: currentUser.name,
                action_type: 'Add Employee',
                module: 'Employee Management',
                details: `Adding New Employee: ${newEmployee.name}`,
                data: newEmployee,
                created_at: new Date().toISOString(),
                status: 'pending'
            };
            pending_approvals.push(approvalReq);
            saveToLocalStorage();
            alert('Employee addition request submitted for admin approval!');
            this.reset();
            return;
        } else {
            employees.push(newEmployee);
            alert('Employee added successfully!\n\nUsername: ' + newEmployee.username + '\nPassword: ' + newEmployee.password);
        }
    }
    
    saveToLocalStorage();
    loadEmployeeTable();
    this.reset();
});

// Edit employee
function editEmployee(id) {
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        document.getElementById('empId').value = employee.id;
        document.getElementById('empUsername').value = employee.username;
        document.getElementById('empPassword').value = employee.password;
        document.getElementById('empName').value = employee.name;
        document.getElementById('empEmail').value = employee.email;
        document.getElementById('empDept').value = employee.department;
        document.getElementById('empDesignation').value = employee.designation;
        document.getElementById('empRole').value = employee.role;
        document.getElementById('empSalary').value = employee.salary;
        
        // Scroll to form
        document.querySelector('.admin-section').scrollIntoView({ behavior: 'smooth' });
    }
}

// Delete employee
function deleteEmployee(id) {
    if (confirm('Are you sure you want to delete this employee?')) {
        const empToDelete = employees.find(emp => emp.id === id);
        
        if (currentUser && currentUser.role === 'manager') {
            const approvalReq = {
                id: 'PA' + Date.now(),
                manager_id: currentUser.id,
                manager_name: currentUser.name,
                action_type: 'Delete Employee',
                module: 'Employee Management',
                details: `Deleting Employee: ${empToDelete ? empToDelete.name : id} (${id})`,
                data: { id: id },
                created_at: new Date().toISOString(),
                status: 'pending'
            };
            pending_approvals.push(approvalReq);
            saveToLocalStorage();
            alert('Employee deletion request submitted for admin approval!');
            return;
        }
        
        employees = employees.filter(emp => emp.id !== id);
        saveToLocalStorage();
        loadEmployeeTable();
        alert('Employee deleted successfully!');
    }
}


// Setup navigation
function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                return; // Skip logout link
            }
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            
            // Update active nav
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Show target section
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.add('hidden');
            });
            
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
                
                // Special handling for complaints section
                if (targetId === 'complaints') {
                    loadComplaints();
                } else if (targetId === 'leaves') {
                    loadLeaves();
                } else if (targetId === 'pending_approvals') {
                    loadPendingApprovals();
                }
            }
        });
    });
}

// Logout
function logout() {
    currentUser = null;
    window.location.href = 'index.html';
}

// Attendance functions
let checkInTime = null;
let attendanceRecords = [];

function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-IN', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
    setTimeout(updateCurrentTime, 1000);
}

function checkIn() {
    if (currentUser.activeCheckIn) {
        alert('You have already checked in today!');
        return;
    }
    
    const now = new Date();
    currentUser.activeCheckIn = now.toISOString();
    saveToLocalStorage();
    
    const statusDiv = document.getElementById('attendanceStatus');
    statusDiv.innerHTML = `
        <p style="color: #22543d; font-weight: bold;">✅ Checked in at ${now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
        <p style="color: #718096;">Have a productive day!</p>
    `;
    statusDiv.style.background = '#f0fff4';
    
    alert('Successfully checked in!');
}


function checkOut() {
    if (!currentUser.activeCheckIn) {
        alert('You need to check in first!');
        return;
    }
    
    const checkInTime = new Date(currentUser.activeCheckIn);
    const checkOutTime = new Date();
    const diff = checkOutTime - checkInTime;
    const workingHours = Math.floor(diff / (1000 * 60 * 60));
    const workingMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById('workingHours').textContent = `${workingHours}h ${workingMinutes}m`;
    
    const statusDiv = document.getElementById('attendanceStatus');
    statusDiv.innerHTML = `
        <p style="color: #22543d; font-weight: bold;">✅ Checked out at ${checkOutTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
        <p style="color: #718096;">Total working hours: ${workingHours}h ${workingMinutes}m</p>
        <p style="color: #718096;">Have a great evening!</p>
    `;
    statusDiv.style.background = '#f0fff4';
    
    // Add to attendance history for current user
    const today = new Date().toISOString().split('T')[0];
    const newRecord = {
        date: today,
        checkIn: checkInTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }),
        checkOut: checkOutTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }),
        workingHours: `${workingHours}h ${workingMinutes}m`,
        status: 'Present'
    };
    
    if (!currentUser.attendance) {
        currentUser.attendance = [];
    }
    currentUser.attendance.unshift(newRecord);
    
    // Clear active check-in
    delete currentUser.activeCheckIn;
    saveToLocalStorage();
    
    // Update attendance table
    loadAttendanceTable();
    
    // Update attendance charts
    loadAttendanceCharts();
    
    alert('Successfully checked out! Total working hours: ' + workingHours + 'h ' + workingMinutes + 'm');
}


// Load attendance charts
function loadAttendanceCharts() {
    // Generate sample attendance data based on user role
    let attendanceData = generateAttendanceData();
    
    // Update summary statistics
    updateAttendanceSummary(attendanceData);
    
    // Draw attendance pie chart
    drawAttendancePieChart(attendanceData);
    
    // Draw working hours pie chart
    drawHoursPieChart(attendanceData);
}

// Generate attendance data based on user role
function generateAttendanceData() {
    const totalDays = 30;
    let present = 0, absent = 0, leave = 0, late = 0, halfDay = 0;
    
    if (currentUser) {
        // Different attendance patterns based on role
        switch(currentUser.role) {
            case 'admin':
                present = 25;
                absent = 1;
                leave = 3;
                late = 1;
                break;
            case 'manager':
                present = 23;
                absent = 2;
                leave = 4;
                late = 1;
                break;
            case 'hr':
                present = 24;
                absent = 1;
                leave = 4;
                late = 1;
                break;
            case 'finance':
                present = 22;
                absent = 2;
                leave = 5;
                late = 1;
                break;
            case 'sales':
                present = 21;
                absent = 3;
                leave = 5;
                late = 1;
                break;
            case 'it':
                present = 23;
                absent = 1;
                leave = 5;
                late = 1;
                break;
            case 'marketing':
                present = 22;
                absent = 2;
                leave = 5;
                late = 1;
                break;
            case 'operations':
                present = 21;
                absent = 3;
                leave = 5;
                late = 1;
                break;
            default:
                present = 20;
                absent = 3;
                leave = 6;
                late = 1;
        }
    } else {
        // Default data
        present = 22;
        absent = 2;
        leave = 6;
    }
    
    // Add recent attendance records
    if (currentUser.attendance && currentUser.attendance.length > 0) {
        present += currentUser.attendance.filter(r => r.status === 'Present').length;
    }

    
    return { totalDays, present, absent, leave, late, halfDay };
}

// Update attendance summary
function updateAttendanceSummary(data) {
    document.getElementById('totalDays').textContent = data.totalDays;
    document.getElementById('presentCount').textContent = data.present;
    document.getElementById('absentCount').textContent = data.absent;
    document.getElementById('leaveCount').textContent = data.leave;
}

// Draw attendance pie chart
function drawAttendancePieChart(data) {
    const canvas = document.getElementById('attendancePieChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Data for pie chart
    const chartData = [
        { label: 'Present', value: data.present, color: '#22543d' },
        { label: 'Absent', value: data.absent, color: '#d69e2e' },
        { label: 'Leave', value: data.leave, color: '#3182ce' },
        { label: 'Late', value: data.late, color: '#9f7aea' }
    ];
    
    // Calculate angles
    const total = chartData.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = -Math.PI / 2;
    
    // Draw pie slices
    chartData.forEach((segment, index) => {
        const sliceAngle = (segment.value / total) * 2 * Math.PI;
        
        // Draw slice
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.lineTo(centerX, centerY);
        ctx.fillStyle = segment.color;
        ctx.fill();
        
        // Draw label
        const labelX = centerX + Math.cos(currentAngle + sliceAngle / 2) * (radius + 20);
        const labelY = centerY + Math.sin(currentAngle + sliceAngle / 2) * (radius + 20);
        
        ctx.fillStyle = '#333';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        const percentage = ((segment.value / total) * 100).toFixed(1);
        ctx.fillText(`${percentage}%`, labelX, labelY);
        
        currentAngle += sliceAngle;
    });
    
    // Update legend
    const legendDiv = document.getElementById('attendanceLegend');
    legendDiv.innerHTML = chartData.map(item => 
        `<span style="display: inline-block; margin: 5px 10px;">
            <span style="display: inline-block; width: 12px; height: 12px; background: ${item.color}; margin-right: 5px;"></span>
            ${item.label}: ${item.value}
        </span>`
    ).join('');
}

// Draw working hours pie chart
function drawHoursPieChart(data) {
    const canvas = document.getElementById('hoursPieChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Working hours data (sample data)
    const hoursData = [
        { label: 'Full Day (8-9h)', value: data.present - 2, color: '#22543d' },
        { label: 'Half Day (4-5h)', value: 2, color: '#ed8936' },
        { label: 'Overtime (>9h)', value: Math.floor(data.present * 0.3), color: '#3182ce' },
        { label: 'Less Hours (<8h)', value: Math.floor(data.present * 0.2), color: '#9f7aea' }
    ];
    
    // Calculate angles
    const total = hoursData.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = -Math.PI / 2;
    
    // Draw pie slices
    hoursData.forEach((segment, index) => {
        if (segment.value > 0) {
            const sliceAngle = (segment.value / total) * 2 * Math.PI;
            
            // Draw slice
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
            ctx.lineTo(centerX, centerY);
            ctx.fillStyle = segment.color;
            ctx.fill();
            
            // Draw label
            const labelX = centerX + Math.cos(currentAngle + sliceAngle / 2) * (radius + 20);
            const labelY = centerY + Math.sin(currentAngle + sliceAngle / 2) * (radius + 20);
            
            ctx.fillStyle = '#333';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            const percentage = ((segment.value / total) * 100).toFixed(1);
            ctx.fillText(`${percentage}%`, labelX, labelY);
            
            currentAngle += sliceAngle;
        }
    });
    
    // Update legend
    const legendDiv = document.getElementById('hoursLegend');
    legendDiv.innerHTML = hoursData.filter(item => item.value > 0).map(item => 
        `<span style="display: inline-block; margin: 5px 10px;">
            <span style="display: inline-block; width: 12px; height: 12px; background: ${item.color}; margin-right: 5px;"></span>
            ${item.label}: ${item.value}
        </span>`
    ).join('');
}

// Payroll functions
function loadPayrollData(user) {
    const salary = user.salary;
    const basic = Math.round(salary * 0.5);
    const hra = Math.round(basic * 0.4);
    const da = Math.round(basic * 0.2);
    const medical = 1500;
    const travel = 2000;
    const gross = basic + hra + da + medical + travel;
    const pf = Math.round(basic * 0.12);
    const pt = 200;
    const tds = Math.round(gross * 0.05);
    const deductions = pf + pt + tds;
    const net = gross - deductions;
    
    // Update payroll stats
    document.getElementById('monthlySalary').textContent = `₹${salary.toLocaleString()}`;
    document.getElementById('netSalary').textContent = `₹${net.toLocaleString()}`;
    
    // Update payroll breakdown
    document.getElementById('basicAmount').textContent = basic.toLocaleString();
    document.getElementById('hraAmount').textContent = hra.toLocaleString();
    document.getElementById('daAmount').textContent = da.toLocaleString();
    document.getElementById('medicalAmount').textContent = medical.toLocaleString();
    document.getElementById('travelAmount').textContent = travel.toLocaleString();
    document.getElementById('grossAmount').textContent = gross.toLocaleString();
    document.getElementById('pfAmount').textContent = pf.toLocaleString();
    document.getElementById('tdsAmount').textContent = tds.toLocaleString();
    document.getElementById('deductionsAmount').textContent = deductions.toLocaleString();
    document.getElementById('netAmount').textContent = net.toLocaleString();
}

// Inventory Management Functions


// Add product form handler
document.addEventListener('DOMContentLoaded', function() {
    const addProductForm = document.getElementById('addProductForm');
    if (addProductForm) {
        addProductForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const newProduct = {
                sku: document.getElementById('productSku').value,
                name: document.getElementById('productName').value,
                category: document.getElementById('productCategory').value,
                quantity: parseInt(document.getElementById('productQuantity').value),
                price: parseFloat(document.getElementById('productPrice').value),
                reorderLevel: parseInt(document.getElementById('reorderLevel').value)
            };
            
            products.push(newProduct);
            saveToLocalStorage();
            alert('Product added successfully!');
            this.reset();
        });
    }


    // Sales order form handler
    const addOrderForm = document.getElementById('addOrderForm');
    if (addOrderForm) {
        addOrderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const order = {
                customer: document.getElementById('customerName').value,
                email: document.getElementById('customerEmail').value,
                product: document.getElementById('orderProduct').value,
                quantity: parseInt(document.getElementById('orderQuantity').value),
                price: parseFloat(document.getElementById('orderPrice').value),
                total: parseFloat(document.getElementById('orderTotal').value)
            };
            if (currentUser && currentUser.role === 'manager') {
                const approvalReq = {
                    id: 'PA' + Date.now(),
                    manager_id: currentUser.id,
                    manager_name: currentUser.name,
                    action_type: 'Create Sales Order',
                    module: 'Sales Management',
                    details: `Customer: ${order.customer}, Product: ${order.product}, Total: ₹${order.total}`,
                    data: order,
                    created_at: new Date().toISOString(),
                    status: 'pending'
                };
                pending_approvals.push(approvalReq);
                saveToLocalStorage();
                alert('Sales order request submitted for admin approval!');
            } else {
                // Currently orders aren't saved to an array in memory, they are just alerted.
                // We maintain that behavior for admins (or we could save to a global array if it existed).
                alert('Order created successfully! Order ID: ORD' + Math.floor(Math.random() * 1000));
            }
            this.reset();

        });
    }

    // Profile settings form handler
    const profileSettingsForm = document.getElementById('profileSettingsForm');
    if (profileSettingsForm) {
        profileSettingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const displayName = document.getElementById('displayName').value;
            const email = document.getElementById('profileEmail').value;
            const phone = document.getElementById('profilePhone').value;
            const location = document.getElementById('profileLocation').value;
            
            // Update current user info
            if (currentUser) {
                currentUser.name = displayName;
                currentUser.email = email;
                
                // Update display
                document.getElementById('userInfo').textContent = displayName;
                saveToLocalStorage();
                alert('Profile updated successfully!');
            }
        });
    }


    // Auto-calculate order total
    const orderQuantity = document.getElementById('orderQuantity');
    const orderPrice = document.getElementById('orderPrice');
    const orderTotal = document.getElementById('orderTotal');
    
    if (orderQuantity && orderPrice && orderTotal) {
        function calculateTotal() {
            const quantity = parseInt(orderQuantity.value) || 0;
            const price = parseFloat(orderPrice.value) || 0;
            orderTotal.value = quantity * price;
        }
        
        orderQuantity.addEventListener('input', calculateTotal);
        orderPrice.addEventListener('input', calculateTotal);
    }
});

// Reset password function
function resetPassword() {
    if (!currentUser) {
        alert('Please login first to change password.');
        return;
    }
    
    const currentPassword = prompt('Enter your current password:');
    if (!currentPassword) {
        return;
    }
    
    // Verify current password
    if (currentPassword !== currentUser.password) {
        alert('Current password is incorrect!');
        return;
    }
    
    const newPassword = prompt('Enter your new password:');
    if (!newPassword) {
        return;
    }
    
    if (newPassword.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
    }
    
    const confirmPassword = prompt('Confirm your new password:');
    if (!confirmPassword) {
        return;
    }
    
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    if (confirm('Are you sure you want to change your password?')) {
        // Find and update the employee in the array
        const employeeIndex = employees.findIndex(emp => emp.id === currentUser.id);
        if (employeeIndex !== -1) {
            employees[employeeIndex].password = newPassword;
            currentUser.password = newPassword;
            saveToLocalStorage();
            
            alert('Password changed successfully!\n\nYour new password is: ' + newPassword + '\n\nPlease remember this password for future logins.');

            
            // Clear the password fields
            const profileForm = document.getElementById('profileSettingsForm');
            if (profileForm) {
                profileForm.reset();
                // Repopulate with current user data
                setTimeout(() => {
                    const displayNameField = document.getElementById('displayName');
                    const emailField = document.getElementById('profileEmail');
                    const phoneField = document.getElementById('profilePhone');
                    const locationField = document.getElementById('profileLocation');
                    
                    if (displayNameField) displayNameField.value = currentUser.name;
                    if (emailField) emailField.value = currentUser.email;
                    if (phoneField) phoneField.value = '+91 98765 43210';
                    if (locationField) locationField.value = 'Mumbai, India';
                }, 100);
            }
        } else {
            alert('Error updating password. Please try again.');
        }
    }
}

// Load attendance table for current user
function loadAttendanceTable() {
    const tbody = document.getElementById('attendanceTableBody');
    if (!tbody || !currentUser) return;
    
    tbody.innerHTML = '';
    
    const records = currentUser.attendance || [];
    
    if (records.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center;">No attendance records found</td></tr>';
        return;
    }
    
    records.forEach(record => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${record.date}</td>
            <td>${record.checkIn}</td>
            <td>${record.checkOut}</td>
            <td>${record.workingHours}</td>
            <td><span class="badge badge-success">${record.status}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

// Load dynamic reports for admin/manager
function loadReports() {
    const tbody = document.getElementById('reportsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    employees.forEach(emp => {
        // Calculate attendance rate (mocked logic: 22 working days per month)
        const totalWorkingDays = 22;
        const presentDays = (emp.attendance ? emp.attendance.length : 0) + (Math.floor(Math.random() * 5) + 17); // Base + some random
        const rate = Math.min(100, Math.round((presentDays / totalWorkingDays) * 100));
        
        // Mocked performance score
        const score = (Math.random() * (5.0 - 4.0) + 4.0).toFixed(1);
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${emp.name}</td>
            <td>${emp.department}</td>
            <td>${rate}%</td>
            <td>${score}/5.0</td>
            <td><span class="badge badge-${rate >= 95 ? 'success' : 'warning'}">${rate >= 95 ? 'Excellent' : 'Good'}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

// Complaint Module Functions

// Load all complaints
async function loadComplaints() {
    const tbody = document.getElementById('complaintsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '<tr><td colspan="6" style="text-align: center;">Loading complaints...</td></tr>';
    
    // Check permissions
    const isAdmin = currentUser && currentUser.role === 'admin';
    const isManager = currentUser && (currentUser.role === 'manager' || currentUser.role === 'hr');
    
    // Always show action header, but the cell content will vary
    const actionHeader = document.getElementById('complaintActionHeader');
    if (actionHeader) {
        actionHeader.style.display = 'table-cell'; 
    }

    // Use LocalStorage for reliability when PHP server is not available
    tbody.innerHTML = '';
    
    if (!complaints || complaints.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center;">No complaints registered yet.</td></tr>';
        return;
    }
    
    // Sort by newest first
    const sortedComplaints = [...complaints].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    
    sortedComplaints.forEach(complaint => {
        const tr = document.createElement('tr');
        
        // Status badge
        let statusClass = 'badge-warning';
        let statusText = 'Pending';
        
        if (complaint.status === 'resolved') {
            statusClass = 'badge-success';
            statusText = 'Resolved';
        } else if (complaint.status === 'action_taken') {
            statusClass = 'badge-primary';
            statusText = 'Action Taken';
        } else if (complaint.status === 'under_review') {
            statusClass = 'badge-info';
            statusText = 'Under Review';
        }
        
        const date = new Date(complaint.created_at).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });

        const isOwner = currentUser && complaint.employee_id === currentUser.id;
        const canTakeAction = currentUser !== null; // All employees can take action
        const canDelete = isAdmin || isOwner;

        tr.innerHTML = `
            <td>${date}</td>
            <td><strong>${complaint.subject}</strong></td>
            <td>${complaint.description}</td>
            <td><span class="badge ${statusClass}">${statusText}</span></td>
            <td>${complaint.action_taken || '<em>No action taken yet</em>'}</td>
            <td class="action-cell">
                <div style="display: flex; gap: 5px; flex-wrap: wrap;">
                    ${canTakeAction ? `<button onclick="openActionModal(${complaint.id}, '${complaint.status}')" class="btn btn-primary btn-sm" style="padding: 5px 8px; font-size: 11px;">Take Action</button>` : ''}
                    ${canDelete ? `<button onclick="removeComplaint(${complaint.id})" class="btn btn-danger btn-sm" style="padding: 5px 8px; font-size: 11px; background: #e53e3e;">Delete</button>` : ''}
                    ${!canTakeAction && !canDelete ? '<span style="color: #94a3b8; font-size: 11px;">No actions</span>' : ''}
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Handle complaint form submission
document.addEventListener('submit', async function(e) {
    if (e.target && e.target.id === 'complaintForm') {
        e.preventDefault();
        
        const subject = document.getElementById('complaintSubject').value;
        const description = document.getElementById('complaintDescription').value;
        
        const btn = e.target.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'Submitting...';
        btn.disabled = true;

        try {
            // Local fallback for when PHP is not running
            const newComplaint = {
                id: Date.now(), // Unique ID
                employee_id: currentUser ? currentUser.id : 'Anonymous',
                subject: subject,
                description: description,
                status: 'pending',
                action_taken: null,
                manager_id: null,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            };
            
            complaints.push(newComplaint);
            saveToLocalStorage();
            
            alert('Your complaint has been registered anonymously. Thank you for your feedback.');
            e.target.reset();
            loadComplaints();
            
            // Also try to sync with API if it exists (silent fail)
            fetch('erp_api.php?action=submit_complaint', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ subject, description })
            }).catch(err => console.log('API sync failed, using LocalStorage only.'));

        } catch (error) {
            console.error('Error submitting complaint:', error);
            alert('Failed to submit complaint.');
        } finally {
            btn.textContent = originalText;
            btn.disabled = false;
        }
    }
});

async function removeComplaint(id) {
    const complaint = complaints.find(c => c.id === id);
    if (!complaint) return;

    const isOwner = currentUser && complaint.employee_id === currentUser.id;
    const isAdmin = currentUser && currentUser.role === 'admin';

    if (!isAdmin && !isOwner) {
        alert('You are only allowed to delete your own complaints.');
        return;
    }

    if (!confirm('Are you sure you want to remove this complaint? This action cannot be undone.')) {
        return;
    }
    
    const index = complaints.findIndex(c => c.id === id);
    if (index !== -1) {
        complaints.splice(index, 1);
        saveToLocalStorage();
        alert('Complaint removed successfully.');
        loadComplaints();
        
        // Try to sync with API (silent fail)
        fetch('erp_api.php?action=delete_complaint', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ complaint_id: id })
        }).catch(err => console.log('API delete sync failed.'));
    }
}

// Modal functions for managers
function openActionModal(id, currentStatus) {
    const modal = document.getElementById('complaintActionModal');
    if (!modal) return;
    
    document.getElementById('modalComplaintId').value = id;
    document.getElementById('modalStatus').value = currentStatus === 'pending' ? 'under_review' : currentStatus;
    document.getElementById('modalActionTaken').value = '';
    modal.style.display = 'flex';
}

function closeComplaintModal() {
    const modal = document.getElementById('complaintActionModal');
    if (modal) modal.style.display = 'none';
}

async function saveComplaintAction() {
    const id = document.getElementById('modalComplaintId').value;
    const actionTaken = document.getElementById('modalActionTaken').value;
    const status = document.getElementById('modalStatus').value;
    
    if (!actionTaken) {
        alert('Please provide action remarks.');
        return;
    }

    try {
        // Local update
        const index = complaints.findIndex(c => c.id == id);
        if (index !== -1) {
            complaints[index].status = status;
            complaints[index].action_taken = actionTaken;
            complaints[index].manager_id = currentUser ? currentUser.id : null;
            complaints[index].updated_at = new Date().toISOString();
            saveToLocalStorage();
        }
        
        alert('Complaint status updated successfully.');
        closeComplaintModal();
        loadComplaints();
        
        // Sync with API
        fetch('erp_api.php?action=resolve_complaint', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                complaint_id: id,
                action_taken: actionTaken,
                status: status
            })
        }).catch(err => console.log('API resolve sync failed.'));

    } catch (error) {
        console.error('Error saving action:', error);
        alert('Failed to update status.');
    }
}

// ==========================================
// Leave Management Functions
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const applyLeaveForm = document.getElementById('applyLeaveForm');
    if (applyLeaveForm) {
        applyLeaveForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const type = document.getElementById('leaveType').value;
            const startDate = document.getElementById('leaveStartDate').value;
            const endDate = document.getElementById('leaveEndDate').value;
            const reason = document.getElementById('leaveReason').value;
            
            if (!startDate || !endDate || !reason) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Calculate days
            const start = new Date(startDate);
            const end = new Date(endDate);
            if (end < start) {
                alert('End date cannot be before start date.');
                return;
            }
            
            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
            
            const newLeave = {
                id: 'LV' + Date.now(),
                employee_id: currentUser.id,
                employee_name: currentUser.name,
                type: type,
                start_date: startDate,
                end_date: endDate,
                days: diffDays,
                reason: reason,
                status: 'pending',
                created_at: new Date().toISOString()
            };
            
            leaves.push(newLeave);
            saveToLocalStorage();
            
            alert('Leave request submitted successfully.');
            applyLeaveForm.reset();
            loadLeaves();
        });
    }

    const changeRequestForm = document.getElementById('changeRequestForm');
    if (changeRequestForm) {
        changeRequestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const subject = document.getElementById('changeSubject').value;
            const description = document.getElementById('changeDescription').value;
            
            if (!subject || !description) {
                alert('Please fill in all fields.');
                return;
            }
            
            const newReq = {
                id: 'CR' + Date.now(),
                manager_id: currentUser.id,
                manager_name: currentUser.name,
                subject: subject,
                description: description,
                status: 'pending',
                created_at: new Date().toISOString()
            };
            
            change_requests.push(newReq);
            saveToLocalStorage();
            
            alert('Change request submitted to Admin successfully.');
            changeRequestForm.reset();
            loadChangeRequests();
        });
    }
});

function loadLeaves() {
    const tbody = document.getElementById('leavesTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    // Determine which leaves to show
    let displayLeaves = [];
    const isApprover = currentUser && (currentUser.role === 'manager' || currentUser.role === 'hr' || currentUser.role === 'admin');
    
    if (isApprover) {
        displayLeaves = [...leaves].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        // Show actions column
        document.querySelectorAll('.leave-actions-col').forEach(el => el.classList.remove('hidden'));
    } else {
        displayLeaves = leaves.filter(l => l.employee_id === currentUser.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        document.querySelectorAll('.leave-actions-col').forEach(el => el.classList.add('hidden'));
    }
    
    if (displayLeaves.length === 0) {
        tbody.innerHTML = `<tr><td colspan="${isApprover ? 8 : 7}" style="text-align: center;">No leave requests found.</td></tr>`;
        return;
    }
    
    displayLeaves.forEach(leave => {
        let statusBadge = '';
        if (leave.status === 'pending') statusBadge = '<span class="badge badge-warning">Pending</span>';
        else if (leave.status === 'approved') statusBadge = '<span class="badge badge-success">Approved</span>';
        else if (leave.status === 'rejected') statusBadge = '<span class="badge badge-danger">Rejected</span>';
        
        let actionsHtml = '';
        if (isApprover && leave.status === 'pending') {
            actionsHtml = `
                <button onclick="updateLeaveStatus('${leave.id}', 'approved')" class="btn" style="padding: 4px 8px; font-size: 12px; background: #48bb78; color: white; margin-right: 4px;">Approve</button>
                <button onclick="updateLeaveStatus('${leave.id}', 'rejected')" class="btn" style="padding: 4px 8px; font-size: 12px; background: #f56565; color: white;">Reject</button>
            `;
        }
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${leave.employee_name}</td>
            <td style="text-transform: capitalize;">${leave.type}</td>
            <td>${leave.start_date} to ${leave.end_date}</td>
            <td>${leave.days}</td>
            <td>${leave.reason}</td>
            <td>${statusBadge}</td>
            <td>${leave.approver_name || '-'}</td>
            ${isApprover ? `<td>${actionsHtml}</td>` : ''}
        `;
        tbody.appendChild(tr);
    });
}

window.updateLeaveStatus = function(leaveId, status) {
    if (!confirm('Are you sure you want to ' + status + ' this leave?')) return;
    
    const leaveIndex = leaves.findIndex(l => l.id === leaveId);
    if (leaveIndex >= 0) {
        leaves[leaveIndex].status = status;
        leaves[leaveIndex].approver_name = currentUser.name;
        leaves[leaveIndex].approver_id = currentUser.id;
        saveToLocalStorage();
        loadLeaves();
    }
};

function loadPendingApprovals() {
    const tbody = document.getElementById('pendingApprovalsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    if (!currentUser || currentUser.role !== 'admin') {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center;">Access Denied.</td></tr>`;
        return;
    }
    
    let displayReqs = [...pending_approvals].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    
    if (displayReqs.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center;">No pending approvals found.</td></tr>`;
        return;
    }
    
    displayReqs.forEach(req => {
        let statusBadge = '';
        if (req.status === 'pending') statusBadge = '<span class="badge badge-warning">Pending</span>';
        else if (req.status === 'approved') statusBadge = '<span class="badge badge-success">Approved</span>';
        else if (req.status === 'rejected') statusBadge = '<span class="badge badge-danger">Rejected</span>';
        
        let actionsHtml = '';
        if (req.status === 'pending') {
            actionsHtml = `
                <button onclick="approvePendingAction('${req.id}')" class="btn" style="padding: 4px 8px; font-size: 12px; background: #48bb78; color: white; margin-right: 4px;">Approve</button>
                <button onclick="rejectPendingAction('${req.id}')" class="btn" style="padding: 4px 8px; font-size: 12px; background: #f56565; color: white;">Reject</button>
            `;
        }
        
        const dateStr = new Date(req.created_at).toLocaleDateString();
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${req.manager_name}</td>
            <td>${req.action_type}</td>
            <td>${req.module}</td>
            <td>${req.details}</td>
            <td>${dateStr}</td>
            <td>${statusBadge}</td>
            <td>${actionsHtml}</td>
        `;
        tbody.appendChild(tr);
    });
}

window.approvePendingAction = function(reqId) {
    if (!confirm('Are you sure you want to approve this action?')) return;
    
    const reqIndex = pending_approvals.findIndex(r => r.id === reqId);
    if (reqIndex >= 0) {
        const req = pending_approvals[reqIndex];
        req.status = 'approved';
        
        // Execute the action
        if (req.action_type === 'Add Employee') {
            employees.push(req.data);
            alert('Employee added successfully!');
        } else if (req.action_type === 'Edit Employee') {
            const empIndex = employees.findIndex(e => e.id === req.data.id);
            if (empIndex >= 0) {
                req.data.attendance = employees[empIndex].attendance;
                employees[empIndex] = req.data;
            }
            alert('Employee updated successfully!');
        } else if (req.action_type === 'Delete Employee') {
            employees = employees.filter(e => e.id !== req.data.id);
            alert('Employee deleted successfully!');
        } else if (req.action_type === 'Create Sales Order') {
            // Orders aren't stored in memory in current implementation, but this handles the approval
            alert('Sales order approved!');
        }
        
        saveToLocalStorage();
        loadPendingApprovals();
        // If they navigate back, the table should update
        if (document.getElementById('employeeTableBody')) loadEmployeeTable();
    }
};

window.rejectPendingAction = function(reqId) {
    if (!confirm('Are you sure you want to reject this action?')) return;
    
    const reqIndex = pending_approvals.findIndex(r => r.id === reqId);
    if (reqIndex >= 0) {
        pending_approvals[reqIndex].status = 'rejected';
        saveToLocalStorage();
        loadPendingApprovals();
    }
};

