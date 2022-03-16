const API_KEY = process.env.THE_ONE_API_KEY

const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + API_KEY
}

const BASE_URL = 'https://the-one-api.dev/v2';

const endpoints = {
    CHARACTER: "/character",
    MOVIE: "/movie"
}
module.exports = {
    headers,
    BASE_URL,
    endpoints
}