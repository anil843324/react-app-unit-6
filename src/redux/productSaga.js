import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST,  SET_PRODUCT_LIST ,SET_CART_LIST ,CART_LIST} from "./constant";

function* getProducts() {
  let data = yield fetch("http://localhost:8080/products ");
  data = yield data.json();
  //    now call to send the data to action
  yield put({
    type: SET_PRODUCT_LIST,
    data,
  });
}

// fetcing data from cart
function* getCarts() {
  let data = yield fetch("http://localhost:8080/cart ");
  data = yield data.json();
  //    now call to send the data to action
  yield put({
    type: SET_CART_LIST,
    data,
  });
}



function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(CART_LIST, getCarts);
}

export default productSaga;
