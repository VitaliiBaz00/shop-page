import types from "./types";

const initialState = []
const reducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case types.GET_PRODUCTS:
            return payload
        default:
            return state
    }
}

export default {products: reducer}