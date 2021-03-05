const express = require('express');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const mysql = require('mysql');
const app = express();
const mysql2 = require('mysql2');
const figlet = require('figlet');


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

// ASCII TITLE
console.log(figlet.textSync('EMPLOYEE TRACKER', {
    font: 'standard',
    horizontalLayout: 'fitted',
    verticalLayout: 'default',
    width: 120,
    whitespaceBreak: true
}));

// intro questions
const introQuestions = () => {

    return inquirer.prompt([
        {
            type: 'rawlist',
            name: 'option',
            message: `Please make a selection.`,
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee role', 'Remove employee', 'Exit']
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
                updateEmployee()
            } else if (option === 'Remove employee') {
                removeEmployee()
            } else {
                db.end;
                return;
            }
        })

};

// view department function
const viewDepartments = () => {
    db.query(`SELECT departments.id AS ID ,
             departments_name AS DEPARTMENT
             FROM departments`, function (err, res) {
        if (err) {
            console.log("view department error")
        } else {
            console.table('DEPARTMENTS', res);
            introQuestions()
        }

    })
};

// view roles function
const viewRoles = () => {

    db.query(`SELECT title AS TITLE,
                role.id AS ROLE_ID,
                departments_name AS DEPARTMENT, 
                salary AS SALARY, 
                manager_name AS MANAGER
                FROM role 
                `, function (err, res) {
        if (err) {
            console.log("view roles error")
        } else {
            console.table('ROLES', res);
            introQuestions()
        }

    })
};

// view employees function
const viewEmployees = () => {

    db.query(`SELECT employees.id AS EMPLOYEE_ID,  
                first_name AS FIRST_NAME, 
                last_name AS LAST_NAME, 
                title AS TITLE,
                departments_name AS DEPARTMENT, 
                salary AS SALARY, 
                manager_name as MANAGER
                FROM employees
                LEFT JOIN role ON employees.role_id = role.id;
                `, function (err, res) {

        if (err) {
            console.log("view employees error")
        } else {
            console.table('EMPLOYEES', res);
            introQuestions()
        }

    })
};

// add department function
const addDepartment = () => {

    db.query("SELECT * FROM departments", function (err, res) {
        if (err) {
            console.log("view employees error")
        } else {
            console.table('DEPARTMENT LIST', res);

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
                },

            ])
                .then(function (answer) {
                    db.query("INSERT INTO departments (departments_name ) VALUES (?)", [answer.department, answer.departmentId,], function (err, res) {
                        if (err) throw err;
                        // console.log(res);
                        console.log("New Department Created!")
                        introQuestions();
                    })

                })

        };
    });
};

// add role function
const addRole = () => {
    console.log("add role")
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter new role (Required)',
            validate: titleInput => {
                if (titleInput) {
                    
                    return true;
                } else {
                    console.log("Please enter a new role!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'departmentName',
            message: 'Please enter department name (Required)',
            validate: departmentNameInput => {
                if (departmentNameInput) {
                    return true;
                } else {
                    console.log("Please enter department name!");
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
            name: 'managerName',
            message: 'Please enter department manager name (Required)',
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter department manager name!");
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
            db.query("INSERT INTO role (departments_name, title, salary, manager_name, departments_id) VALUES (?,?,?,?,?)", [answer.departmentName, answer.title, answer.salary, answer.managerName, answer.departmentId], function (err, res) {
                if (err) throw err;
                console.log("New Department Created!")
                introQuestions();
            })

        })

};

// add employee function
const addEmployee = () => {
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
            db.query("INSERT INTO employees (first_name, last_name, role_id) VALUES (?,?,?)", [answer.employeeFirstName, answer.employeeLastName, answer.employeeRoleId ], function (err, res) {
                if (err) throw err;
                console.log("New Employee Created!")
                introQuestions();
            })

        })
};

// update employee function
const updateEmployee = () => {

    db.query(`SELECT concat(first_name, ' ' ,last_name) as employeeName, id FROM employees`,
        function (err, employeeNames) {
            if (err) throw err;
            console.log(employeeNames)
            employeeNames = employeeNames.map(employee => {
                return {
                    name: employee.employeeName,
                    value: employee.id
                }
            })

            return inquirer.prompt({

                type: 'list',
                name: 'option',
                message: 'Please choose an employee to update',
                choices: employeeNames
            })
                .then(function (answer) {

                    console.log(answer);
                    let id = answer.option
                    return inquirer.prompt([
                        {
                            type: 'input',
                            name: 'employeeRole',
                            message: 'Enter new role ID',

                        }
                    ])

                        .then(function (answer) {
                            db.query(`UPDATE employees SET role_id = "${answer.employeeRole}" WHERE id = ${id}`, function (err) {
                                if (err) throw err;
                                introQuestions()
                            })
                        });
                })
        });
};

// remove employee function
const removeEmployee = () => {

    db.query(`SELECT concat(first_name, ' ' ,last_name) as employeeName, id FROM employees`, function (err, employeeNames) {
        if (err) throw err;
        employeeNames = employeeNames.map(employee => {
            return {
                name: employee.employeeName,
                value: employee.id
            }
        })

        return inquirer.prompt({

            type: 'list',
            name: 'option',
            message: 'Please choose an employee to remove',
            choices: employeeNames
        })
            .then(function (answer) {
                let id = answer.option
                let sql = `DELETE FROM employees WHERE id = ?`
                db.query(sql, [id], function (err, res) {

                    if (err) throw err;
                    // console.log(res);
                    console.log("Employee Deleted!")
                    introQuestions();
                })
            });
    })

};

// create database function
app.get('/createdb', (req, res) => {
    let sql = `CREATE DATABASE company_db`
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('database created');
    });
});

// listen on port function
app.listen('3001', () => {
    console.log('Server started on port 3001');
});



