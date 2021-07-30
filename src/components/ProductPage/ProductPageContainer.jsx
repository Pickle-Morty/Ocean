import "./ProductPage.css"
import ProductPage from "./ProductPage";
import StoreContext from "../../StoreContext";
import { connect } from "react-redux";




let mapStateToProps = (state) => {
    return {
        productData: state.productPage.productData ,
        catalogData: state.productPage.catalogData
    }
}
let mapDispatchToProps = () => {
    return {

    }
}

const ProductPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductPage)

export default ProductPageContainer