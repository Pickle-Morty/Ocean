import {combineReducers, createStore} from "redux"
import addProductReducer from "./addProductReducer";
import homeReducer from "./homeReducer";

let reducers = combineReducers({
    productPage:addProductReducer,
    homePage:homeReducer
})

let store = createStore(reducers);



export default store    