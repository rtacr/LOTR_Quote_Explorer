const express = require('express');
const router = express.Router();
const { getCharacterSuggestions } = require('../controllers/character');

router.get('/getCharacters', getCharacterSuggestions);

module.exports = router;