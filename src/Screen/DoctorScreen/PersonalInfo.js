import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FaPlusCircle, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import propic from '../../images/propic.jpg'
import {
        viewDoctorInfoAction,
        viewPersonalInfoAction,
        updatePersonalInfoAction } from '../../Actions/DoctorActions'

const PersonalInfo = () => {

    const viewPersonalInfo = useSelector(state => state.viewPersonalInfo)
    const {personalInfo} = viewPersonalInfo

    console.log("update: ",personalInfo.FirstName);
    const [title, setTitle] = useState(personalInfo.Title);
    const [firstName, setFirstName] = useState(personalInfo.FirstName);
    const [lastName, setLastName] = useState(personalInfo.LastName);
    const [email, setEmail] = useState(personalInfo.email);
    const [mobile, setMobile] = useState(personalInfo.Mobile);
    const [gender, setGender] = useState(personalInfo.Gender);
    const [dateOfBirth, setDateOfBirth] = useState(personalInfo.DateOfBirth);
    const id = personalInfo.id



    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    
    const dispatch = useDispatch()

    const history = useHistory()

    useEffect(() => {
        if(userInfo){
            dispatch(viewPersonalInfoAction())
        }else{
            history.push('/login')
        }
    },[dispatch])

    // var name = "messi"
    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updatePersonalInfoAction(id ,title, firstName, lastName, email, mobile, gender, dateOfBirth))
    }

    const updateHandler = () => {
        history.push('/doctor/profile/update-personal-info')
    }
    
    return (
        <div className="container-fluid h-auto" style={{backgroundColor: "#f0f2f5"}}>
            <div className="row">
                <div className="col-md-12">
                    <div className="bg-white mt-3 py-3 rounded position-relative">
                        <h4 className="fw-bold d-inline ms-5" >Personal Information</h4>
                            
                                <div>
                                    <div class="card mx-5 my-3">
                                        <div class="card-body">
                                                
                                    <div className='mt-3 row'>
                                            <div className='text-center'>
                                                <img style={{width: 100, height: 100}} className='rounded-circle' src={propic}/>
                                                <p>Change Pic</p>
                                            </div>
                                        <div className='col-8'>
                                            
                                            <span className='text-secondary'>Title</span>
                                            <h5 className='fw-bold'>{personalInfo.Title}</h5>
                                        </div>
                                        <div className='col-4 d-flex justify-content-end'>
                                            <div className=''>
                        
                                                <div type="button" onClick={updateHandler} class="btn btn-white fs-3 text-primary position-absolute  end-0 me-5">
                                                    <FaRegEdit />
                                                </div>
                        
                    
                                            </div>
                                            
                                        </div>
                                    </div>
                

                                    <div className='mt-3'>
                                        <span className='text-secondary'>Name</span>
                                        <h5 className="mt-1 fw-bold">{personalInfo.FirstName} {personalInfo.LastName}</h5>
                                    </div>

                                    <div className='mt-3'>
                                        <span className='text-secondary'>Email</span>
                                        <h5 className="mt-1 fw-bold">{personalInfo.email}</h5>
                                    </div>

                                    <div className='mt-3'>
                                        <span className='text-secondary'>Mobile</span>
                                        <h5 className="mt-1 fw-bold">+880 {personalInfo.Mobile}</h5>
                                    </div>
                                    <div className='mt-3'>
                                        <span className='text-secondary'>Gender</span>
                                        <h5 className="mt-1 fw-bold">{personalInfo.Gender}</h5>
                                    </div>
                                    <div className='mt-3'>
                                        <span className='text-secondary'>DateOfBirth</span>
                                        <h5 className="mt-1 fw-bold">{personalInfo.DateOfBirth}</h5>
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

export default PersonalInfo
