import React from 'react'
import {PATIENT_SIGNUP_REQUEST,
        PATIENT_SIGNUP_SUCCESS,
        PATIENT_SIGNUP_FAILED} from '../Constants/PatientConstants'

export const PatientSignupAction = () => async(dispatch) => {
    try{
        dispatch({
            type : PATIENT_SIGNUP_REQUEST
        })
        
    }catch{

    }
}


