import {VIEW_PERSONALINFO_REQUEST,
        VIEW_PERSONALINFO_SUCCESS,
        VIEW_PERSONALINFO_FAILED,

        UPDATE_PERSONALINFO_REQUEST,
        UPDATE_PERSONALINFO_SUCCESS,
        UPDATE_PERSONALINFO_FAILED,

        VIEW_DOCTORINFO_REQUEST,
        VIEW_DOCTORINFO_SUCCESS,
        VIEW_DOCTORINFO_FAILED,

        UPDATE_DOCTORINFO_REQUEST,
        UPDATE_DOCTORINFO_SUCCESS,
        UPDATE_DOCTORINFO_FAILED,
    
        ADD_EXPERIENCE_REQUEST,
        ADD_EXPERIENCE_SUCCESS,
        ADD_EXPERIENCE_FAILED,
        
        VIEW_EXPERIENCE_REQUEST,
        VIEW_EXPERIENCE_SUCCESS,
        VIEW_EXPERIENCE_FAILED,

        UPDATE_EXPERIENCE_REQUEST,
        UPDATE_EXPERIENCE_SUCCESS,
        UPDATE_EXPERIENCE_FAILED,
                         

        VIEW_QUALIFICATION_REQUEST,
        VIEW_QUALIFICATION_SUCCESS,
        VIEW_QUALIFICATION_FAILED,

        UPDATE_QUALIFICATION_REQUEST,
        UPDATE_QUALIFICATION_SUCCESS ,
        UPDATE_QUALIFICATION_FAILED
                            } from '../Constants/DoctorConstans'


export const viewPersonalInfoReducer = (state= {personalInfo:[]}, action) => {
        
        switch(action.type){
            case VIEW_PERSONALINFO_REQUEST:
                return{
                    ...state,
                    loading : true,
                    
                }

            case VIEW_PERSONALINFO_SUCCESS:
                return {
                    ...state,
                    loading : false,
                    personalInfo : action.payload
                }

            case VIEW_PERSONALINFO_FAILED:
                return{
                    ...state,
                    loading : false,
                    error : action.payload
                }

            default:
                return state
        }
}


export const updatePersonalInfoReducer = (state= {}, action) => {
        
    switch(action.type){
        case UPDATE_PERSONALINFO_REQUEST:
            return{
                ...state,
                loading : true,
                
            }

        case UPDATE_PERSONALINFO_SUCCESS:
            return {
                ...state,
                loading : false,
                updatePersonalInfo : action.payload
            }

        case UPDATE_PERSONALINFO_FAILED:
            return{
                ...state,
                loading : false,
                error : action.payload
            }

        default:
            return state
    }
}

export const viewDoctorInfoReducer = (state= {doctorInfo:[]}, action) => {
        
    switch(action.type){
        case VIEW_DOCTORINFO_REQUEST:
            return{
                ...state,
                loading : true,
            }

        case VIEW_DOCTORINFO_SUCCESS:
            return {
                ...state,
                loading : false,
                doctorInfo : action.payload
            }

        case VIEW_DOCTORINFO_FAILED:
            return{
                ...state,
                loading : false,
                error : action.payload
            }

        default:
            return state
    }
}

export const updateDoctorInfoReducer = (state= {updateDoctorInfo:[]}, action) => {
    
    switch(action.type){
        case UPDATE_DOCTORINFO_REQUEST:
            return{
                ...state,
                loading : true,
            }

        case UPDATE_DOCTORINFO_SUCCESS:
            return {
                ...state,
                loading : false,
                updateDoctorInfo : action.payload
            }

        case UPDATE_DOCTORINFO_FAILED:
            return{
                ...state,
                loading : false,
                error : action.payload
            }

        default:
            return state
    }
}

export const  addExperienceReducer = (state = {}, action) => {
        
        switch(action.type){
            case ADD_EXPERIENCE_REQUEST:
                return {
                    loading : true
                }

            case ADD_EXPERIENCE_SUCCESS:
                return {
                    success : action.payload
                }

            case ADD_EXPERIENCE_FAILED:
                return {
                    error : action.payload
                }

            default :
                return state
        }
}     

export const viewExperienceReducer = (state= {experiences:[]}, action) => {
        
        switch(action.type){
            case VIEW_EXPERIENCE_REQUEST:
                return{
                    loading : true,
                    ...state
                }

            case VIEW_EXPERIENCE_SUCCESS:
                return {
                    ...state,
                    loading : false,
                    experiences : action.payload
                }

            case VIEW_EXPERIENCE_FAILED:
                return{
                    ...state,
                    loading : false,
                    error : action.payload
                }

            default:
                return state
        }
}

export const updateExperienceReducer = (state= {}, action) => {
        
        switch(action.type){
            case UPDATE_EXPERIENCE_REQUEST:
                return{
                    loading : true,
                    ...state
                }

            case UPDATE_EXPERIENCE_SUCCESS:
                return {
                    ...state,
                    loading : false,
                    updateExperience : action.payload
                }

            case UPDATE_EXPERIENCE_FAILED:
                return{
                    ...state,
                    loading : false,
                    error : action.payload
                }

            default:
                return state
        }
}

export const viewQualificationReducer = (state= {qualification:[]}, action) => {
        
        switch(action.type){
            case VIEW_QUALIFICATION_REQUEST:
                return{
                    ...state,
                    loading : true,
                    
                }

            case VIEW_QUALIFICATION_SUCCESS:
                return {
                    ...state,
                    loading : false,
                    qualification : action.payload
                }

            case VIEW_QUALIFICATION_FAILED:
                return{
                    ...state,
                    loading : false,
                    error : action.payload
                }

            default:
                return state
        }
}


export const updateQualificationReducer = (state= {}, action) => {
        
        switch(action.type){
            case UPDATE_QUALIFICATION_REQUEST:
                return{
                    ...state,
                    loading : true,
                    
                }

            case UPDATE_QUALIFICATION_SUCCESS:
                return {
                    ...state,
                    loading : false,
                    updateQualifications : action.payload
                }

            case UPDATE_QUALIFICATION_FAILED:
                return{
                    ...state,
                    loading : false,
                    error : action.payload
                }

            default:
                return state
        }
}




