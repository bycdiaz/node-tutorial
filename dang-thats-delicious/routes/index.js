const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// we identify the URL with the first argument, 2nd serves view.
router.get('/', storeController.homePage);

router.get('/add', storeController.addStore);
router.post('/add', storeController.createStore);


module.exports = router;
