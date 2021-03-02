const express = require('express');
const router = express.Router();
const db = require('../../db/database');

router.get('/roles', (req, res) =>{
    const sql = `SELECT * FROM roles`;
    const params = [req.params.id];
    db.get(sql, params, (err, rows) =>{
        if (err){
            res.status(500).json({error: err.message});
            return;
        }
        res.json({
            message: 'Success',
            data: rows
        });
    });
});

module.exports = router;