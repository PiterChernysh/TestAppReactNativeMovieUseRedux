const reducer = (movieList = [], { type, payload }) => {
  switch (type) {
    case "SET_MOVIELIST": {
      movieList = payload
      return movieList;
    }
    default: {
      return movieList;
    }
  }
};
export default reducer;