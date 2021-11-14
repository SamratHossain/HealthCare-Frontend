import axios from 'axios'
import {PATIENT_SIGNUP_REQUEST,
        PATIENT_SIGNUP_SUCCESS,
        PATIENT_SIGNUP_FAILED} from '../Constants/PatientConstants'

export const PatientSignupAction = (firstName, lastName, email, mobile, gender, dateOfBirth, password, district) => async(dispatch) => {
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
                     {'FirstName':firstName, 'LastName':lastName, 'Email':email, 'Mobile':mobile, 'Gender':gender, 'DateOfBirth':dateOfBirth, 'Password':password, 'District':district},
                     config
        )

        dispatch({
            type : PATIENT_SIGNUP_SUCCESS,
            payload : data
        })
    }catch(error){
        dispatch({
            type : PATIENT_SIGNUP_FAILED,
            payload : error
        })
    }
}


