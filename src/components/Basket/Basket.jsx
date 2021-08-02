import React from "react"
import { NavLink } from "react-router-dom"
import Header from "../Header";
import ProductBox from "../common/ProductBox/ProductBox";
import "./Basket.scss"
import BasketCheck from "./BasketCheck/BasketCheck";






const BasketPage = ({basketData}) => {
    const { items, score } = basketData
    return (
        <>
            <Header />
            <main className="container">
                <div className="navigationRow">

                </div>
                <h1 className="сategory__title">Корзина</h1>
                <div className="basket">
                    <div className="basket__tape">
                        { items.map(item => <ProductBox title = {item.title} price={item.price}/>) }
                    </div>
                    <BasketCheck score ={score}/>
                </div>
            </main>
        </>

    );
}

export default BasketPage