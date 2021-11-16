import types from "./types";

const addItemToFavourites = (payload) => {
    return {type:types.ADD_ITEM_TO_FAVOURITES, payload}
}

const deleteItemFromFavourites = (payload) => {
    return {type:types.DELETE_ITEM_FROM_FAVOURITES, payload}
}

export default {addItemToFavourites,deleteItemFromFavourites}