const express = require('express');
const router = express.Router();
const db = require('../../db/database');

router.get('/employees', (req, res) => {
    const sql = `SELECT employees.*, roles.name
                AS roles
                FROM employees
                LEFT JOIN roles
                ON employees.role_id = roles.id`;

    const params = [req.params.id];
    db.get(sql, params, (err, rows) =>{
        if (err){
            res.status(400).json({error: err.message});
            return;
        }
        res.json({
            message:'Success',
            data: rows
        });
    });

});

router.post('/employees', (req, res) =>{
    const sql = `INSERT INTO employees (first_name, last_name, employeeManagerId, employeeRoleId) VALUES (?,?,?,?)`;
    const params = [body.first_name, body.last_name, body.employeeManagerId, body.employeeRoleId];

    db.run(sql, params, function(err, result) {
        if(err){
            res.status(400).jston({error: err.message});
            return;
        }
        res.json({
            message: 'Success',
            data: body,
            id: this.lastID
        });
    });
});

module.exports = router;