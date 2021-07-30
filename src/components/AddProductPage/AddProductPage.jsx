import React from "react"
import Header from "../Header"

import "./AddProductPage.css"
import ProductFormContainer from "./ProductForm/ProductFormContainer"

const AddProductPage = ({store}) => {
    let state = store.getState()
    return (
       <section className="addProductPage">
           <Header />
           <ProductFormContainer  dispatch ={store.dispatch.bind(store)} newTitleText={state.productPage.newTitleText} />
       </section>
    )
}


export default AddProductPage