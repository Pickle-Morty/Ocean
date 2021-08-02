import React from "react"
import { NavLink } from "react-router-dom"
import "./BasketCheck.scss"



const BasketCheck = ({score}) => {
    const {subtotal, taxRate, taxToltal, delivery, total } = score
    return (
        <div className="basketCheck">
            <h3>Сумма заказа</h3>
            <p className="basketCheck__discription">Цена может меняться 
            в зависимости от способа доставки и налогов вашей страны.</p>
            <div className="basketCheck__row">
                <span >Промежуточный итог</span>
                <span >{subtotal} USD</span>
            </div>
            <div className="basketCheck__row">
                <span >Налог</span>
                <span >{taxRate} %  {taxToltal} USD</span>
            </div>
            <div className="basketCheck__row">
                <span >Доставка</span>
                <span >{delivery} USD</span>
            </div>
            <div className="basketCheck__score">
                <span className="basketCheck__score--text">
                <strong>Общая сумма заказа</strong> <br/>
                Товары поступят:  Июля 12, 2020
                </span>
                <span className="basketCheck__score--summ">{total} USD</span>
            </div>
        </div>
        
    );
}

export default BasketCheck