const { getCharacterByID } = require('./character');
const { fetchQuotes } = require('../service/quote');

const quotesCache = {};

const getCharacterQuotes = async (charID) => {
    if (!quotesCache[charID]) {
        console.log("Making API Call for quotes");
        const rawQuotes = await fetchQuotes(charID);
        var response = await rawQuotes.json();
        quotesCache[charID] = response.docs;
    } else {
        return;
    }
}

const getQuotes = async (req, res) => {
    const pageElmCount = 10;
    let pageNumber = 0;
    if (req.query.pageNumber) {
        pageNumber = parseInt(req.query.pageNumber);
    }

    let char = await getCharacterByID(req.query.character);

    if (char != undefined) {
        let id = char._id;
        await getCharacterQuotes(id);
        let st = pageNumber * pageElmCount;
        let end = (pageNumber + 1) * pageElmCount;
        let hasNextPage = true;
        if (quotesCache[id].length <= end) {
            hasNextPage = false;
            end = quotesCache[id].length;
        }
        res.send({
            quotes: quotesCache[id].slice(st, end),
            character: char,
            hasNextPage: hasNextPage,
            pageNumber: pageNumber
        });
    } else {
        res.send({ error: "Character not found" });
    }
}

module.exports = { getQuotes }
