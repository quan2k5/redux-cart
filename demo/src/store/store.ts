import { combineReducers, createStore} from "redux";
import reducerCarts from "./reducers/reducerCarts";
import reducerProducts from "./reducers/reducerProducts";
const rootReducer=combineReducers(
    {
        reducerCarts,
        reducerProducts,
    }
)
const store=createStore(rootReducer);
export default store;
