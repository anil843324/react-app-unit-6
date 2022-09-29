import {  SET_CART_LIST} from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case SET_CART_LIST:
      // add to product data logic
      console.log("Cart list ", action);
      return [...action.data];

    default:
      // no case matched
      return data;
  }
};