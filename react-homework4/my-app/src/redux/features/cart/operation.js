import action from "./action";

const addItemToCart = (card) => (dispatch) => {
    dispatch(action.addItemToCart(card))
}

const deleteItemFromCart = (id) => (dispatch) => {
    dispatch(action.deleteItemFromCart(id))
}

const clearCart = () => (dispatch) => {
    localStorage.setItem('cart', JSON.stringify([]))
    dispatch(action.clearCart())
}

export default {
    addItemToCart,
    deleteItemFromCart,
    clearCart
}