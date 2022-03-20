const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// get all role

router.get('/role', (req, res) => {
    const sql = `SELECT * FROM role`;
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


/// add  role
router.post('/role', ({ body }, res) => {
    const sql = ` INSERT INTO roles (title,salary,department_id) VALUES (?,?)`;
    const params = [body.title, body.salary,  body.department_name];
    db.query(sql, params, (err, results) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'You added a role!',
            data: body,
            changes: results.affectedRows
        });
    });
});

//delete role
router.delete('/role/title', (req, res) => {
    const sql = ` SELECT * FROM role WHERE title`;

    db.query(sql, req.params.title, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'role not found'
            });
        } else {
            res.json({
                message: 'You removed a role! ',
                changes: result.affectedRows,
                id: req.params.id
            });
        }
    });
});

module.exports = router;