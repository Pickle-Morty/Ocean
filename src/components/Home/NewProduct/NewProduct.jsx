import ProductCart from "../../common/ProductCart"
import "./NewProduct.css"




const NewPoduct = (props) => {
    return (
        <div className="newProduct container">
            <p className="newProduct__title">НОВЫЕ ПОСТУПЛЕНИЯ</p>
            <div className="newProduct__wrapper">
                {props.productData.map( cart => <ProductCart price= {cart.price + '$'} title ={cart.title} category = {cart.category} id = {cart.id} />)}
            </div>
        </div>
    )
}

export default NewPoduct