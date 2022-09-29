import { combineReducers } from "redux"

import { cartData } from "./cartReducer"

import { productData } from "./productReducer"


export default combineReducers({

    cartData,
    productData

})
