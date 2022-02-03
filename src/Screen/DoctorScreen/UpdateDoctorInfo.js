import React from 'react';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FaPlusCircle, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import propic from '../../images/propic.jpg'
import {
        viewDoctorInfoAction,
        updateDoctorInfoAction,
         } from '../../Actions/DoctorActions'

const UpdateDoctorInfo = () => {

    const viewDoctorInfo = useSelector(state => state.viewDoctorInfo)
    const {doctorInfo} = viewDoctorInfo

    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [availableDay, setAvailableDay] = useState(doctorInfo.AvailableDay)
    const [consultationFee, setConsultationFee] = useState(doctorInfo.ConsultationFee)
    const [followUpDuration, setFollowupDuration] = useState(doctorInfo.WithinDuration)
    const [consultDuration, setConsultDuration] = useState(doctorInfo.ConsultancyDuration)
    const [followupFee, setFollowupFee] = useState(doctorInfo.FollowUpFee)
    const [followup, setFollowup] = useState(false)
    

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const id = doctorInfo.id

    
    const dispatch = useDispatch()

    const history = useHistory()

    useEffect(() => {
        if(userInfo){
            dispatch(viewDoctorInfoAction())                                
        }else{
            history.push('/login')
        }
    },[dispatch])

    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateDoctorInfoAction(id, startTime, endTime, availableDay, consultationFee, followUpDuration, consultDuration, followupFee))
    }

    const followupDurations = [
        '1 week',
        '2 week',
        '1 month',
        '2 month',
        '3 month',
        '4 month',
        '5 month',
        '6 month',
        '7 month',
        '8 month'
    ]

    const consultationDuration = [
        '10 minutes',
        '15 minutes',
        '20 minutes',
        '25 minutes',
        '30 minutes',
        '40 minutes',
        '45 minutes',
        '50 minutes',
        '55 minutes'
    ]

    return (
        <div className='container-fluid'>
            
                <div className='text-center'>
                    <h3>Update Doctor Info</h3>
                </div>
            <div className='form mx-auto mt-3 border rounded p-3 shadow' style={{width:'500px'}}>
            <form onSubmit={submitHandler}>
                                        

                                        <div className='row'>
                                            <div className='col-6'>
                                                <h4>Start</h4>
                                                <input className="form-control m-2" 
                                                type='time'
                                                
                                                
                                                onChange={(e) => setStartTime(e.target.value)}
                                                />
                    
                                            </div>
                                            <div className='col-6'>
                                                <h4>End</h4>
                                                <input className="form-control m-2" 
                                                type='time'
                                                
                                                onChange={(e) => setEndTime(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                            <label className="form-label"> AvailableDay :</label>
                                            <input className='form-control mb-2' 
                                                type='text' 
                                                placeholder='Enter Available Days'
                                                required
                                                value={availableDay} 
                                                onChange={(e) => setAvailableDay(e.target.value)}
                                                />

    
                                            <label className="form-label"> Consultation Fee :</label>
                                            <input className='form-control mb-2'
                                                type='text' 
                                                placeholder='Enter Consultation Fee'
                                                required
                                                value={consultationFee} 
                                                onChange={(e) => setConsultationFee(e.target.value)}
                                            />
                                            <label className="form-label"> FollowUp Fee :</label>
                                            <input className='form-control mb-2'
                                                type='text' 
                                                placeholder='Enter Followup Fee'
                                                required
                                                value={followupFee} 
                                                onChange={(e) => setFollowupFee(e.target.value)}
                                            />

                                                <select className="form-select mb-3"
                                                    aria-label="Default select example"
                                                    required
                                                    onChange={(e) => setFollowupDuration(e.target.value)}
                                                    >
                                                    <option selected>{followUpDuration}</option>
                                                    {followupDurations.map((fd) => (<option> {fd} </option>))}
                                                
                                                </select>
    
        {/* {EmailError && (<label className="form-label d-block text-danger">Email Already Exist !</label>)} */}

                                                <select className="form-select mb-3"
                                                        aria-label="Default select example"
                                                        required
                                                        onChange={(e) => setConsultDuration(e.target.value)}
                                                        >
                                                        <option selected>{consultDuration}</option>
                                                        {consultationDuration.map((fd) => (<option> {fd} </option>))}     
                                                </select>


                    


                                                <button className='btn btn-success px-4 py-2 fs-5 fw-bold' type='submit'>Update</button>
        
    </form>
                
            </div>
        </div>
    )
}

export default UpdateDoctorInfo;


