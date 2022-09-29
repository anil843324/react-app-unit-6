import { SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      // add to product data logic
      console.log("Product list ", action);
      return [...action.data];

    default:
      // no case matched
      return data;
  }
};

