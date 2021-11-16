import action from "./action";

const getProducts =  () => async (dispatch) => {
    const {products} = await fetch('Products-array.json').then(data=>data.json())
    dispatch(action.getProducts(products))
}



export default {getProducts}