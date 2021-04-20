import { combineReducers } from "redux";
import { productReducer, selectedProduct } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProduct,
});

export default reducers;
