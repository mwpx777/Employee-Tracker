const express = require('express');
const router = express.Router();
const db = require('../../db/database');

router.get('/departments', (req, res) =>{
    const sql =`SELECT * FROM departments`;
    const params = [req.params.params.id];
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

module.exports = router;