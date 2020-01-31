import { API_KEY } from "react-native-dotenv";

export const GETMovieById = props => async dispatch => {
  const { movieId, setMovie } = props;
  function onSuccess(success) {
    setMovie(success);
    return success;
  }
  function onError(error) {
    return error;
  }
    try {
      const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
      const res = await fetch(URL, {
        method: "GET"
      });
      const success = await res.json();
      dispatch({
        type: "SET_MOVIE",
        payload: success
      });
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
};
