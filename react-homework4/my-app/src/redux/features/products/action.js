import types from "./types";

const getProducts = (payload) => ({
    type:types.GET_PRODUCTS,
    payload
})

export default {getProducts}