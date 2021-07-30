import React from "react"
import Header from "../Header"

import "./AddProductPage.css"
import ProductForm from "./ProductForm/ProductForm"

const AddProductPage = (props) => {
    return (
       <section className="addProductPage">
           <Header />
           <ProductForm dispatch ={props.dispatch} newTitleText={props.productData.newTitleText}  />
       </section>
    )
}


export default AddProductPage