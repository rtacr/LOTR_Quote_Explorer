const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const { BASE_URL, headers, endpoints } = require('./config');

const fetchMovies = async () => {
    const rawMovies = await fetch(BASE_URL + endpoints.MOVIE, {
        headers: headers
    });
    return rawMovies;
}

module.exports = { fetchMovies }