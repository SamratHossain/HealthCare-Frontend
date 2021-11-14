import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { PatientSignupReducer } from "./Reducers/PatientReducer";

const rootReducer = combineReducers({
    PatientSignup : PatientSignupReducer,
})

const middleware = [thunk]

const store = createStore(
    rootReducer,
    composeWithDevTools(
    applyMiddleware(...middleware)
        ))

export default store;