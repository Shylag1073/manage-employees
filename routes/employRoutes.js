const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// get all employee

router.get('/employee', (req, res) => {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: "There you go",
            data: rows
        });
    });
});


/// add  employee
router.post('/employee', ({ body }, res) => {
    const sql = ` INSERT INTO employees (first_name,last_name,role_id,manager_id) VALUES (?,?,?,?)`;
    const params = [body.first_name, body.last_name,body.role_id,body.manager_id];
    db.query(sql, params, (err, results) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'You added a employee!',
            data: body,
            changes: results.affectedRows
        });
    });
});

//delete employee
router.delete('/employee/title', (req, res) => {
    const sql = ` SELECT * FROM employee WHERE first_name`;

    db.query(sql, req.params.first_name, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'employee not found'
            });
        } else {
            res.json({
                message: 'You removed a employee! ',
                changes: result.affectedRows,
                id: req.params.id
            });
        }
    });
});





module.exports = router;