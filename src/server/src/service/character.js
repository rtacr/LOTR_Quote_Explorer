const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const { BASE_URL, headers, endpoints } = require('./config');

const fetchCharacters = async () => {
    const rawQuotes = await fetch(BASE_URL + endpoints.CHARACTER, {
        headers: headers
    });
    return rawQuotes;
}

module.exports = { fetchCharacters }