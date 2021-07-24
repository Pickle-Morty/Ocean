





let store = {
    _state : {
        productPage: {
            productData: [
                { id: 1, price: 300, title: "VictoriaSecret", category: "Джинсы" },
                { id: 2, price: 120, title: "VictoriaSecret", category: "Джинсы" },
                { id: 3, price: 400, title: "VictoriaSecret", category: "Джинсы" },
                { id: 4, price: 30, title: "VictoriaSecret", category: "Джинсы" },
                { id: 5, price: 200, title: "VictoriaSecret", category: "Джинсы" },
                { id: 6, price: 150, title: "VictoriaSecret", category: "Джинсы" },
            ],
            catalogData: [
                { title: "Женщинам", id: 1, img: '' },
                { title: "Мужчинам", id: 2, img: '' },
                { title: "Детям", id: 3, img: '' },
                { title: "Золото", id: 4, img: '' },
                { title: "Интерьер", id: 5, img: '' },
                { title: "Продуткты", id: 6, img: '' },
            ]
        },
        homePage: {
            productData: [
                { id: 1, price: 300, title: "VictoriaSecret", category: "Джинсы" },
                { id: 2, price: 120, title: "VictoriaSecret", category: "Джинсы" },
                { id: 3, price: 400, title: "VictoriaSecret", category: "Джинсы" },
                { id: 4, price: 30, title: "VictoriaSecret", category: "Джинсы" },
                { id: 5, price: 200, title: "VictoriaSecret", category: "Джинсы" },
                { id: 6, price: 150, title: "VictoriaSecret", category: "Джинсы" },
            ],
            catalogData: [
                { title: "Женщинам", id: 1, img: '' },
                { title: "Мужчинам", id: 2, img: '' },
                { title: "Детям", id: 3, img: '' },
                { title: "Золото", id: 4, img: '' },
                { title: "Интерьер", id: 5, img: '' },
                { title: "Продуткты", id: 6, img: '' },
            ],
        },
        addProductPage: {
            newTitleText:"",
        },
    },
    reRenderEntireThree() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },

    addProduct (title, price) {
        let newProduct =  { id: 1, price: price, title: title, category: "Джинсы" };
        this._state.productPage.productData.push(newProduct);
        updateTitleText('');
        this.reRenderEntireThree();
    },
    
    updateTitleText(newTitleText) {   
        this._state.addProductPage.newTitleText = newTitleText;
        this.reRenderEntireThree();
    },
    
    subscibe(observer) {
        this.reRenderEntireThree= observer // патерн observer
    }
}

export default store;