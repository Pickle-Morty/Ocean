import React from "react"
import { NavLink } from "react-router-dom"
import "./Header.css"
import headerLogo from "./img/Ocean.png"
import searchIcon from "./img/search-solid.svg"


const Header = (props) => {
    return (
        <header className={ "header " + props.customClass}>
            <div className="container">
                <NavLink to="/">
                    <img src={headerLogo} alt="" className="header__logo" />
                </NavLink>
                <form action="" className="header__form">
                    <input type="text" />
                    <button className="btn__Submit"><img src={searchIcon} alt="" /></button>
                </form>
                <ul className="header__wrapper">
                    <NavLink to ="#"className="header__item">Каталог</NavLink>
                    <NavLink to ="#"className="header__item">Доставка и Оплата</NavLink>
                    <NavLink to ="/addProduct"className="header__item">Добавить товар</NavLink>
                    <NavLink to ="#"className="header__item">Корзина</NavLink>
                    <NavLink to ="/singIn"className="header__item">Войти</NavLink>
                    <NavLink to ="#"className="header__item">Избранное</NavLink>
                </ul>
                <div className="header__burger">
                    <img src="" alt="" className="burger__icon" />
                </div>
            </div>
        </header>
    );
}

export default Header