export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";

const tuApiKey = "f4ac24d0";
export const getMovies = (titulo) => {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${tuApiKey}&s=${titulo}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_MOVIES, payload: json });
      });
  };
};

export const addMovieFavorite = (payload) => {
  return { type: ADD_MOVIE_FAVORITE, payload };
};

export const removeMovieFavorite = (payload) => {
  return { type: REMOVE_MOVIE_FAVORITE, payload };
};

export const getMovieDetail = (id) => {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${tuApiKey}&i=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_MOVIE_DETAIL, movie: json });
      });
  };
};
