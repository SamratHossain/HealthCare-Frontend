import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import TitleNave from '../Components/TitleNave'
import {DoctorSignupAction} from '../Actions/UserActions'

const Done = () => {

        const doctorSignup = useSelector(state => state.doctorSignup)
        const {error, success, loading} = doctorSignup

        if(success){
            localStorage.removeItem('DoctorInfo');
            localStorage.removeItem("Qualification");
            localStorage.removeItem("Experience");
            localStorage.removeItem("Availibility");
            localStorage.removeItem("Consultation");
        }
 
        const history = useHistory()

        const submitHandler = (e) => {
            e.preventDefault()
            localStorage.removeItem("DoctorInfo")
            history.push("/")
        }
    return (
        <div className='container-fluid'>
            {<TitleNave />}
                
            <div className='form mx-auto mt-3 mb-3 border rounded p-3 shadow' style={{width:'500px'}}>
                <div className='text-center'>
                    <h4>You are almost</h4>
                    <h2>Done</h2>
                </div>
                <div className='mt-5 text-danger'>
                    <h5>Your account is under review.
                    Your account will approved in seven days.
                    After approving, you can log into the system</h5>
                </div>

                <div className=''>
                    <button className='btn btn-success px-4 py-1 mt-3 fs-5 fw-bold' onClick={submitHandler}>Finish</button>
                </div>
            </div>
        </div>
    )
}

export default Done;