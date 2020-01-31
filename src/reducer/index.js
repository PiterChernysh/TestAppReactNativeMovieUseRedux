import { combineReducers } from "redux";

import movieList from "./movieList";
import movieId from "./movieId";
import similarMoviesById from "./similarMoviesById";
import movie from "./movie";

const reducer = combineReducers({
  movieList: movieList,
  movieId: movieId,
  similarMoviesById: similarMoviesById,
  movie: movie
});

export default reducer;
