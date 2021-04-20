import {} from "../actions/productActions";
import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [{
    id: 1,
    title: "Alex",
    category: "programmer"
  }],
};

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
