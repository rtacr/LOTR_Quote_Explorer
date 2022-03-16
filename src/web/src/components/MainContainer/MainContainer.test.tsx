
import { screen, render, wait, fireEvent, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import MainContainer from "./MainContainer";
const axios = require('axios');
const { fetchSuggestions } = require('../../service/apicontroller');
jest.mock('axios')

describe('Main Container Tests', () => {

    it('Search Button is disabled on the first render ', () => {
        const queryClient = new QueryClient()
        render(
            <QueryClientProvider client={queryClient}>
                <MainContainer />
            </QueryClientProvider>
        );
        expect(screen.getByRole('button', { name: /Search/i })).toBeDisabled();
    });
});