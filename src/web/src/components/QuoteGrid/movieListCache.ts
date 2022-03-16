import Movie from "../../model/Movie";
import { fetchMovies } from "../../service/apiController";

var movieCache: Movie[] = [];
export const loadMovies = async () => {
    if (movieCache.length !== 0) {
        return true;
    }
    const res = await fetchMovies();
    movieCache = res.movies;
    return true;
}
export const getMovieByID = (movieID: string) => {
    var movie = movieCache.filter(mov => mov._id === movieID)[0];
    if (!movie) {
        movie = { _id: "0", name: "Movie Not Found" };
    }

    return movie;
}