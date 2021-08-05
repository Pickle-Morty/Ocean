let initialState = {
    items: [  
    ],
    score : {
        subtotal: 73.98, 
        taxRate: 17, 
        taxToltal: 16.53,
        delivery: 0,
        total: 89.84 
    },
    pageSize: 5,
    totalUserCount: 20,
    currentPage: 1,
}

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_ITEMS = "SET_ITEMS"
const SET_CURRENTPAGE = "SET_CURRENTPAGE"

const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return { // а еще можно писать вот так что бы не придумывать название переменной
                ...state, //создаем поверхностную копию стейта
                items: state.items.map( item =>{ //создаем глубокую копию стейта с условием
                    if (item.id === action.itemId) { // глубокую копию итема чей id равен actionId (id коитема на который мы кликнули)
                        return {...item, 
                            followed: true} // возвращаем скопированный item меняя его follow на true
                    }
                    return item
                })
            }

        case UNFOLLOW:
            return {
                ...state, 
                items: state.items.map( item => { 
                    if (item.id === action.itemId) { 
                        return {...item, followed: false} 
                    }
                    return item
                })
            }
        case SET_ITEMS: {
            return {...state, 
                items: [
                     ...action.items
                ]
            }
        }
        case SET_CURRENTPAGE: {
            return {...state, 
                currentPage: action.currentPage
            }
        }
        default:
            return state
    }
}

export default basketReducer
