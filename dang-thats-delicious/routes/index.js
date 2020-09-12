const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// we identify the URL with the first argument, 2nd handles the work of hitting route
// off in the controller
router.get('/', storeController.myMiddleware, storeController.homePage);

module.exports = router;
