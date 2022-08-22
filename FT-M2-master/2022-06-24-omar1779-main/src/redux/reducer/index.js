// Importa las action types acá

//import { stat } from "fs-extra";
import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL } from "../actions";

const initialState = {
  products: [],
  productDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products : action.payload,
      };
      case GET_PRODUCT_DETAIL:
        return {
          ...state,
          productDetail : action.payload
        };
      case CREATE_PRODUCT :
        return {
          ...state,
          products : [...state.products, action.payload]
        };
      case DELETE_PRODUCT:
        return {
          ...state,
          products: state.products.filter((products) => products.id !== action.payload)
        };
    default:
      return state;
  }
};

export default rootReducer;
