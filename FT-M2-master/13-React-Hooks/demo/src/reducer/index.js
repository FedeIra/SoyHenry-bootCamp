const initialState = {
  name: "",
};

/* const initialState = []; */

export default (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_NAME":
      return {
        name: action.payload,
      };
    default:
      return state;
  }
};

/* const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_NAME":
      return {
        name: action.payload,
      };
    default:
      return state;
  }
};

export default reducer; */
