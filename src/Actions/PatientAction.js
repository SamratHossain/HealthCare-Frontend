import axios from 'axios'
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


export const  viewDoctorsCategory = () => async (dispatch, getState) => {
    try{
        dispatch({
            type : FIND_DOCTOR_REQUEST
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
            "/api/patients/view-category/",
            config
        )

        dispatch({
            type : FIND_DOCTOR_SUCCESSFUL,
            payload : data
        })
    }catch(error){
        dispatch({
            type : FIND_DOCTOR_FAILED,
            payload : error
        })
    }
}

export const doctorsListAction = () => async (dispatch, getState) => {
    try{
        dispatch({
            type : DOCTOR_LIST_REQUEST
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
            "/api/patients/doctor-list/",
            config
        )

        dispatch({
            type : DOCTOR_LIST_SUCCESSFUL,
            payload : data
        })
    }catch(error){
        dispatch({
            type : DOCTOR_LIST_FAILED,
            payload : error
        })
    }
}


export const  searchDoctorsCategory = (name) => async (dispatch, getState) => {
    try{
        dispatch({
            type : SEARCH_CATEGORY_REQUEST
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
            `/api/patients/search-category/${name}`,
            
            config
        )

        dispatch({
            type : SEARCH_CATEGORY_SUCCESS,
            payload : data
        })
    }catch(error){
        dispatch({
            type : SEARCH_CATEGORY_FAILED,
            payload : error
        })
    }
}

export const  doctorsExperience = (id) => async (dispatch, getState) => {
    try{
        dispatch({
            type : DOCTOR_PROFILE_REQUEST
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
            `/api/patients/view-experience/${id}`,
            config
        )

        dispatch({
            type : DOCTOR_PROFILE_SUCCESS,
            payload : data
        })
    }catch(error){
        dispatch({
            type : DOCTOR_PROFILE_FAILED,
            payload : error
        })
    }
}


export const  doctorsInfo = (id) => async (dispatch, getState) => {
    try{
        dispatch({
            type : DOCTOR_INFO_REQUEST
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
            `/api/patients/view-doctorinfo/${id}`,
            config
        )

        dispatch({
            type : DOCTOR_INFO_SUCCESS,
            payload : data
        })
    }catch(error){
        dispatch({
            type : DOCTOR_INFO_FAILED,
            payload : error
        })
    }
}

export const  doctorAction = (id) => async (dispatch, getState) => {
    try{
        dispatch({
            type : DOCTOR_REQUEST
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
            `/api/patients/view-doctor/${id}`,
            config
        )

        dispatch({
            type : DOCTOR_SUCCESS,
            payload : data
        })
    }catch(error){
        dispatch({
            type : DOCTOR_FAILED,
            payload : error
        })
    }
}

export const  doctorQualification = (id) => async (dispatch, getState) => {
    try{
        dispatch({
            type : DOCTOR_QUALIFICATION_REQUEST
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
            `/api/patients/view-qualification/${id}`,
            config
        )

        dispatch({
            type : DOCTOR_QUALIFICATION_SUCCESS,
            payload : data
        })
    }catch(error){
        dispatch({
            type : DOCTOR_QUALIFICATION_FAILED,
            payload : error
        })
    }
}

export const  sendMessageAdction = (message, user_from, user_to) => async (dispatch, getState) => {
    try{
        dispatch({
            type : SEND_MESSAGE_REQUEST
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
            `/api/chats/send-message/`,
            {'message':message, 'user_from':user_from, 'user_to':user_to},
            config
        )

        dispatch({
            type : SEND_MESSAGE_SUCCESS,
            payload : data
        })
    }catch(error){
        dispatch({
            type : SEND_MESSAGE_FAILED,
            payload : error
        })
    }
}

