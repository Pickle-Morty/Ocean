import { NavLink } from "react-router-dom";
import "./ProductCart.css"


const ProductCart = (props) => {
    let path ="/product/" + props.id
    return (
        <NavLink to= {path}>
            <img src="" alt="" className="cart__img" />
            <p className="cart__text">{props.price}</p>
            <p className="cart__text">{props.title}</p>
            <p className="cart__text">{props.category}</p>
        </NavLink>
    );
}

export default ProductCart