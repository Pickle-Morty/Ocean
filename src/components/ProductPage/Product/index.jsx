import  "./Product.css" 


const Product = () => {
    return (
            <div className="product">
                <img src="" alt="" className="product__img"/>
                <div className="product__discription">
                    <p className="product__title">Название продукта</p>
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
                    <p className="product__price">33.99$</p>
                </div>
            </div>
                    
    );
}

export default Product