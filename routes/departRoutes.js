const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// get all deparments 

router.get('/department', (req, res) => {
    const sql = `SELECT * FROM department`;
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


/// add  department 
router.post('/department', ({ body }, res) => {
    const sql = `INSERT INTO department (id,department_name) VALUES (?,?)`;
    const params = [body.id, body.department_name];
    db.query(sql, params, (err, results) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'You added a department',
            data: body,
            changes: results.affectedRows
        });
    });
});

//delete department 
router.delete('/department/:id', (req, res) => {
    const sql = ` SELECT * FROM department WHERE id = ?`;

    db.query(sql, req.params.id, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'Department not found'
            });
        } else {
            res.json({
                message: 'you removed a department!',
                changes: result.affectedRows,
                id: req.params.id
            });
        }
    });
});
module.exports = router;
