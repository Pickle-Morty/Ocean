let initialState = {
    items: [
        { id: 0, title: "Название продукта", price: 20, followed: false }, 
        { id: 1, title: "Название продукта", price: 20, followed: false }, 
        { id: 2, title: "Название продукта", price: 20, followed: false }, 
        { id: 3, title: "Название продукта", price: 20, followed: false }, 
    ],
    score : {
        subtotal: 73.98, 
        taxRate: 17, 
        taxToltal: 16.53,
        delivery: 0,
        total: 89.84 
    }
}

let FOLLOW = "FOLLOW"
let UNFOLLOW = "UNFOLLOW"

const basketReducer = (state = initialState, action) => {
    let NS = state
    switch (action.type) {
        case FOLLOW: 
            let newState = {
                ...state, //создаем поверхностную копию стейта
                items: state.items.map( item =>{ //создаем глубокую копию стейта с условием
                    if (item.id === action.itemId) { // глубокую копию итема чей id равен actionId (id коитема на который мы кликнули)
                        return {...item, 
                            followed: true} // возвращаем скопированный item меняя его follow на true
                    }
                    return item
                })
            }
            return newState
        case UNFOLLOW:
            let newStat = {
                ...state, 
                items: state.items.map( item =>{ 
                    if (item.id === action.itemId) { 
                        return {...item, followed: false} 
                    }
                    return item
                })
            }
            return newStat
        default:
            return NS
    }
}

export default basketReducer