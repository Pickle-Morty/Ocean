import React from "react"
import "./SignIn.css"

const form = () => {
    return (

                <div className="form__wrapper signIn">
                    <h2 className="form__subtitle">Войти</h2>
                    <form action="" className="form__form">
                        <span className="form__text">Email</span>
                        <input type="email" name="" id="" className="form__input" />
                        <span className="form__text">Password</span>
                        <input type="password" name="" className="form__input" id="" />
                        <button className="btn__form" type="submit">Войти</button>
                    </form>
                </div>
    )
}


export default form