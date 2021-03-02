const express = require('express');
const inquirer = require('inquirer');
const fs = require('fs');
const { choices } = require('yargs');
const { addSnapshotSerializer } = require('expect');

const introQuestions = () => {
    return inquirer.prompt([
        {
            type: 'rawlist',
            name: 'option',
            message: 'Welcome to Employee Tracker!  Please make a selection.',
            choices: ['View all departments', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee role']
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
            } else {
                updateEmployeeRole()
            }
        })

};

const viewDepartments = () => {
    console.log("view departments")
};

const viewEmployees = () => {
    console.log("view employees")
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
        }
    ])
};

const addEmployee = () => {
    console.log("add employee")
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: 'Please enter new employee name (Required)',
            validate: employeeNameInput => {
                if (employeeNameInput) {
                    return true;
                } else {
                    console.log("Please enter a new employee name!");
                    return false;
                }
            }
        }
    ])
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
};

introQuestions();