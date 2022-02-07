import {
    FIND_DOCTOR_REQUEST,
    FIND_DOCTOR_SUCCESSFUL,
    FIND_DOCTOR_FAILED,

    SEARCH_CATEGORY_REQUEST,
    SEARCH_CATEGORY_SUCCESS,
    SEARCH_CATEGORY_FAILED,
    
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

export const searchCategoryReducer = (state = {searchCategories: []}, action) => {
    switch(action.type){
        case SEARCH_CATEGORY_REQUEST:
            return {
                ...state,
                loading : true, 
            }

        case SEARCH_CATEGORY_SUCCESS:
            return {
                ...state,
                loading : false,
                searchCategories : action.payload
            }

        case SEARCH_CATEGORY_FAILED:
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        
        default:
            return state
    }
} 