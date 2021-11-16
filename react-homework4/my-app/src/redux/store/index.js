import { applyMiddleware, combineReducers, createStore } from "redux";
import cartReducer from "../features/cart";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import favouriteReducer from '../features/favourites'
import productsReducer from '../features/products'

const rootReducer = combineReducers({
...cartReducer,...favouriteReducer,...productsReducer
})

const composeEnhancers = composeWithDevTools({
    trace: true
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;