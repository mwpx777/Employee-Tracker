const express = require('express');
const inquirer = require('inquirer');
const fs = require('fs');
let employeesArray = [];


const introQuestions = () => {
    return inquirer.prompt([
        {
            type: 'rawlist',
            name: 'option',
            message: 'Welcome to Employee Tracker!  Please make a selection.',
            choices: ['View all departments', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee role', 'QUIT']
        }
    ])

        .then(({ option }) => {
            if (option === 'View all departments') {
                viewDepartments()
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
            } else{
                return;
            }
        })

};

const viewDepartments = () => {
    console.log("view departments")
    
        introQuestions()

};

const viewEmployees = () => {
    console.log("view employees")
    
        introQuestions()

};

const addDepartment = () => {
    console.log("add departments")
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
    // .then(
    //     introQuestions()
    // );

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
    // .then(
    //     introQuestions()
    // );
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
    .then(({employeeFirstName, employeeLastName, employeeManagerId, employeeRoleId }) => {
        console.log(employeeFirstName, employeeLastName)
         employeesArray.push((employeeFirstName, employeeLastName, employeeManagerId, employeeRoleId));
        
         introQuestions()


   });
    // .then(
    //     introQuestions()
    // );
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
    // .then(
    //     introQuestions()
    // );
    
};

introQuestions();