const express = require('express');
const router = express.Router();
const { getMovies } = require('../controllers/movie');

router.get('/getMovies', getMovies);

module.exports = router;