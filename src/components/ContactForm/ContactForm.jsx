import React from "react"
import "./ConatctForm.css"

const ContactForm = () => {
    let massegeEllement = React.createRef();
    
    let sendMassege = () => {
        let text = massegeEllement.current.value
        alert(text);
    }
    return (
        <section className="contactForm">
            <div className="contactForm__wrapper">
                <span className="contactForm__tilte">Если возник вопрос – напишите нам</span>
                <form className="contactForm__form" action="">
                    <textarea ref = {massegeEllement} name="" id="" cols="30" rows="10" className="contactForm__textarea" placeholder="Введите сообщение"></textarea>
                    <button className="btn__submit" onClick={sendMassege} >Отправить</button>
                </form>
            </div>
        </section>
    )
}

export default ContactForm 