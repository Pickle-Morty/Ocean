import "./ProductBox.scss"


const ProductBox = ({ title, price, id, followed, follow, unfollow }) => {

    const onFollow = () => {
        follow(id)
    }
    const onUnfollow = () => {

        unfollow(id)
        console.log(followed)
    }
    return (
        <div className="productBox">
            <img src="" alt="" className="product__img" />
            <div className="product__discription">
                <p className="product__title">{title}</p>
                <p className="product__subtitle">Краткое описание продукта</p>
                <table className="product__table">
                    <tr>
                        <th>Категория</th>
                        <th>New (Extra fresh)</th>
                    </tr>
                    <tr>
                        <th>Farm</th>
                        <th>Grocery Tarm Fields</th>
                    </tr>
                    <tr>
                        <th>Доставка</th>
                        <th>Europe</th>
                    </tr>
                    <tr>
                        <th>В наличии</th>
                        <th>320 шт.</th>
                    </tr>
                </table>
            </div>
            <div className="product__sale">
                <p className="product__price">{price}$</p>
                {followed ?
                    <button className="btn__unfollowed" onClick={onUnfollow}>
                        <div></div><span>В моих желаниях</span>
                    </button>
                    :
                    <button className="btn__unfollowed" onClick={onFollow}>
                        <div></div><span>Мои желания</span>
                    </button>
                }

            </div>
        </div>

    );
}

export default ProductBox