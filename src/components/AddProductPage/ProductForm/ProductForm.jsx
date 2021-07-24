import "./ProductForm.css"
import React from "react"

const ProductForm = (props) => {
    let productTitle = React.createRef()
    let productCategory = React.createRef()
    let productPrice = React.createRef()

    let sendProduct = () => {
        
        props.addProduct(productTitle.current.value,
             productPrice.current.value)
    }

    let onTitleChange = () => {
        let newTitleText = productTitle.current.value
        console.log(newTitleText)
        props.updateTitleText(newTitleText) 
    }
    return (
        <section className="productForm container">
            <div className="navigation__row">
                <h1 className="form__subtitle">Добавить продукт</h1>
                <div className="btn__wrapper">
                    <button onClick={sendProduct} className="btn__submit">Сохранить</button>
                    <button className="btn__cancel">Отменить</button>
                </div>
            </div>
            <form action="" className="form__form">
                <span className="form__text">Название</span>
                <input  ref={productTitle} type="text" className="form__input" value={props.newTitleText} 
                onChange={onTitleChange} />
                <span className="form__text">Категория</span>
                <input ref={productCategory} type="text" className="form__input" />
                <span className="form__text">Цена</span>
                <input ref={productPrice} type="text" className="form__input" />
                <span className="form__text">Описание продукта</span>
                <textarea name="" id="" cols="30" rows="10" className="form__textarea"></textarea>
            </form>
        </section>
    )
}

// Завтра использовать стили из SignInPage сделать их глобальными для сменив класс singIn на form

export default ProductForm