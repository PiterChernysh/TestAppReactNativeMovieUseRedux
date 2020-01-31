const reducer = (movie = {}, { type, payload }) => {
  switch (type) {
    case "SET_MOVIE": {
      movie = payload;
      return movie;
    }
    default: {
      return movie;
    }
  }
};
export default reducer;
