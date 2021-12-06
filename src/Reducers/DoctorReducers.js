import {ADD_EXPRIENCE_REQUEST,
        ADD_EXPRIENCE_SUCCESS,
        ADD_EXPRIENCE_FAILED 
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