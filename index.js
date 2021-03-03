const express = require('express');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const mysql = require('mysql');
const app = express();


// create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Madalyn2006!",
    database: "company_db"
});

// connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("mysql connected");
    introQuestions();

});


const introQuestions = () => {
    return inquirer.prompt([
        {
            type: 'rawlist',
            name: 'option',
            message: `Welcome to Employee Tracker!

Please make a selection.`,
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee role', 'Exit']
        }
    ])

        .then(({ option }) => {
            if (option === 'View all departments') {
                viewDepartments()
            } else if (option === 'View all roles') {
                viewRoles()
            } else if (option === 'View all employees') {
                viewEmployees()
            } else if (option === 'Add a department') {
                addDepartment()
            } else if (option === 'Add a role') {
                addRole()
            } else if (option === 'Add an employee') {
                addEmployee()
            } else if (option === 'Update employee role') {
                updateEmployeeRole()
            } else {
                return;
            }
        })

};

const viewDepartments = () => {
    db.query(`SELECT * FROM departments`, function (err, res) {
        if (err) {
            console.log("view department error")
        } else {
            console.table('Departments', res);
            introQuestions()
        }

    })
};
const viewRoles = () => {
    db.query(`SELECT * FROM role`, function (err, res) {
        if (err) {
            console.log("view roles error")
        } else {
            console.table('Roles', res);
            introQuestions()
        }

    })
};


const viewEmployees = () => {
    db.query("SELECT * FROM employees", function (err, res) {

        if (err) {
            console.log("view employees error")
        } else {
            console.table('Employees', res);
            introQuestions()
        }

    })
};

const addDepartment = () => {

    db.query("SELECT * FROM departments", function (err, res) {
        if (err) {
            console.log("view employees error")
        } else {
            console.table('Department list', res);

            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'department',
                    message: 'Please enter new department name (Required)',
                    validate: departmentInput => {
                        if (departmentInput) {
                            return true;
                        } else {
                            console.log("Please enter a new department name!");
                            return false;
                        }
                    }
                }
            ])
                .then(function (answer) {
                    db.query("INSERT INTO departments (departments_name) VALUES (?)", [answer.department], function (err, res) {
                        if (err) throw err;
                        // console.log(res);
                        console.log("New Department Created!")
                        introQuestions();
                    })

                })

        };
    });
};
const addRole = () => {
    console.log("add role")
    return inquirer.prompt([
        {
            type: 'input',
            name: 'role',
            message: 'Please enter new role (Required)',
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log("Please enter a new role!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Please enter a salary (Required)',
            validate: salaryInput => {
                if (salaryInput) {
                    return true;
                } else {
                    console.log("Please enter a salary!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'departmentId',
            message: 'Please enter department ID (Required)',
            validate: departmentIdInput => {
                if (departmentIdInput) {
                    return true;
                } else {
                    console.log("Please enter department ID!");
                    return false;
                }
            }
        }
    ])
        .then(function (answer) {
            db.query("INSERT INTO role (title, salary, departments_id) VALUES (?,?,?)", [answer.role, answer.salary, answer.departmentId], function (err, res) {
                if (err) throw err;
                // console.log(res);
                console.log("New Department Created!")
                introQuestions();
            })

        })

};

const addEmployee = () => {
    console.log("add employee")
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeFirstName',
            message: "Please enter new employee's first name (Required)",
            validate: employeeFirstNameInput => {
                if (employeeFirstNameInput) {
                    return true;
                } else {
                    console.log("Please enter new employee's first name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeLastName',
            message: "Please enter new employee's last name (Required)",
            validate: employeeLastNameInput => {
                if (employeeLastNameInput) {
                    return true;
                } else {
                    console.log("Please enter new employee's last name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeManagerId',
            message: "Please enter new employee's Manager ID (Required)",
            validate: employeeManagerIdInput => {
                if (employeeManagerIdInput) {
                    return true;
                } else {
                    console.log("Please enter new employee's Manager ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeRoleId',
            message: "Please enter new employee's role ID (Required)",
            validate: employeeRoleIdInput => {
                if (employeeRoleIdInput) {
                    return true;
                } else {
                    console.log("Please enter new employee's role ID!");
                    return false;
                }
            }
        },

    ])


        .then(function (answer) {
            db.query("INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)", [answer.employeeFirstName, answer.employeeLastName, answer.employeeRoleId, answer.employeeManagerId], function (err, res) {
                if (err) throw err;
                // console.log(res);
                console.log("New Employee Created!")
                introQuestions();
            })

        })
};

const updateEmployeeRole = () => {
    console.log("update employee role")
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeRole',
            message: 'Please enter new employee role (Required)',
            validate: employeeRoleInput => {
                if (employeeRoleInput) {
                    return true;
                } else {
                    console.log("Please enter a new employee role!");
                    return false;
                }
            }
        }
    ])
    .then(function (answer) {
        db.query("INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)", [answer.employeeFirstName, answer.employeeLastName, answer.employeeRoleId, answer.employeeManagerId], function (err, res) {
            if (err) throw err;
            // console.log(res);
            console.log("New Employee Created!")
            introQuestions();
        })

    })
    

};

app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE newdb1'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('database created');
    });
});


app.listen('3001', () => {
    console.log('Server started on port 3001');
});


