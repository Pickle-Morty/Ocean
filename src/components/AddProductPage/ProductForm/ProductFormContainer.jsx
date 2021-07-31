import "./ProductForm.css"
import React from "react"
import { addProductActionCreator, updateTitleActionCreator } from "../../../Redux/store"
import ProductForm from "./ProductForm"
import StoreContext from "../../../StoreContext"
import { connect } from "react-redux"




let mapStateToProps = (state) => {
    return {
        newTitleText: state.productPage.newTitleText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (price, title) => {
            let action = addProductActionCreator(price, title)
            dispatch(action)
        },
        updateTitle: (newTitleText) => {
            let action = updateTitleActionCreator(newTitleText)
            dispatch(action)
        }
    }
}


const ProductFormContainer = connect(mapStateToProps, mapDispatchToProps)(ProductForm)

export default ProductFormContainer