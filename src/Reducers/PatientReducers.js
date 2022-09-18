import {
    FIND_DOCTOR_REQUEST,
    FIND_DOCTOR_SUCCESSFUL,
    FIND_DOCTOR_FAILED,

    DOCTOR_LIST_REQUEST,
    DOCTOR_LIST_SUCCESSFUL,
    DOCTOR_LIST_FAILED,

    SEARCH_CATEGORY_REQUEST,
    SEARCH_CATEGORY_SUCCESS,
    SEARCH_CATEGORY_FAILED,

    DOCTOR_PROFILE_REQUEST,
    DOCTOR_PROFILE_SUCCESS,
    DOCTOR_PROFILE_FAILED,
    
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

export const doctorListReducer = (state = {doctorList: []}, action) => {
    switch(action.type){
        case DOCTOR_LIST_REQUEST:
            return {
                ...state,
                loading : true, 
            }

        case DOCTOR_LIST_SUCCESSFUL:
            return {
                ...state,
                loading : false,
                doctorList : action.payload
            }

        case DOCTOR_LIST_FAILED:
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        
        default:
            return state
    }
}


export const doctorProfileReducer = (state = {profiles: []}, action) => {
    switch(action.type){
        case DOCTOR_PROFILE_REQUEST:
            return {
                ...state,
                loading : true, 
            }

        case DOCTOR_PROFILE_SUCCESS:
            return {
                ...state,
                loading : false,
                doctorPrfile : action.payload
            }

        case DOCTOR_PROFILE_FAILED:
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        
        default:
            return state
    }
}


