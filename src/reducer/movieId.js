const reducer = (movieId = {}, { type, payload }) => {
  switch (type) {
    case "SET_MOVIEID": {
      movieId = payload;
      return movieId;
    }
    default: {
      return movieId;
    }
  }
};
export default reducer;
