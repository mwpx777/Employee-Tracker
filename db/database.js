const sqlite = require('sqlite').verbose();

const db = new sqlite.Database('.db/company.db', err =>{
    if (err) {
        return console.error(err.message);
    }
    console.log ("Connected to company database");
});

module.exports = db;