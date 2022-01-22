import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { PatientSignupReducer } from "./Reducers/UserReducers";
import { DoctorSignupReducer } from "./Reducers/UserReducers";
import { CheckExistingDoctorReducer } from "./Reducers/UserReducers";
import { UserLoginReducer } from "./Reducers/UserReducers"
import { viewExperienceReducer } from "./Reducers/DoctorReducers";

const rootReducer = combineReducers({
    patientSignup : PatientSignupReducer,
    doctorSignup : DoctorSignupReducer,
    checkExistingDoctor : CheckExistingDoctorReducer,
    userLogin : UserLoginReducer,
    viewExperience : viewExperienceReducer,
})

const userTokenFromLocalStorage = localStorage.getItem('UserInfo')?
                                  JSON.parse(localStorage.getItem('UserInfo')) : null

const initialState = {
    userLogin : {userInfo : userTokenFromLocalStorage}
}

const middleware = [thunk]

const store = createStore(  
    rootReducer,
    initialState,
    composeWithDevTools(
    applyMiddleware(...middleware)
        ))

export default store;