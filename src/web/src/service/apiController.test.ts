import { render } from '@testing-library/react';
import { fetchMovies, fetchQuotes } from './apiController';

describe('Testing API Controller', () => {
    it('fetch movies call returns more than 0 movies', async () => {
        const response = await fetchMovies();
        expect(response.movies.length).toBeGreaterThan(0);
    });

    it('Fetch quotes call return 10 quotes', async () => {
        const exampleCharacterID = "5cd99d4bde30eff6ebccfea0";
        const pageNumber = 0;
        const response = await fetchQuotes({ _id: exampleCharacterID }, pageNumber);
        expect(response.quotes.length).toBe(10);
    });
})