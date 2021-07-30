import "./ProductPage.css"
import ProductPage from "./ProductPage";
import StoreContext from "../../StoreContext";



const ProductPageContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()
                    return (
                        <ProductPage productData={state.productPage.productData}
                            catalogData={state.productPage.catalogData} />
                    )
                }
            }

        </StoreContext.Consumer>

    );
}

export default ProductPageContainer