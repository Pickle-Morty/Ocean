import "./ProductPage.css"
import ProductPage from "./ProductPage";



const ProductPageContainer = ({store}) => {
    let state = store.getState()
    return (
        <ProductPage productData = {state.productPage.productData} 
        catalogData = {state.productPage.catalogData} />
    );
}

export default ProductPageContainer