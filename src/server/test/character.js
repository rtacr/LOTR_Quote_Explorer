var assert = require('assert');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const config = require("dotenv").config()


describe('Character Suggestion Tests', function () {
    const API_URL = "http://127.0.0.1:" + process.env.PORT
    var exampleHint = 'gan';
    const endpoint = '/getCharacters';
    const reqUrl = (hint) => API_URL + endpoint + "?hint=" + hint;

    it('Gets the 200 status code', async function () {
        const response = await fetch(reqUrl(exampleHint));
        assert.equal(response.status, 200);
    })

    it('Controls the suggestion for a known hint', async function () {
        const response = await fetch(reqUrl('gan'));
        const json = await response.json();
        assert.equal(json.suggestions[0].name, 'Lorgan');
    });

    it('Controls the empty suggestion return', async function () {
        const response = await fetch(reqUrl('Trabzon'));
        const json = await response.json();
        assert.equal(json.suggestions.length, 0);
    });
});