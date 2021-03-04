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

// intro questions
const introQuestions = () => {
    return inquirer.prompt([
        {
            type: 'rawlist',
            name: 'option',
            message: `Welcome to Employee Tracker!

Please make a selection.`,
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee', 'Remove Employee', 'Exit']
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
            } else if (option === 'Update employee') {
                updateEmployee()
            } else if (option === 'Remove Employee') {
                removeEmployee()
            } else {
                return;
            }
        })

};

// view department function
const viewDepartments = () => {
    db.query(`SELECT * FROM departments`, function (err, res) {
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
    db.query(`SELECT * FROM role LEFT JOIN departments ON role.departments_id = departments.id`, function (err, res) {
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
    // db.query(`SELECT  first_name, last_name, role_id, manager_id FROM employees LEFT JOIN managers ON employees.manager_id = managers.id `, function (err, res) {

    // db.query(`SELECT * FROM employees LEFT JOIN managers ON employees.manager_id = managers.id `, function (err, res) {

        db.query(`SELECT * FROM employees LEFT JOIN role ON employees.role_id = role.id
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
                {
                    type: 'input',
                    name: 'managerId',
                    message: 'Please enter Manager ID(Required)',
                    validate: departmentInput => {
                        if (departmentInput) {
                            return true;
                        } else {
                            console.log("Please enter Manager ID!");
                            return false;
                        }
                    }
                }
            ])
                .then(function (answer) {
                    db.query("INSERT INTO departments (departments_name, manager_id) VALUES (?,?)", [answer.department, answer.managerId], function (err, res) {
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
                console.log("New Employee Created!")
                introQuestions();
            })

        })
};

// update employee function
const updateEmployee = () => {
    // console.log("update employee role")
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
                    // let employeeNames = answer.employee.split("");
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
    // console.log("update employee role")
    db.query(`SELECT concat(first_name, ' ' ,last_name) as employeeName, id FROM employees`, function (err, employeeNames) {
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



// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 