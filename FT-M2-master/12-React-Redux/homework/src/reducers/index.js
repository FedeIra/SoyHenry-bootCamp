const GET_MOVIES = "GET_MOVIES";
const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {},
};

const reducer = (state = initialState, action) => {
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
        movieDetail: action.payload.Search,
      };
    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.concat(action.payload),
      };
    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: [state.moviesFavourites.splice(0, action.payload)],
      };
    default:
      return { ...state };
  }
  // Cambia el código encima de esta línea
};

export default reducer;

/* function posts(state = [], action) {
  switch (action.type) {
    case "INCREMENT_LIKES":
      console.log("increment Likes");
      const i = action.index;
      return [
        ...state.slice(0, i), // antes del que estamos actualizando
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1), // despues del actualizado
      ];
    default:
      return state;
  }
} */
