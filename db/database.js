// const mysql = require('mysql2')

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'company'
//   });

// // const db = new mysql.Database('.db/company.db', err =>{
// //     if (err) {
// //         return console.error(err.message);
// //     }
// //     console.log ("Connected to company database");
// // });

// module.exports = company;

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'http://localhost:3001',
  user     : 'mwpx7',
  password : 'Maggie2018'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});