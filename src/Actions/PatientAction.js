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

