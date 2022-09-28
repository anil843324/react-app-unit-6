import { PRODUCT_LIST ,PRODUCT_SEARCH } from "./constant";

//  get call to fetech data through saga
export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};
