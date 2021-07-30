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



let initialState = {
    productData: productData,
    catalogData: catalogData,
    newTitleText:"",
}


const addProductReducer = (state = initialState, action) => {
    if (action.type === ADD_PRODUCT) {
        let newProduct =  { id: 1, price: action.price, title: action.title, category: "Джинсы" };
        state.productData.push(newProduct);
        addProductReducer(state,{type:UPDATE_TITLE_TEXT, newTitleText:""}) 
    } else if (action.type === UPDATE_TITLE_TEXT) {
        state.newTitleText = action.newTitleText;
    }
    return state
}

export default addProductReducer