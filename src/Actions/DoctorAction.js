import axios from "axios";
import { DOCTOR_SIGNUP_REQUEST,
         DOCTOR_SIGNUP_SUCCESS,
         DOCTOR_SIGNUP_FAILED
         } from "../Constants/DoctorConstants";


export const DoctorSignupAction = (title, firstName, lastName, email, mobile, nidOrPassport, registration, gender, dateOfBirth, password) => async(dispatch) => {
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
            {'Title':title, 'FirstName':firstName, 'LastName':lastName, 'Email':email, 'Mobile':mobile, 'NidOrPassport':nidOrPassport, 'Registration':registration, 'Gender':gender, 'DateOfBirth':dateOfBirth, 'Password':password},
            config
        )

        dispatch({
            type : DOCTOR_SIGNUP_SUCCESS,
            payload : data
        })
    }catch(error){
        dispatch({
            type : DOCTOR_SIGNUP_FAILED,
            // payload:  error.response && error.response.data.detail
            // ? error.response.data.detail
            // : error.message
            payload : error.response.data
        })
    }
}