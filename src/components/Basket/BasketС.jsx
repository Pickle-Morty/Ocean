import React from "react"
import { NavLink } from "react-router-dom"
import Header from "../Header";
import ProductBox from "../common/ProductBox/ProductBox";
import "./Basket.scss"
import BasketCheck from "./BasketCheck/BasketCheck";
import * as axios from "axios" // импортировать все из библиотеки axios под общим названием axios



class BasketPage extends React.Component {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.basketData.currentPage}&count=${this.props.basketData.pageSize}`).then((reqest) => {
            const renameItems = (reqestItems) => { // извлекаем из запроса нужные нам данные
                let items = []
                reqestItems.map((item) => {
                    let renameItem = { title: item.name, id: item.id, followed: item.followed }
                    //приводим данные к нашему пространству имен
                    items.push(renameItem)
                })
                return items
            }
            let items = renameItems(reqest.data.items)
            this.props.setItems(items)

        })
    }

    render() {
        let pageCount = Math.ceil(this.props.basketData.totalUserCount / this.props.basketData.pageSize ) 
        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        const onPageChanged = (currentPage) => {
            this.props.setCurrentPage(currentPage)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.basketData.pageSize}`).then((reqest) => {
            const renameItems = (reqestItems) => { // извлекаем из запроса нужные нам данные
                let items = []
                reqestItems.map((item) => {
                    let renameItem = { title: item.name, id: item.id, followed: item.followed }
                    //приводим данные к нашему пространству имен
                    items.push(renameItem)
                })
                return items
            }
            let items = renameItems(reqest.data.items)
            this.props.setItems(items)

        })

        } 
        return (
            <>
                <Header />
                <main className="container">
                    <div className="navigationRow">
                        {pages.map((item) => {
                            return <span className={this.props.basketData.currentPage === item ? "item curent":"item"}
                            onClick={(e)=>{onPageChanged(item)}}>{item}</span>
                        })}
                    </div>
                    <h1 className="сategory__title">Корзина</h1>
                    <div className="basket">
                        <div className="basket__tape">
                            {this.props.basketData.items.map(item => <ProductBox title={item.title} price={20} id={item.id} followed={item.followed} follow={this.props.follow} unfollow={this.props.unfollow} setItems={this.props.setItems} />)}
                        </div>
                        <BasketCheck score={this.props.basketData.score} />
                    </div>
                </main>
            </>

        );
    }
}



export default BasketPage