import { Card, CardContent, Typography } from "@mui/material"
import Quote from "../../model/Quote";
import Character from "../../model/Character";
import Movie from "../../model/Movie";

export default function QuoteCard(props: { quote: Quote, movie: Movie, character: Character }) {
    return (
        <Card
            sx={{ maxWidth: 500, minWidth: 250 }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom>
                    {props.movie.name}
                </Typography>

                <Typography variant="h5" component="div">
                    {props.quote.dialog}
                </Typography>
                <Typography variant="h6" component="div">
                    -{props.character.name}
                </Typography>
            </CardContent>
        </Card>
    );
}