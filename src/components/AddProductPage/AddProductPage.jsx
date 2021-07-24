import React from "react"
import Header from "../Header"

import "./AddProductPage.css"
import ProductForm from "./ProductForm/ProductForm"

const AddProductPage = (props) => {
    return (
       <section className="addProductPage">
           <Header />
           <ProductForm addProduct ={props.addProduct} newTitleText={props.addProductData.newTitleText} updateTitleText ={props.updateTitleText} />
       </section>
    )
}


export default AddProductPage