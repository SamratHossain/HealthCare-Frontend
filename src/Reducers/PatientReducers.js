import {
    FIND_DOCTOR_REQUEST,
    FIND_DOCTOR_SUCCESSFUL,
    FIND_DOCTOR_FAILED,
    } from '../Constants/PatientConstants'

export const findDoctorReducer = (state = {categories: []}, action) => {
    switch(action.type){
        case FIND_DOCTOR_REQUEST:
            return {
                ...state,
                loading : true, 
            }

        case FIND_DOCTOR_SUCCESSFUL:
            return {
                ...state,
                loading : false,
                categories : action.payload
            }

        case FIND_DOCTOR_FAILED:
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        
        default:
            return state
    }
} 