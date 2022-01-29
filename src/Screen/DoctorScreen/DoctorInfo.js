import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FaPlusCircle, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import propic from '../../images/propic.jpg'
import {
        viewDoctorInfoAction,
        updateDoctorInfoAction,
         } from '../../Actions/DoctorActions'

const DoctorInfo = () => {

    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState()
    const [availableDay, setAvailableDay] = useState()
    const [consultationFee, setConsultationFee] = useState('')
    const [followUpDuration, setFollowupDuration] = useState('')
    const [consultDuration, setConsultDuration] = useState('')
    const [followupFee, setFollowupFee] = useState('')
    const [followup, setFollowup] = useState(false)
    

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    
    const viewDoctorInfo = useSelector(state => state.viewDoctorInfo)
    const {doctorInfo} = viewDoctorInfo

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
        <div className="container-fluid h-auto" style={{backgroundColor: "#f0f2f5"}}>
            <div className="row">
                <div className="col-md-12">
                    <div className="bg-white mt-3 py-3 rounded position-relative">
                        <h4 className="fw-bold d-inline ms-5" >Doctor Information</h4>
                            
                                <div>
                                    <div class="card mx-5 my-3">
                                        <div class="card-body">
                                                
                                    <div className='mt-3 row'>
                                            
                                        <div className='col-8'>
                                            
                                            <span className='text-secondary'>AvailableTime</span>
                                            <h5 className='fw-bold'>{doctorInfo.AvailableTime}</h5>
                                        </div>
                                        <div className='col-4 d-flex justify-content-end'>
                                            <div className=''>
                        
                                                <div type="button" class="btn btn-white fs-3 text-primary position-absolute  end-0 me-5" data-bs-toggle="modal" data-bs-target="#updateDoctorInfoModal">
                                                    <FaRegEdit />
                                                </div>
                                                <div class="modal fade" id="updateDoctorInfoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">Update Your Doctor Info</h5>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                    <form onSubmit={submitHandler}>
                                        

                                                    <div className='row'>
                                                        <div className='col-6'>
                                                            <h4>Start</h4>
                                                            <input className="form-control m-2" 
                                                            type='time'
                                                            required
                                                            onChange={(e) => setStartTime(e.target.value)}
                                                            />
                                
                                                        </div>
                                                        <div className='col-6'>
                                                            <h4>End</h4>
                                                            <input className="form-control m-2" 
                                                            type='time'
                                                            required
                                                            onChange={(e) => setEndTime(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                        <label className="form-label"> AvailableDay :</label>
                                                        <input className='form-control mb-2' 
                                                            type='text' 
                                                            placeholder='Enter Available Days'
                                                            required 
                                                            onChange={(e) => setAvailableDay(e.target.value)}
                                                            />

                
                                                        <label className="form-label"> Consultation Fee :</label>
                                                        <input className='form-control mb-2'
                                                            type='text' 
                                                            placeholder='Enter Consultation Fee'
                                                            required 
                                                            onChange={(e) => setConsultationFee(e.target.value)}
                                                        />
                                                        <label className="form-label"> FollowUp Fee :</label>
                                                        <input className='form-control mb-2'
                                                            type='text' 
                                                            placeholder='Enter Followup Fee'
                                                            required 
                                                            onChange={(e) => setFollowupFee(e.target.value)}
                                                        />

                                                            <select className="form-select mb-3"
                                                                aria-label="Default select example"
                                                                required
                                                                onChange={(e) => setFollowupDuration(e.target.value)}
                                                                >
                                                                <option selected>follow up consultation within this duration</option>
                                                                {followupDurations.map((fd) => (<option> {fd} </option>))}
                                                            
                                                            </select>
                
                    {/* {EmailError && (<label className="form-label d-block text-danger">Email Already Exist !</label>)} */}

                                                            <select className="form-select mb-3"
                                                                    aria-label="Default select example"
                                                                    required
                                                                    onChange={(e) => setConsultDuration(e.target.value)}
                                                                    >
                                                                    <option selected>Select duration in minutes</option>
                                                                    {consultationDuration.map((fd) => (<option> {fd} </option>))}     
                                                            </select>


                                


                                                            <button className='btn btn-success px-4 py-2 fs-5 fw-bold' type='submit'>Save</button>
                    
                </form>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    
                                            </div>
                                            
                                        </div>
                                    </div>
                

                                    <div className='mt-3'>
                                        <span className='text-secondary'>AvailableDay</span>
                                        <h5 className="mt-1 fw-bold">{doctorInfo.AvailableDay}</h5>
                                    </div>

                                    <div className='mt-3'>
                                        <span className='text-secondary'>ConsultationFee</span>
                                        <h5 className="mt-1 fw-bold">{doctorInfo.ConsultationFee}</h5>
                                    </div>

                                    <div className='mt-3'>
                                        <span className='text-secondary'>FollowUpFee</span>
                                        <h5 className="mt-1 fw-bold">{doctorInfo.FollowUpFee}</h5>
                                    </div>
                                    <div className='mt-3'>
                                        <span className='text-secondary'>WithinDuration</span>
                                        <h5 className="mt-1 fw-bold">{doctorInfo.WithinDuration}</h5>
                                    </div>
                                    <div className='mt-3'>
                                        <span className='text-secondary'>ConsultancyDuration(Average)</span>
                                        <h5 className="mt-1 fw-bold">{doctorInfo.ConsultancyDuration}</h5>
                                    </div>
                                    
                                        </div>
                                    </div>
                                </div>
                            

                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorInfo
