import axios from 'axios'
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

export const addExperienceAction = (hospitalName, designation, department, currentlyWorking, from, to) => async (dispatch, getState) => {
        try{
            dispatch({
                type : ADD_EXPRIENCE_REQUEST
            })

            const {
                userLogin : {userToken}
            } = getState()

            const config = {
                headers : {
                    'Content-Type' : 'application/json',
                    Authorization : `Bearer ${userToken.data.access}`
                }
            }

            const data = await axios.post(
                         "/api/doctors/add-experience/",
                         {"HospitalName": hospitalName, "Designation":designation, "Department":department, "CurrentlyWorking":currentlyWorking, "From":from, "To":to},
                         config
            )

            dispatch({
                type : ADD_EXPRIENCE_SUCCESS,
                payload : data
            })
        }catch(error){
            dispatch({
                type : ADD_EXPRIENCE_FAILED,
                payload : error.response.data
            })
        }
}

export const viewExperienceAction = () => async (dispatch, getState) => {

            try{
                dispatch({
                    type : VIEW_QUALIFICATION_REQUEST
                })
        
                const {
                    userLogin : {userInfo}
                } = getState()
        
                const config = {
                    headers : {
                        'Content-Type' : 'application/json',
                        Authorization : `Bearer ${userInfo.data.access}`
                    }
                }
        
                const {data} = await axios.get(
                    "/api/doctors/view-experience/",
                    config
                )
        
                dispatch({
                    type : VIEW_EXPERIENCE_SUCCESS,
                    payload : data
                })
            }catch(error){
                dispatch({
                    type : VIEW_EXPERIENCE_FAILED,
                    payload : error.response.data
                })
            }
    
}

export const viewQualificationAction = () => async (dispatch, getState) => {

            try{
                dispatch({
                    type : VIEW_EXPERIENCE_REQUEST
                })
        
                const {
                    userLogin : {userInfo}
                } = getState()
        
                const config = {
                    headers : {
                        'Content-Type' : 'application/json',
                        Authorization : `Bearer ${userInfo.data.access}`
                    }
                }
        
                const {data} = await axios.get(
                    "/api/doctors/view-qualification/",
                    config
                )
        
                dispatch({
                    type : VIEW_QUALIFICATION_SUCCESS,
                    payload : data
                })
            }catch(error){
                dispatch({
                    type : VIEW_QUALIFICATION_FAILED,
                    payload : error.response.data
                })
            }
    
}

export const viewDoctorInfoAction = () => async (dispatch, getState) => {

            try{
                dispatch({
                    type : VIEW_DOCTORINFO_REQUEST
                })
        
                const {
                    userLogin : {userInfo}
                } = getState()
        
                const config = {
                    headers : {
                        'Content-Type' : 'application/json',
                        Authorization : `Bearer ${userInfo.data.access}`
                    }
                }
        
                const {data} = await axios.get(
                    "/api/doctors/view-doctor-info/",
                    config
                )
        
                dispatch({
                    type : VIEW_DOCTORINFO_SUCCESS,
                    payload : data
                })
            }catch(error){
                dispatch({
                    type : VIEW_DOCTORINFO_FAILED,
                    payload : error.response.data
                })
            }
    
}

export const viewPersonalInfoAction = () => async (dispatch, getState) => {

            try{
                dispatch({
                    type : VIEW_DOCTOR_REQUEST,
                })
        
                const {
                    userLogin : {userInfo}
                } = getState()
        
                const config = {
                    headers : {
                        'Content-Type' : 'application/json',
                        Authorization : `Bearer ${userInfo.data.access}`
                    }
                }
        
                const {data} = await axios.get(
                    "/api/doctors/view-personal-info/",
                    config
                )
        
                dispatch({
                    type : VIEW_DOCTOR_SUCCESS,
                    payload : data
                })
            }catch(error){
                dispatch({
                    type : VIEW_DOCTOR_FAILED,
                    payload : error.response.data
                })
            }
    
}