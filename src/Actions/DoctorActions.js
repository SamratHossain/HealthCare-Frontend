import axios from 'axios'
import {
        VIEW_PERSONALINFO_REQUEST,
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

        CHANGE_DOCTOR_PROFILE_REQUEST,
        CHANGE_DOCTOR_PROFILE_SUCCESS,
        CHANGE_DOCTOR_PROFILE_FAILED,
    
        ADD_EXPERIENCE_REQUEST,
        ADD_EXPERIENCE_SUCCESS,
        ADD_EXPERIENCE_FAILED,

        UPDATE_EXPERIENCE_REQUEST,
        UPDATE_EXPERIENCE_SUCCESS,
        UPDATE_EXPERIENCE_FAILED,
        
        VIEW_EXPERIENCE_REQUEST,
        VIEW_EXPERIENCE_SUCCESS,
        VIEW_EXPERIENCE_FAILED,

        DELETE_EXPERIENCE_REQUEST,
        DELETE_EXPERIENCE_SUCCESS,
        DELETE_EXPERIENCE_FAILED,

        VIEW_QUALIFICATION_REQUEST,
        VIEW_QUALIFICATION_SUCCESS,
        VIEW_QUALIFICATION_FAILED,

        UPDATE_QUALIFICATION_REQUEST,
        UPDATE_QUALIFICATION_SUCCESS ,
        UPDATE_QUALIFICATION_FAILED,

                                } from '../Constants/DoctorConstans'

export const viewPersonalInfoAction = () => async (dispatch, getState) => {

            try{
                dispatch({
                    type : VIEW_PERSONALINFO_REQUEST,
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
                    type : VIEW_PERSONALINFO_SUCCESS,
                    payload : data
                })
            }catch(error){
                dispatch({
                    type : VIEW_PERSONALINFO_FAILED,
                    payload : error.response.data
                })
            }
    
}

export const updatePersonalInfoAction = (id ,title, firstName, lastName, email, mobile, gender, dateOfBirth) => async (dispatch, getState) => {

            try{
                dispatch({
                    type : UPDATE_PERSONALINFO_REQUEST,
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
        
                const {data} = await axios.post(
                    "/api/doctors/update-personal-info/",
                    {'Id': id ,'Title': title, 'FirstName': firstName, 'LastName': lastName, 'Email': email, 'Mobile': mobile, 'Gender': gender, 'DateOfBirth': dateOfBirth},
                    config
                )
        
                dispatch({
                    type : UPDATE_PERSONALINFO_SUCCESS,
                    payload : data
                })
            }catch(error){
                dispatch({
                    type : UPDATE_PERSONALINFO_FAILED,
                    payload : error.response.data
                })
            }
}

export const viewDoctorInfoAction = () => async (dispatch, getState) => {

    try{
        dispatch({
            type : VIEW_DOCTORINFO_REQUEST,
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

export const updateDoctorInfoAction = (id, startTime, endTime, availableDay, consultationFee, followUpDuration, consultDuration, followupFee) => async (dispatch, getState) => {

    try{
        dispatch({
            type : UPDATE_DOCTORINFO_REQUEST,
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

        const {data} = await axios.post(
            "/api/doctors/update-doctor-info/",
            {"Id":id, "StartTime": startTime, "EndTime": endTime, "AvailableDay": availableDay, "ConsultationFee": consultationFee, "FollowUpDuration": followUpDuration, "ConsultDuration": consultDuration, "FollowupFee": followupFee},
            config
        )

        dispatch({
            type : UPDATE_DOCTORINFO_SUCCESS,
            payload : data
        })
    }catch(error){
        dispatch({
            type : UPDATE_DOCTORINFO_FAILED,
            payload : error.response.data
        })
    }
}

export const changeDoctorProfilePhotoAction = (photo) => async (dispatch, getState) => {

    try{
        dispatch({
            type : CHANGE_DOCTOR_PROFILE_REQUEST,
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

        const {data} = await axios.post(
            "/api/doctors/change-doctor-profile-photo/",
            photo,
            config
        )

        dispatch({
            type : CHANGE_DOCTOR_PROFILE_SUCCESS,
            payload : data
        })
    }catch(error){
        dispatch({
            type : CHANGE_DOCTOR_PROFILE_FAILED,
            payload : error
        })
    }
}


export const addExperienceAction = (hospitalName, designation, department, currentlyWorking, from, to) => async (dispatch, getState) => {
        try{
            dispatch({
                type : ADD_EXPERIENCE_REQUEST
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

            const {data} = await axios.post(
                         "/api/doctors/add-experience/",
                         {"HospitalName": hospitalName, "Designation": designation, "Department": department, "CurrentlyWorking": currentlyWorking, "From": from, "To": to},
                         config
            )

            dispatch({
                type : ADD_EXPERIENCE_SUCCESS,
                payload : data
            })

        }catch(error){
            dispatch({
                type : ADD_EXPERIENCE_FAILED,
                payload : error.response.data
            })
        }
}

export const viewExperienceAction = () => async (dispatch, getState) => {

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

export const updateExperienceAction = (id, hospitalName, designation, department, currentlyWorking, from, to) => async (dispatch, getState) => {

            try{
                dispatch({
                    type : UPDATE_EXPERIENCE_REQUEST
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
        
                const {data} = await axios.post(
                    "/api/doctors/update-experience/",
                    {"Id": id,"HospitalName": hospitalName, "Designation":designation, "Department":department, "CurrentlyWorking":currentlyWorking, "From":from, "To":to},
                    config
                )
        
                dispatch({
                    type : UPDATE_EXPERIENCE_SUCCESS,
                    payload : data
                })
            }catch(error){
                dispatch({
                    type : UPDATE_EXPERIENCE_FAILED,
                    payload : error.response.data
                })
            }
    
}

export const deleteExperienceAction = (id) => async (dispatch, getState) => {

            try{
                dispatch({
                    type : DELETE_EXPERIENCE_REQUEST
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
        
                const {data} = await axios.post(
                    "/api/doctors/delete-experience/",
                    {"Id": id},
                    config
                )
        
                dispatch({
                    type : DELETE_EXPERIENCE_SUCCESS,
                    payload : data
                })
            }catch(error){
                dispatch({
                    type : DELETE_EXPERIENCE_FAILED,
                    payload : error
                })
            }
    
}

export const viewQualificationAction = () => async (dispatch, getState) => {

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
                    payload : error
                })
            }
    
}

export const updateQualificationAction = (id, specialist, degreeName, instituteName, country, passingYear) => async (dispatch, getState) => {

            try{
                dispatch({
                    type : UPDATE_QUALIFICATION_REQUEST
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
        
                const {data} = await axios.post(
                    "/api/doctors/update-qualification/",
                    {"Id": id, "Specialist" : specialist, "DegreeName": degreeName, "InstituteName": instituteName, "Country": country, "PassingYear": passingYear},
                    config
                )
        
                dispatch({
                    type : UPDATE_QUALIFICATION_SUCCESS,
                    payload : data
                })
            }catch(error){
                dispatch({
                    type : UPDATE_QUALIFICATION_FAILED,
                    payload : error.response.data
                })
            }
    
}