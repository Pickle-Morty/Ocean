import React from "react"
import { NavLink } from "react-router-dom"
import Header from "../Header";
import ProductBox from "../common/ProductBox/ProductBox";
import "./Basket.scss"
import BasketCheck from "./BasketCheck/BasketCheck";
import BasketPage from "./Basket";
import { connect } from "react-redux";
import { followAC, unfollowAC } from "../../Redux/storeRedux";



let mapStateToProps = (state) => {
    return {
        basketData: state.basketPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            let action = followAC(id)
            dispatch(action)
        },
        unfollow: (id) => {
            let action = unfollowAC(id)
            dispatch(action)
        }
    }
}
const BasketPageContainer = connect(mapStateToProps, mapDispatchToProps)(BasketPage)

export default BasketPageContainer
