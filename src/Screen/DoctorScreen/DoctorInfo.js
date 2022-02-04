import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FaPlusCircle, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import {
        viewDoctorInfoAction,
        updateDoctorInfoAction,
         } from '../../Actions/DoctorActions'

const DoctorInfo = () => {

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

    const updateHandler = () => {
        history.push('/doctor/profile/update-doctor-info')
    }

    
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
                        
                                                <div type="button" onClick={updateHandler} class="btn btn-white fs-3 text-primary position-absolute  end-0 me-5">
                                                    <FaRegEdit />
                                                </div>
                                                <div class="modal fade" id="updateDoctorInfoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">Update Your Doctor Info</h5>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
