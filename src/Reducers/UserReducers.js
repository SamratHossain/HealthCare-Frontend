import {DOCTOR_SIGNUP_REQUEST,
        DOCTOR_SIGNUP_SUCCESS,
        DOCTOR_SIGNUP_FAILED,

        PATIENT_SIGNUP_REQUEST,
        PATIENT_SIGNUP_SUCCESS,
        PATIENT_SIGNUP_FAILED,
        
        USER_LOGIN_REQUEST,
        USER_LOGIN_SUCCESS,
        USER_LOGIN_FAILED
    } from '../Constants/UserConstants'


export const DoctorSignupReducer = (state = {error:[]}, action) => {
        switch(action.type){
            case DOCTOR_SIGNUP_REQUEST:
                return {
                    ...state,
                    loading : true
                }

            case DOCTOR_SIGNUP_SUCCESS:
                return {
                    ...state,
                    loading : false,
                    success : action.payload
                }

            case DOCTOR_SIGNUP_FAILED:
                return {
                    
                    loading : false,
                    error : action.payload
                }

            default :
                return state
 
        }
}

export const PatientSignupReducer = (state = {}, action) => {
    switch(action.type){
        case PATIENT_SIGNUP_REQUEST:
            return {
                loading : true
            }

        case PATIENT_SIGNUP_SUCCESS:
            return {
                loading : false,
                success : action.payload
            }

        case PATIENT_SIGNUP_FAILED:
            return {
                loading : false,
                error : action.payload
            }

        default :
            return state
    }
}

export const UserLoginReducer = (state = {}, action) => {
        
        switch(action.type){
            case USER_LOGIN_REQUEST:
                return{
                    loading : true
                }

            case USER_LOGIN_SUCCESS:
                return{
                    loading : false,
                    userInfo : action.payload
                }

            case USER_LOGIN_FAILED:
                return{
                    loading : false,
                    error : action.payload
                }
            
            default:
                return state
        }
}