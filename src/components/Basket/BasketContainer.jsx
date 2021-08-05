import React from "react"
import "./Basket.scss"
import BasketPage from "./BasketС";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setItemsAC, unfollowAC } from "../../Redux/storeRedux";



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
        },
        setItems : (items) => {
            let action = setItemsAC(items)
            dispatch (action)
        },
        setCurrentPage : (currentPage) => {
            let action = setCurrentPageAC (currentPage)
            dispatch (action)
        }
    }
}
const BasketPageContainer = connect(mapStateToProps, mapDispatchToProps)(BasketPage)

export default BasketPageContainer
