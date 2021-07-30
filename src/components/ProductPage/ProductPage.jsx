import "./ProductPage.css"
import ProductCart from "../ProductCart"
import Product from "./Product"
import Header from "../Header";
import Navbar from "../Navbar";



const ProductPage = (props) => {
    let productCarts =  props.productData.map( cart => <ProductCart price={cart.price + "$"} title={cart.title} category={cart.category} id = {cart.id}/> );
    return (
        <div className="">
            <Header />
            <div className="wrapper">
                <Navbar catalogData = {props.catalogData} />
                <main className="main">
                    <Product />
                    <div className="tape">
                        {productCarts}
                    </div>
                </main> 
            </div>
        </div>
    );
}

export default ProductPage