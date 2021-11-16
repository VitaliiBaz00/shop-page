import types from "./types";

const addItemToCart = (payload) => {
    return {type:types.ADD_ITEM_TO_CART, payload}
}

const deleteItemFromCart = (payload) => {
    return {type:types.DELETE_ITEM_FROM_CARD, payload}
}

const clearCart = () => {
    return {type:types.CLEAR_CART}
}

export default {
    addItemToCart,
    deleteItemFromCart,
    clearCart
}