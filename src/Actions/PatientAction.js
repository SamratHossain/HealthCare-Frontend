import axios from 'axios'
import {
    FIND_DOCTOR_REQUEST,
    FIND_DOCTOR_SUCCESSFUL,
    FIND_DOCTOR_FAILED,
} from '../Constants/PatientConstants'


export const findDoctor = () => async (dispatch, getState) => {
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
            "/api/doctors/view-category/",
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