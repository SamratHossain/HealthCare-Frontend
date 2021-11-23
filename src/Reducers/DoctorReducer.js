import {DOCTOR_SIGNUP_REQUEST,
        DOCTOR_SIGNUP_SUCCESS,
        DOCTOR_SIGNUP_FAILED} from '../Constants/DoctorConstants'


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