import "./ProductForm.css"
import React from "react"
import { addProductActionCreator, updateTitleActionCreator } from "../../../Redux/store"
import ProductForm from "./ProductForm"
import StoreContext from "../../../StoreContext"


const ProductFormContainer = ({ store }) => {

    return (
        <StoreContext.Consumer>
        {
            (store) => {
                let dispatch = store.dispatch.bind(store)

                let addProduct = (price, title) => {
                    let action = addProductActionCreator(price, title)
                    dispatch(action)
                }
                let updateTitle = (newTitleText) => {
                    let action = updateTitleActionCreator(newTitleText)
                    dispatch(action)
                }
                return (
                    <ProductForm newTitleText={store.getState().productPage.newTitleText}
                        addProduct={addProduct} updateTitle={updateTitle} />
                )
            }
        }
        </StoreContext.Consumer>

    )
}



export default ProductFormContainer