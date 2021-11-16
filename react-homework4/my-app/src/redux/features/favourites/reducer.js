import types from "./types";

const initialState = JSON.parse(localStorage.getItem('favourites')) || []
const reducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case types.ADD_ITEM_TO_FAVOURITES:{
            const favourites = [...state,payload]
            localStorage.setItem('favourites', JSON.stringify(favourites))
            return favourites
        }
        case types.DELETE_ITEM_FROM_FAVOURITES: {
            const favourites = state.filter(({id}) => id != payload)
            localStorage.setItem('favourites', JSON.stringify(favourites))
            return favourites
        }

        default:
            return state
    }
}

export default {favourites: reducer}