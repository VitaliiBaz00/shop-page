import types from "./types";

const initialState = JSON.parse(localStorage.getItem('cart')) || []
const reducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case types.ADD_ITEM_TO_CART:{
            const cart = [...state,payload]
            localStorage.setItem('cart', JSON.stringify(cart))
            return cart
        }
        case types.DELETE_ITEM_FROM_CARD: {
            const cart = state.filter((_, id) => id != payload)
            localStorage.setItem('cart', JSON.stringify(cart))
            return cart
        }
        case types.CLEAR_CART:
            return []

        default:
            return state
    }
}

export default {cart: reducer}