const express = require('express');
const router = express.Router();

router.use(require('./departRoutes'));
router.use(require('./roleRoutes'));
router.use(require('./employRoutes'));

module.exports = router;