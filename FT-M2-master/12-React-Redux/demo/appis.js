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

// OTRO EJEMPLO:
export const getMovieDetail = (id) => {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${tuApiKey}&i=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_MOVIE_DETAIL, payload: json });
      });
  };
};

// OTRO EJEMPLO
function actionMovies() {
  return { type: "GET_MOVIES2", movies: json };
}

export const getMovies2 = (id) => {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${tuApiKey}&i=${id}`)
      .then((response) => response.json())
      .then((json) => dispatch(actionMovies()));
  };
};

// OTRO EJEMPLO:
export function fetchPost(valor) {
  return function (dispatch) {
    dispatch(getPost());
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${valor}`)
      .then((r) => r.data)
      .then((d) => dispatch(receivePost(d)))
      .catch((e) => console.log(e));
  };
}
