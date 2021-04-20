import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
});
