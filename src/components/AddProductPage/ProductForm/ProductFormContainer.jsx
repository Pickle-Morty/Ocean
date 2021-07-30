import "./ProductForm.css"
import React from "react"
import {addProductActionCreator, updateTitleActionCreator} from "../../../Redux/store"
import ProductForm from "./ProductForm"


const ProductFormContainer = ({dispatch, newTitleText}) => {
  
    
    let addProduct = (price, title) => {
        let action = addProductActionCreator(price, title)
        dispatch(action)
    }
    let updateTitle = (newTitleText) => {
        let action = updateTitleActionCreator(newTitleText)
        dispatch(action)
    }
    return (
        <ProductForm newTitleText = {newTitleText} addProduct ={addProduct} updateTitle = {updateTitle}/>
    )
}



export default ProductFormContainer