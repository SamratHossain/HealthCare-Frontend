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

    DOCTOR_INFO_REQUEST,
    DOCTOR_INFO_SUCCESS,
    DOCTOR_INFO_FAILED,

    DOCTOR_REQUEST,
    DOCTOR_SUCCESS,
    DOCTOR_FAILED,

    DOCTOR_QUALIFICATION_REQUEST,
    DOCTOR_QUALIFICATION_SUCCESS,
    DOCTOR_QUALIFICATION_FAILED,

    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILED,
    
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


export const doctorExperienceReducer = (state = {experiences: []}, action) => {
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
                experiences : action.payload
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

export const doctorInfoReducer = (state = {info:[]}, action) => {
    switch(action.type){
        case DOCTOR_INFO_REQUEST:
            return {
                ...state,
                loading : true, 
            }

        case DOCTOR_INFO_SUCCESS:
            return {
                ...state,
                loading : false,
                info : action.payload
            }

        case DOCTOR_INFO_FAILED:
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        
        default:
            return state
    }
}

export const doctorsReducer = (state = {doctor:[]}, action) => {
    switch(action.type){
        case DOCTOR_REQUEST:
            return {
                ...state,
                loading : true, 
            }

        case DOCTOR_SUCCESS:
            return {
                ...state,
                loading : false,
                doctor : action.payload
            }

        case DOCTOR_FAILED:
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        
        default:
            return state
    }
}

export const doctorQualificationReducer = (state = {qualification:[]}, action) => {
    switch(action.type){
        case DOCTOR_QUALIFICATION_REQUEST:
            return {
                ...state,
                loading : true, 
            }

        case DOCTOR_QUALIFICATION_SUCCESS:
            return {
                ...state,
                loading : false,
                qualification : action.payload
            }

        case DOCTOR_QUALIFICATION_FAILED:
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        
        default:
            return state
    }
}

export const sendMessageReducer = (state = {messages:[]}, action) => {
    switch(action.type){
        case DOCTOR_QUALIFICATION_REQUEST:
            return {
                ...state,
                loading : true, 
            }

        case DOCTOR_QUALIFICATION_SUCCESS:
            return {
                ...state,
                loading : false,
                messages : action.payload
            }

        case DOCTOR_QUALIFICATION_FAILED:
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        
        default:
            return state
    }
}


