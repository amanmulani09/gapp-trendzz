import { CART_ITEMS, PRODUCTS_DATA, REMOVE_CART_ITEMS } from "../constants";
import Products from "../../component/ProductDatabase/Products";
const initalState = {
  products: Products,
  cart: [],
};

export const reducer = (state = initalState, action) => {
  // console.log("reducer", state.cart);
  // console.log(action.payload);
  switch (action.type) {
    case CART_ITEMS:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case REMOVE_CART_ITEMS:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
