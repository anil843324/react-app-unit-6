import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, PRODUCT_SEARCH, SET_PRODUCT_LIST } from "./constant";

function* getProducts() {
  let data = yield fetch("http://localhost:8080/products ");
  data = yield data.json();
  //    now call to send the data to action
  yield put({
    type: SET_PRODUCT_LIST,
    data,
  });
}
function* searchProducts(data) {
  let filterData = yield fetch(`http://localhost:3004/products?q=${data.query} `);
  filterData = yield filterData.json();
  //    now call to send the data to action
    console.log('action is called ',filterData)
  yield put({
    type: SET_PRODUCT_LIST,
     data:filterData,
  });
}


function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(PRODUCT_SEARCH, searchProducts);
}

export default productSaga;
