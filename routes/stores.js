const Store = require('../models/stores');
const storeController = require('../controllers/storeController');
const express = require('express');
const router = express.Router();

router.get('/', storeController.getAllStores);

router.post('/addStore', storeController.addStore);

router.get('/:id', storeController.getStore);

module.exports = router;