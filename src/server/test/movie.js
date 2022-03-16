var assert = require('assert');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const config = require("dotenv").config()

describe('Movie Tests', function () {
    const API_URL = "http://127.0.0.1:" + process.env.PORT
    const endpoint = '/getMovies';
    const reqUrl = API_URL + endpoint;
    
    it('Gets the 200 status code', async function () {
        const response = await fetch(reqUrl);
        assert.equal(response.status, 200);
    });

    it('Controls returning array is not empty', async function () {
        const response = await fetch(reqUrl);
        const json = await response.json();
        assert.notEqual(json.movies.length, 0);
    });

    it('Controls the movie names are strings', async function () {
        const response = await fetch(reqUrl);
        const json = await response.json();
        assert.equal(typeof json.movies[0].name, typeof "");
    });
    
})