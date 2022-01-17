import {ADD_EXPRIENCE_REQUEST,
        ADD_EXPRIENCE_SUCCESS,
        ADD_EXPRIENCE_FAILED,
        
        VIEW_EXPERIENCE_REQUEST,
        VIEW_EXPERIENCE_SUCCESS,
        VIEW_EXPERIENCE_FAILED
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

            default:
                return state
        }
}