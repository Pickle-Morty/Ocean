import React from "react"
import { NavLink } from "react-router-dom"
import Header from "../Header";
import ProductBox from "../common/ProductBox/ProductBox";
import "./Basket.scss"
import BasketCheck from "./BasketCheck/BasketCheck";
import * as axios from "axios" // импортировать все из библиотеки axios под общим названием axios





const BasketPage = ({ basketData, follow, unfollow, setItems }) => {
    const { items, score } = basketData
    const getUsers = () => { //
        if (items.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${}`).then ( (reqest) => {
                const renameItems = (reqestItems) => { // извлекаем из запроса нужные нам данные
                    let items = []  
                    reqestItems.map( (item) => {
                        let renameItem = {title:item.name,  id:item.id, followed:item.followed}
                        //приводим данные к нашему пространству имен
                        items.push(renameItem)
                    })
                    return items
                }
                let items = renameItems(reqest.data.items)
                
                setItems(items)
            })
    }
       
    }
    return (
        <>
            <Header />
            <main className="container">
                <div className="navigationRow">
                    <button onClick={getUsers}>GET USER</button>
                </div>
                <h1 className="сategory__title">Корзина</h1>
                <div className="basket">
                    <div className="basket__tape">
                        {items.map(item => <ProductBox title={item.title} price= {20} id={item.id} followed={item.followed} follow={follow} unfollow={unfollow} setItems={setItems} />)}
                    </div>
                    <BasketCheck score={score} />
                </div>
            </main>
        </>

    );
}

export default BasketPage