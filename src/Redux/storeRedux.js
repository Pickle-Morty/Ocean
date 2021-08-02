import {combineReducers, createStore} from "redux"
import addProductReducer from "./addProductReducer";
import homeReducer from "./homeReducer";
import basketReducer from "./basketReducer";

let reducers = combineReducers({
    productPage:addProductReducer,
    homePage:homeReducer,
    basketPage: basketReducer
})

let store = createStore(reducers);
export default store  


let ADD_PRODUCT = "ADD-PRODUCT"
let UPDATE_TITLE_TEXT = "UPDATE-TITLE-TEXT"
let FOLLOW = "FOLLOW"
let UNFOLLOW = "UNFOLLOW"

export const addProductActionCreator = (price, title) => {
    return {
        type: ADD_PRODUCT,
        price: price,
        title: title
    }
}
export const updateTitleActionCreator = (newTitleText) => {
    return {
        type: UPDATE_TITLE_TEXT,
        newTitleText: newTitleText
    }
}

export const followAC = (id) => {
    return {
        type: FOLLOW,
        itemId: id,
    }
}
export const unfollowAC = (id) => {
    return {
        type: UNFOLLOW,
        itemId: id,
    }
}



  