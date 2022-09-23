import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { PatientSignupReducer } from "./Reducers/UserReducers";
import { DoctorSignupReducer } from "./Reducers/UserReducers";
import { CheckExistingDoctorReducer } from "./Reducers/UserReducers";
import { UserLoginReducer } from "./Reducers/UserReducers"
import { viewPersonalInfoReducer,
         updatePersonalInfoReducer,
         viewDoctorInfoReducer,
         updateDoctorInfoReducer,
         addExperienceReducer, 
         viewExperienceReducer,
         updateExperienceReducer,
         viewQualificationReducer,
         updateQualificationReducer
         } from "./Reducers/DoctorReducers";

import {
    findDoctorReducer,
    searchCategoryReducer,
    doctorListReducer,
    doctorExperienceReducer,
    doctorInfoReducer,
    doctorsReducer,
    doctorQualificationReducer,
    sendMessageReducer,
 } from "./Reducers/PatientReducers"


const rootReducer = combineReducers({
    patientSignup : PatientSignupReducer,
    doctorSignup : DoctorSignupReducer,
    checkExistingDoctor : CheckExistingDoctorReducer,
    userLogin : UserLoginReducer,
    viewPersonalInfo : viewPersonalInfoReducer,
    updatePersonalInfo : updatePersonalInfoReducer,
    viewDoctorInfo : viewDoctorInfoReducer,
    updateDoctorInfo : updateDoctorInfoReducer,
    addExperience : addExperienceReducer,
    viewExperience : viewExperienceReducer,
    updateExperience : updateExperienceReducer,
    viewQualification : viewQualificationReducer,
    updateQualification : updateQualificationReducer,

    doctorCategories : findDoctorReducer,
    searchCategoryResult : searchCategoryReducer,
    doctorListInformation : doctorListReducer,
    doctorExperience : doctorExperienceReducer,
    doctorInfo : doctorInfoReducer,
    doctors : doctorsReducer,
    qualifications : doctorQualificationReducer,
    sendMessage : sendMessageReducer,
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