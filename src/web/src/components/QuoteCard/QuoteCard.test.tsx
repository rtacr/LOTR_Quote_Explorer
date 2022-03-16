import { render } from "@testing-library/react";
import QuoteCard from "./QuoteCard";

describe('Quote Card Test', () => {
    test('All properties are rendered', () => {
        const movie = { _id: "random", name: "Two Towers" };
        const character = { id: "random3", name: "Aragorn" };
        const quote = {
            _id: "random2",
            dialog: "aaaaaaaaa",
            character: character.id,
            movie: movie._id
        };
        const { getByText } = render(
            <QuoteCard movie={movie}
                quote={quote}
                character={character}
            />
        );
       
        expect(getByText(movie.name)).toBeInTheDocument();
        expect(getByText("-" + character.name)).toBeInTheDocument();
        expect(getByText(quote.dialog)).toBeInTheDocument();
    });
});