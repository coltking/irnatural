import { ADD_TO_CART, CLEAN_CART, LOGOUT, REMOVE_FROM_CART, SETTING_CART, SETTING_PRODUCTS, SETTING_PROGRESS } from "./constants"

const initialState = {
    products: [],
    progress: 0,
    cart: []
}
const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAN_CART:
            return {...state,cart: []}
        case REMOVE_FROM_CART:
            const indexFrom = state.cart.findIndex(product => {
                if (product.title === action.payload) {
                    return true
                }
            })
            if (state.cart[indexFrom].quantity > 1) {
                state.cart[indexFrom].quantity--
                return { ...state, cart: [...state.cart] }
            } else {
                const newCart = state.cart.filter(prod => prod.title !== action.payload)
                return { ...state, cart: newCart }
            }
        case SETTING_CART:
            return { ...state, cart: action.payload }
        case ADD_TO_CART:
            console.log("in");
            const index = state.cart.findIndex(product => {
                console.log("product: ", product);
                if (product.title === action.payload.title) {
                    return true
                }
            })
            console.log("index: ", index);
            if (index !== -1) {
                state.cart[index].quantity = state.cart[index].quantity + 1
                console.log("state: ", state);
                return { ...state }
            } else {
                action.payload.quantity = 1
                return { ...state, cart: [...state.cart, action.payload] }
            }
            return { ...state, cart: [...state.cart, action.payload] }
        case SETTING_PRODUCTS:
            return { ...state, products: action.payload }
        case SETTING_PROGRESS:
            return { ...state, products: action.payload }
        default:
            return { ...state }
    }
}
export default homeReducer