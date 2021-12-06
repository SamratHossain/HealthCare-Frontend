import axios from 'axios'
import {ADD_EXPRIENCE_REQUEST,
        ADD_EXPRIENCE_SUCCESS,
        ADD_EXPRIENCE_FAILED 
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