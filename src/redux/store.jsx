import { combineReducers, createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";
import { icecreamReducer } from "./icecream/icescreamReducer";

const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer
})


const store = createStore(rootReducer)
export default store