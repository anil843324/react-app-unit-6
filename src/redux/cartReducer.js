import {  SET_CART_LIST,REMOVE_FROM_CART ,DECREMENT_QUANTITY ,INCREMENT_QUANTITY  } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case SET_CART_LIST:
      // add to product data logic
      return [...action.data];
      case REMOVE_FROM_CART:
        // add to product data logic
      fetch(`http://localhost:8080/cart/${action.payload}`,{
        method:'DELETE'
      })
      return data;
      case INCREMENT_QUANTITY:
        // Incremtn quantity
        fetch(`http://localhost:8080/cart/${action.payload.id}`,{
          method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...action.payload.obj, quantity:action.payload.obj.quantity < 10 ? action.payload.obj.quantity +1 : action.payload.obj.quantity    } )
        })
      return data;
      case DECREMENT_QUANTITY:
        // decrement quantity
        fetch(`http://localhost:8080/cart/${action.payload.id}`,{
        method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...action.payload.obj, quantity:action.payload.obj.quantity > 1 ? action.payload.obj.quantity -1 : action.payload.obj.quantity    } )
      })
        
      return data;
    default:
      // no case matched
      return data;
  }
};