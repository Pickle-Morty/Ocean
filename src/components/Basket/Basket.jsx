import React from "react"
import { NavLink } from "react-router-dom"
import Header from "../Header";
import ProductBox from "../common/ProductBox/ProductBox";
import "./Basket.scss"
import BasketCheck from "./BasketCheck/BasketCheck";
import * as axios from "axios" // импортировать все из библиотеки axios под общим названием axios





const BasketPage = ({ basketData, follow, unfollow, setItems }) => {
    const { items, score } = basketData
    if (items.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then ( (reqest) => {
            setItems(reqest.data.items)
        })
       
    }
    return (
        <>
            <Header />
            <main className="container">
                <div className="navigationRow">

                </div>
                <h1 className="сategory__title">Корзина</h1>
                <div className="basket">
                    <div className="basket__tape">
                        {items.map(item => <ProductBox title={item.name} price= {20} id={item.id} followed={item.followed} follow={follow} unfollow={unfollow} setItems={setItems} />)}
                    </div>
                    <BasketCheck score={score} />
                </div>
            </main>
        </>

    );
}

export default BasketPage