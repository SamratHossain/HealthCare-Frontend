import {PATIENT_SIGNUP_REQUEST,
    PATIENT_SIGNUP_SUCCESS,
    PATIENT_SIGNUP_FAILED} from '../Constants/PatientConstants'

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