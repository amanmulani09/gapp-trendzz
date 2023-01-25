import { CART_ITEMS, PRODUCTS_DATA, REMOVE_CART_ITEMS } from "../constants";

export const cart_Items = (cartItem) => {
  return {
    type: CART_ITEMS,
    payload: cartItem,
  };
};

export const remove_cart_Items = (delItem) => {
  return {
    type: REMOVE_CART_ITEMS,
    payload: delItem,
  };
};

export const products_Data = (Products) => {
  return {
    type: PRODUCTS_DATA,
    payload: Products,
  };
};
