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
      return {};
    case GET_MOVIE_DETAIL:
      return {};
    case ADD_MOVIE_FAVORITE:
      return {};
    case REMOVE_MOVIE_FAVORITE:
      return {};
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
