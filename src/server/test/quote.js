var assert = require('assert');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const config = require("dotenv").config()

describe('Character Quote Tests', function () {
    const API_URL = "http://127.0.0.1:" + process.env.PORT
    var exampleCharacter = '5cd99d4bde30eff6ebccfc38';
    const endpoint = '/getQuotes';
    const reqUrl = (character) => API_URL + endpoint + "?character=" + character;
    
    it('Gets the 200 status code', async function () {
        const response = await fetch(reqUrl(exampleCharacter));
        assert.equal(response.status, 200);
    });

    it('Controls if the quotes are strings', async function () {
        const response = await fetch(reqUrl(exampleCharacter));
        const json = await response.json();
        assert.equal(typeof json.quotes[0].dialog, typeof "");
    });

    it('Controls returning quote count is 10', async function () {
        const response = await fetch(reqUrl(exampleCharacter));
        const json = await response.json();
        assert.equal(json.quotes.length, 10);
    });
    
    it('Controls given out of range page number', async function () {
        const response = await fetch(reqUrl(exampleCharacter+"&pageNumber=999"));
        const json = await response.json();
        assert.equal(json.quotes.length, 0);
        assert.equal(json.hasNextPage, false);
    });

    it('Checks what happens when given irrelevant name', async function(){
        const response = await fetch(reqUrl('Trabzon'));
        const json = await response.json();
        assert.equal(json.hasOwnProperty('error'), true);
    });
})