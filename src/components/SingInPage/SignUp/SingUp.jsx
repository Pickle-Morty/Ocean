import React from "react"
import "./SignUp.css"

const SingUp = () => {
    return (
      
                <div className="form__wrapper signUp">
                    <h2 className="form__subtitle">Регистрация</h2>
                    <form action="" className="form__form">
                        <span className="form__text">First name</span>
                        <input type="email" name="" id="" className="form__input" />
                        <span className="form__text">Last name</span>
                        <input type="email" name="" id="" className="form__input" />
                        <span className="form__text">Email</span>
                        <input type="email" name="" id="" className="form__input" />
                        <span className="form__text">Create Password</span>
                        <input type="password" name="" className="form__input" id="" />
                        <span className="form__text">Confirm Password</span>
                        <input type="password" name="" className="form__input" id="" />
                        <button className="btn__form" type="submit">Регистрация</button>
                    </form>
                </div>
    )
}


export default SingUp