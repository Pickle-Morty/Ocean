import React from "react"
import Header from "../Header"
import SingUp from "./SignUp/SingUp"
import SingIn from "./SingIn/SingIn"
import "./SingInPage.css"

const SingInPage = () => {
    return (
        <div className="">
            <Header />
            <section className="singInPage">
                <div className="singInPage__wrapper">
                    <h1 className="singIn__title">Привет!</h1>
                    <p className="singIn__offer">Пожалуйста, войдите или создайте аккаунт, чтобы продолжить</p>
                </div>
                <SingIn />
                <SingUp />
            </section >


        </div>
    )
}


export default SingInPage