import axios from "axios";
import { DOCTOR_SIGNUP_REQUEST,
         DOCTOR_SIGNUP_SUCCESS,
         DOCTOR_SIGNUP_FAILED,

         CHECK_EXISTING_USER_REQUEST,
         CHECK_EXISTING_USER_SUCCESS,
         CHECK_EXISTING_USER_FAILED,

         PATIENT_SIGNUP_REQUEST,
         PATIENT_SIGNUP_SUCCESS,
         PATIENT_SIGNUP_FAILED,

         USER_LOGIN_REQUEST,
         USER_LOGIN_SUCCESS,
         USER_LOGIN_FAILED,

         USER_LOGOUT
         } from "../Constants/UserConstants";



export const DoctorSignupAction = ( DoctorsData) => async (dispatch) => {
    try{
        dispatch({
            type : DOCTOR_SIGNUP_REQUEST
        })

        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }

        const data =  await axios.post(
            "/api/accounts/doctor/signup/",
            DoctorsData,
            config
        )

        dispatch({
            type : DOCTOR_SIGNUP_SUCCESS,
            payload : data
        })

        
    }catch(error){
        dispatch({
            type : DOCTOR_SIGNUP_FAILED,
            payload : error.response.data
        })
    }
}

export const CheckExistingDoctorAction = (email, nidOrPassport, registration) => async (dispatch) => {
    try{
        dispatch({
            type : CHECK_EXISTING_USER_REQUEST
        })

        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }

        const data =  await axios.post(
            "/api/accounts/doctor/check-existing-doctor/",
            {'Email':email, 'NidOrPassport':nidOrPassport, 'Registration':registration},
            config
        )

        dispatch({
            type : CHECK_EXISTING_USER_SUCCESS,
            payload : data
        })
    }catch(error){
        dispatch({
            type : CHECK_EXISTING_USER_FAILED,
            payload : error.response.data
        })
    }
}

export const PatientSignupAction = (firstName, lastName, email, mobile, gender, dateOfBirth, password) => async (dispatch) => {
    try{
        dispatch({
            type : PATIENT_SIGNUP_REQUEST
        })

        const config = {
            headers : {
                'Content-Type':'application/json'
            }
        }

        const data = await axios.post(
                     "/api/accounts/patient/signup/",
                     {'FirstName':firstName, 'LastName':lastName, 'Email':email, 'Mobile':mobile, 'Gender':gender, 'DateOfBirth':dateOfBirth, 'Password':password},
                     config
        )

        dispatch({
            type : PATIENT_SIGNUP_SUCCESS,
            payload : data
        })
    }catch(error){
        dispatch({
            type : PATIENT_SIGNUP_FAILED,
            payload : error.response.data
        })
    }
}

export const UserLoginAction = (email, password) => async (dispatch) => {
    try{
        dispatch({
            type : USER_LOGIN_REQUEST
        })

        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }

        const data = await axios.post(
                    '/api/accounts/login/',
                    {'email':email, 'password':password},
                    config)

        localStorage.setItem('UserInfo', JSON.stringify(data))

        dispatch({
            type : USER_LOGIN_SUCCESS,
            payload : data
        })
    }catch(error){
        dispatch({
            type : USER_LOGIN_FAILED,
            payload : error.response.data
        })
    }
}

const UserLogoutAction = () => (dispatch) => {
    
        localStorage.removeItem('UserInfo')

        dispatch({
            type : USER_LOGOUT
        })
    
}

export default UserLogoutAction


