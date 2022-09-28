import { ADD_TO_CART } from "./constant";
import { REMOVE_FROM_CART ,INCREMENT_QUANTITY,DECREMENT_QUANTITY } from "./constant";


export const addToCart = (data) => {
  console.log("action called", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};


export const incrementQuantity = (id) => {
  console.log("incremt quantity");
  return {
    type: INCREMENT_QUANTITY,
    payload: id,
  };
};

export const decrementQuantity = (id) => {
  console.log("decrement quantity");
  return {
    type: DECREMENT_QUANTITY,
    payload: id,
  };
};
