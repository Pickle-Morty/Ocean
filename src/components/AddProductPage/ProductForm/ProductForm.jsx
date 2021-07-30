import "./ProductForm.css"
import React from "react"
import {sendProductActionCreator, onTitleChangeActionCreator} from "../../../Redux/store"


const ProductForm = (props) => {
    let productTitle = React.createRef()
    let productCategory = React.createRef()
    let productPrice = React.createRef()
    
    let sendProduct = () => {
        let price = productPrice.current.value
        let title = productTitle.current.value
        let action = sendProductActionCreator(price, title)
        props.dispatch(action)
    }
    let onTitleChange = () => {
        let newTitleText = productTitle.current.value
        let action = onTitleChangeActionCreator(newTitleText)
        props.dispatch(action)

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
                <input ref={productTitle} type="text" className="form__input" value={props.newTitleText}
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



export default ProductForm