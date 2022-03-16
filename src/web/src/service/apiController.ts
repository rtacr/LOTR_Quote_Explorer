const axios = require('axios').default;

const API_URL = "http://127.0.0.1:8080";

async function fetchQuotes(input: any, pageParam: number) {
    const res = await axios.get(API_URL + '/getQuotes?character=' + input._id + '&pageNumber='+ pageParam);
    return res.data;
}

async function fetchSuggestions(input: String) {
    const res = await axios.get(API_URL + '/getCharacters?hint=' + input);
    return res.data;
}

async function fetchMovies(){
    const res = await axios.get(API_URL + '/getMovies');
    return res.data;
}
export { fetchQuotes, fetchSuggestions, fetchMovies };