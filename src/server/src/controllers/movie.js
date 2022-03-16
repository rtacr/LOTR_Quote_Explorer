const { fetchMovies } = require('../service/movie');
var movieCache = [];

const getMovies = async (req, res) => {

    if (movieCache.length === 0) {
        const res = await fetchMovies();
        var response = await res.json();
        if (response.hasOwnProperty('docs')) {
            movieCache = response.docs;
        }

    }

    res.send({ movies: movieCache });
}

module.exports = { getMovies }