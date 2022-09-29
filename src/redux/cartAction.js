
import { REMOVE_FROM_CART ,INCREMENT_QUANTITY,DECREMENT_QUANTITY, CART_LIST } from "./constant";



// fetching data to cart
export const cartList = () => {
  return {
    type: CART_LIST,
  };
};



export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};


export const incrementQuantity = (id,obj) => {
 
  return {
    type: INCREMENT_QUANTITY,
    payload: {id,obj},
  };
};

export const decrementQuantity = (id,obj) => {
    
  return {
    type: DECREMENT_QUANTITY,
    payload: {id,obj},
  };
};
