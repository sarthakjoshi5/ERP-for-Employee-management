# ERP Management System

A comprehensive Enterprise Resource Planning (ERP) system for managing business operations including inventory, sales, purchases, employees, attendance, payroll, and reporting.

## 📁 ERP System Files

### Core Files:
- **erp_login.html** - Login page with authentication
- **erp_dashboard.html** - Main ERP dashboard with all modules
- **erp_dashboard.js** - JavaScript functionality for dashboard
- **erp_style.css** - Styling for the entire ERP system

### Backend Files:
- **erp_auth.php** - Authentication and session management
- **erp_api.php** - API endpoints for all ERP operations

### Database:
- **erp_database.sql** - Complete database schema with sample data

## 🚀 Quick Setup

### 1. Database Setup
```bash
# Import the database schema
mysql -u root -p < erp_database.sql
```

### 2. Configure Database
Update database connection in `erp_auth.php` and `erp_api.php`:
```php
$host = 'localhost';
$dbname = 'erp_management';
$username = 'root';
$password = 'your_password';
```

### 3. Access the System
Open your browser and navigate to: `http://localhost/erp_system/erp_login.html`

## 🔑 Login Credentials

| Role | Username | Password |
|------|----------|----------|
| Admin | Sarthak | pass123 |
| HR | Vaishnavi | pass123 |
| Finance | Haripriya | pass123 |
| Manager | Akash | pass123 |

## 📊 ERP Modules

### 🏠 Dashboard
- Real-time business statistics
- Recent activities feed
- Quick navigation

### 📦 Inventory Management
- Product catalog management
- Stock level tracking
- Reorder point alerts
- Search and filter products

### 💰 Sales Management
- Customer order management
- Order status tracking
- Sales history
- Revenue analytics

### 🛒 Purchase Management
- Supplier management
- Purchase order creation
- Procurement tracking
- Supplier relationships

### 👥 Employee Management
- Employee directory
- Department organization
- Employee status tracking
- Search capabilities

### ⏰ Attendance Management
- Daily attendance tracking
- Check-in/check-out system
- Attendance reports
- Working hours calculation

### 💵 Payroll Management
- Monthly payroll generation
- Salary calculations
- Payment processing
- Payroll reports

### 📈 Reports & Analytics
- Sales reports
- Inventory reports
- Financial reports
- Employee reports

## 🎯 Features

- **Role-Based Access Control**: Different access levels for different roles
- **Real-Time Updates**: Live data synchronization
- **Responsive Design**: Works on all devices
- **Modern UI**: Professional gradient-based design
- **Search & Filter**: Advanced search capabilities
- **Status Tracking**: Real-time status monitoring
- **Secure Authentication**: Password-protected access

## 🔧 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: PHP 7.4+
- **Database**: MySQL 5.7+
- **Authentication**: Session-based with password hashing

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🛠️ File Structure

```
erp_system/
├── erp_login.html          # Login page
├── erp_dashboard.html      # Main dashboard
├── erp_dashboard.js        # JavaScript functionality
├── erp_style.css          # System styling
├── erp_auth.php           # Authentication
├── erp_api.php            # API endpoints
├── erp_database.sql       # Database schema
└── README.md              # This file
```

## 🔒 Security Features

- Password hashing using PHP's `password_hash()`
- Session-based authentication
- SQL injection prevention with prepared statements
- Role-based access control
- Input validation and sanitization

## 📞 Support

For issues or questions:
1. Check database connection settings
2. Ensure PHP is properly configured
3. Verify file permissions
4. Check browser console for errors

## 📄 License

This ERP system is for educational and demonstration purposes. Feel free to modify and use according to your business requirements.
