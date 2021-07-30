import addProductReducer from "./addProductReducer"

let ADD_PRODUCT = "ADD-PRODUCT"
let UPDATE_TITLE_TEXT = "UPDATE-TITLE-TEXT"

let productData = [
    { id: 1, price: 300, title: "VictoriaSecret", category: "Джинсы" },
    { id: 2, price: 120, title: "VictoriaSecret", category: "Джинсы" },
    { id: 3, price: 400, title: "VictoriaSecret", category: "Джинсы" },
    { id: 4, price: 30, title: "VictoriaSecret", category: "Джинсы" },
    { id: 5, price: 200, title: "VictoriaSecret", category: "Джинсы" },
    { id: 6, price: 150, title: "VictoriaSecret", category: "Джинсы" },
]
let catalogData = [
    { title: "Женщинам", id: 1, img: '' },
    { title: "Мужчинам", id: 2, img: '' },
    { title: "Детям", id: 3, img: '' },
    { title: "Золото", id: 4, img: '' },
    { title: "Интерьер", id: 5, img: '' },
    { title: "Продуткты", id: 6, img: '' },
]


let store = {
    _state : {
        productPage: {
            productData: productData,
            catalogData: catalogData,
            newTitleText:"",
        },
        homePage: {
            productData: productData,
            catalogData: catalogData
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
    },
    // патерн observer
    subscibe(observer) { //вызываем subscribe в index.js и получаем функцию reRender в качестве атрибута observer 
        this._callSubscriber = observer //присваиваем наш observer(reRender) заранее созданной функции
        // вызываем эту функцию для перерисовки страни
    },
   dispatch(action) { //
    this._state.productPage = addProductReducer(this._state.productPage, action)
    this._callSubscriber(store)
}
}

export const sendProductActionCreator = (price, title) => {
    console.log ("type: UPDATE_TITLE_TEXT,")
    return {
        type: ADD_PRODUCT,
        price: price,
        title: title
    }
}
export const onTitleChangeActionCreator = (newTitleText) => {
    
    return {
        type: UPDATE_TITLE_TEXT,
        newTitleText: newTitleText
    }
}


export default store;

window.productData = store._state.productPage.newTitleText