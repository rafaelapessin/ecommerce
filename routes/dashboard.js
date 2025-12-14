const router = require('express').Router();
const dashboardController = require('../controller/dashboardController');

router.get('/', dashboardController.dashboard);

module.exports = router;