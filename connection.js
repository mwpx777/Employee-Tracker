const inquirer = require('inquirer');
const consoleTable = require('console.table');
const mysql = require('mysql2');

const connection = new Database({
    host : 'localhost',
    port: 3001,
    user : 'root',
    password: 'Maggie2018',
    database: 'seeds.sql'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log(`Connected on http://localhost:${port}`);
    introQuestions();
});
