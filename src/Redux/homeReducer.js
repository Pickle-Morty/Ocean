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
    { title: "Члены", id: 6, img: '' },
]



let initialState = {
    productData: productData,
    catalogData: catalogData
}


const homeReducer = (state = initialState, action) => {
    
    return state
}

export default homeReducer