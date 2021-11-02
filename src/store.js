import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    "name":"Samrat Hossain"
})

const middleware = [thunk]

const store = createStore(
    rootReducer,
    composeWithDevTools(
    applyMiddleware(...middleware)
        ))

export default store;