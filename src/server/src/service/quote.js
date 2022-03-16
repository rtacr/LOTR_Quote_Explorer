const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const { BASE_URL, headers, endpoints } = require('./config');

const fetchQuotes = async (charID) => {
    const rawQuotes = await fetch(BASE_URL + endpoints.CHARACTER + '/' + charID + '/quote', {
        headers: headers
    });
    return rawQuotes;
}

module.exports = { fetchQuotes }