import { Grid } from "@mui/material"
import React from 'react';
import { useQuery } from "react-query";
import Character from "../../model/Character";
import Quote from "../../model/Quote";
import { getMovieByID, loadMovies } from "./movieListCache";
import QuoteCard from "../QuoteCard/QuoteCard";

interface PagedResponse {
    pages: any
}

interface Page {
    quotes: Quote[],
    character: Character,
    nextId: string,
}

export default function QuoteGrid(props: PagedResponse) {
    const { data, status } = useQuery('get Movie', async () => await loadMovies());
    return (
        <Grid container
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}>

            {(status === 'loading') && <div>loading...</div>}
            {(status === 'success' && data) &&

                props.pages.map((page: Page) => {
                    return (
                        <React.Fragment key={page.nextId}>
                            {page.quotes.map((quote: Quote) => (
                                <Grid key={quote._id}
                                    item
                                    xs={12} sm={6} md={4}
                                    sx={{ alignContent: "center" }}>
                                    <QuoteCard
                                        quote={quote}
                                        character={page.character}
                                        movie={getMovieByID(quote.movie)} />
                                </Grid>
                            ))}
                        </React.Fragment>
                    )
                })
            }
        </Grid>
    )

}