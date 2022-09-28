import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // add to car logic
      console.log("Add to cart ", action);

      return [action.data, ...data];
    case REMOVE_FROM_CART:
      // add to car logic
      console.log("REMOVE_FROM_CART ", action);
      let filterData = data.filter((ele) => ele.id !== action.payload);
      return [...filterData];
    case EMPTY_CART:
      // add to car logic
      console.log("EMPTY_CART ", action);
      data = [];
      return [...data];
    case INCREMENT_QUANTITY:
      //  Incremtn Quantity

      let filterD = data.map((ele) => {
        if (ele.id === action.payload) {
          return { ...ele, qunty: ele.qunty <10 ? ele.qunty+1 : ele.qunty   };
        }
        return ele;
      });

      return [...filterD];
    case DECREMENT_QUANTITY:
      //  decrement quantity
      let filterDec = data.map((ele) => {
        if (ele.id === action.payload) {
          return { ...ele, qunty: ele.qunty > 1 ? ele.qunty-1 : ele.qunty   };
        }
        return ele;
      });

      return [...filterDec];

      return [...data];
    default:
      // no case matched
      return data;
  }
};
