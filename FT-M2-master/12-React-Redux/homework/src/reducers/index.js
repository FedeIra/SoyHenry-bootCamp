const GET_MOVIES = "GET_MOVIES";
const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {},
};

const rootReducer = (state = initialState, action) => {
  // Cambia el código debajo de esta línea
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesLoaded: action.payload.Search,
      };
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.movie,
      };
    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.concat(action.payload),
      };
    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return { ...state };
  }
  // Cambia el código encima de esta línea
};

export default rootReducer;
