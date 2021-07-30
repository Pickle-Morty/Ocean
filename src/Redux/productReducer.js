const productReducer = (state, action) => {
    if (action.type === "ADD-PRODUCT") {
        const dataUrl = productData
        let newProduct =  { id: 1, price: action.price, title: action.title, category: "Джинсы" };
        dataUrl.push(newProduct);
        this.dispatch({type:"UPDATE-TITLE-TEXT", newTitleText:""}) //вызываем dispatch с помощью контекста this
        this._callSubscriber(store); // пример вызова Subscriber 
        console.log(store._state)
    } else if (action.type === "UPDATE-TITLE-TEXT") {
        this._state.addProductPage.newTitleText = action.newTitleText;
        this._callSubscriber(store)
    }
    return state
}