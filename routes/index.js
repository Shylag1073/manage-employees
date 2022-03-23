const express = require('express');
const router = express.Router();
const inquirer = require('inquirer');


router.use(require('./departRoutes'));
router.use(require('./roleRoutes'));
router.use(require('./employRoutes'));

inquirer







module.exports = router;