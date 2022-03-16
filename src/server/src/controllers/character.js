const { fetchCharacters } = require('../service/character');

var charactersCache = [];
const suggestionCache = {};

const getCharacters = async () => {
    if (charactersCache.length === 0) {
        console.log("Making API Call for characters");
        const rawCharacters = await fetchCharacters();
        const cjson = await rawCharacters.json();
        charactersCache = cjson.docs;
        return;
    } else {
        return;
    }
}
const getCharacterByID = async (charID) => {
    await getCharacters();
    let char = charactersCache.filter(ch => ch._id === charID)[0];
    return char;
}

const findSimilarCharacters = (hint) => {
    const result = charactersCache.filter(char => char.name.includes(hint));
    return result;
}
const getCharacterSuggestions = async (req, res) => {
    const hint = req.query.hint;
    if (!suggestionCache[hint]) {
        await getCharacters();
        const result = findSimilarCharacters(hint);
        suggestionCache[hint] = result;
    }
    res.send({ suggestions: suggestionCache[hint] });
}

module.exports = { getCharacterByID, getCharacterSuggestions }