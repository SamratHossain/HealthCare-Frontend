import {ADD_EXPRIENCE_REQUEST,
        ADD_EXPRIENCE_SUCCESS,
        ADD_EXPRIENCE_FAILED,
        
        VIEW_EXPERIENCE_REQUEST,
        VIEW_EXPERIENCE_SUCCESS,
        VIEW_EXPERIENCE_FAILED,

        VIEW_QUALIFICATION_REQUEST,
        VIEW_QUALIFICATION_SUCCESS,
        VIEW_QUALIFICATION_FAILED,

        VIEW_DOCTORINFO_REQUEST,
        VIEW_DOCTORINFO_SUCCESS,
        VIEW_DOCTORINFO_FAILED,

        VIEW_DOCTOR_REQUEST,
        VIEW_DOCTOR_SUCCESS,
        VIEW_DOCTOR_FAILED,
                            } from '../Constants/DoctorConstans'

const  AddExperienceReducer = (state = {}, action) => {
        
        switch(action.type){
            case ADD_EXPRIENCE_REQUEST:
                return {
                    loading : true
                }

            case ADD_EXPRIENCE_SUCCESS:
                return {
                    success : action.payload
                }

            case ADD_EXPRIENCE_FAILED:
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

export const viewQualificationReducer = (state= {qualifications:[]}, action) => {
        
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
                    qualifications : action.payload
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

export const viewDoctorInfoReducer = (state= {doctorInfo:[]}, action) => {
        
        switch(action.type){
            case VIEW_DOCTORINFO_REQUEST:
                return{
                    loading : true,
                    ...state
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


export const viewPersonalInfoReducer = (state= {personalInfo:[]}, action) => {
        
        switch(action.type){
            case VIEW_DOCTOR_REQUEST:
                return{
                    ...state,
                    loading : true,
                    
                }

            case VIEW_DOCTOR_SUCCESS:
                return {
                    ...state,
                    loading : false,
                    personalInfo : action.payload
                }

            case VIEW_DOCTOR_FAILED:
                return{
                    ...state,
                    loading : false,
                    error : action.payload
                }

            default:
                return state
        }
}