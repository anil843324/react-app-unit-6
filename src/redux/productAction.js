import { PRODUCT_LIST ,CART_LIST } from "./constant";

//  get call to fetech data through saga
export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};
