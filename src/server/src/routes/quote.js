const express = require('express');
const router = express.Router();
const { getQuotes } = require('../controllers/quote');

router.get('/getQuotes', getQuotes);

module.exports = router;