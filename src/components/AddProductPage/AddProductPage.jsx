import React from "react"
import Header from "../Header"

import "./AddProductPage.css"
import ProductFormContainer from "./ProductForm/ProductFormContainer"

const AddProductPage = () => {
    return (
       <section className="addProductPage">
           <Header />
           <ProductFormContainer   />
       </section>
    )
}


export default AddProductPage