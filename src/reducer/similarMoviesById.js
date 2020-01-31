const reducer = (similarMoviesById = [], { type, payload }) => {
  switch (type) {
    case "SET_SIILARMOVIESBYID": {
      similarMoviesById = payload
      return similarMoviesById;
    }
    default: {
      return similarMoviesById;
    }
  }
};
export default reducer;