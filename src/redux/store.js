// import { createStore } from "redux"
import { configureStore } from "@reduxjs/toolkit";
import rootReduer from "./rootReduer";
import productSaga from "./productSaga";
import createSagaMiddleware from "redux-saga";
// const store=createStore(rootReduer )
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReduer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(productSaga);
export default store;
