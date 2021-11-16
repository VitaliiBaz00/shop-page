import action from "./action";

const addItemToFavourites = (card) => (dispatch) => {
    dispatch(action.addItemToFavourites(card))
}

const deleteItemFromFavourites = (id) => (dispatch) => {
    dispatch(action.deleteItemFromFavourites(id))
}

export default {addItemToFavourites,deleteItemFromFavourites}