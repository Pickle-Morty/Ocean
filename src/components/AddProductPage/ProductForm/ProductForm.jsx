import "./ProductForm.css"
import React from "react"



const ProductForm = ({addProduct, updateTitle, newTitleText}) => {
    let productTitle = React.createRef()
    let productCategory = React.createRef()
    let productPrice = React.createRef()
    
    let onAddProduct = () => {
        let price = productPrice.current.value
        let title = productTitle.current.value
        addProduct(price, title)
        
    }
    let onUpdateTitle = () => {
        let newTitleText = productTitle.current.value
        updateTitle(newTitleText)
        

    }
    return (
        <section className="productForm container">
            <div className="navigation__row">
                <h1 className="form__subtitle">Добавить продукт</h1>
                <div className="btn__wrapper">
                    <button onClick={onAddProduct} className="btn__submit">Сохранить</button>
                    <button className="btn__cancel">Отменить</button>
                </div>
            </div>
            <form action="" className="form__form">
                <span className="form__text">Название</span>
                <input ref={productTitle} type="text" className="form__input" value={newTitleText}
                    onChange={onUpdateTitle} />
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