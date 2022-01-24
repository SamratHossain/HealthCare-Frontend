import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FaPlusCircle, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import propic from '../../images/propic.jpg'
import {
        viewDoctorInfoAction,
        viewPersonalInfoAction } from '../../Actions/DoctorActions'

const DoctorInfo = () => {

    const [title, setTitle] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [gender, setGender] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    
    const viewDoctorInfo = useSelector(state => state.viewDoctorInfo)
    const {doctorInfo} = viewDoctorInfo

    const viewPersonalInfo = useSelector(state => state.viewPersonalInfo)
    const {personalInfo} = viewPersonalInfo

    console.log("personal info: ", personalInfo);
    
    const dispatch = useDispatch()

    const history = useHistory()

    useEffect(() => {
        if(userInfo){
            // dispatch(viewDoctorInfoAction())
            dispatch(viewPersonalInfoAction())
            console.log("Call api");
        }else{
            history.push('/login')
        }
    },[dispatch])

    
    const submitHandler = (e) => {
        e.preventDefault()
        // dispatch(addExperienceAction(hospitalName, designation, department, currentlyWorking, from, to))
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
                        
                                                <div type="button" class="btn btn-white fs-3 text-primary position-absolute  end-0 me-5" data-bs-toggle="modal" data-bs-target="#updatePersonalInfoModal">
                                                    <FaRegEdit />
                                                </div>
                                                <div class="modal fade" id="updatePersonalInfoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">Update Your Personal Info</h5>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                    <form onSubmit={submitHandler}>
                                                        <label className="form-label"> Title :</label>
                                                        <select className="form-select mb-3"
                                                                aria-label="Default select example"
                                                                required
                                                                
                                                                onChange={(e) => setTitle(e.target.value)}
                                                                >
                                                            <option selected></option>
                                                            <option value="Dr.">Dr.</option>
                                                            <option value="Prof. Dr.">Prof. Dr.</option>
                                                            <option value="Assoc. Prof. Dr.">Assoc. Prof. Dr.</option>
                                                            <option value="Asst. Prof. Dr.">Asst. Prof. Dr.</option>
                                                        </select>

                                                        <label className="form-label"> First Name :</label>
                                                        <input className='form-control mb-2'
                                                            type='text' 
                                                            placeholder='Enter Your First Name'
                                                            value={personalInfo.FirstName}
                                                            required
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                            />

                                                        <label className="form-label"> Last Name :</label>
                                                        <input className='form-control mb-2' 
                                                            type='text' 
                                                            placeholder='Enter Your Last Name'
                                                            value={personalInfo.LastName}
                                                            required 
                                                            onChange={(e) => setLastName(e.target.value)}
                                                            />

                
                                                        <label className="form-label"> Email :</label>
                                                        <input className='form-control mb-2'
                                                            type='email' 
                                                            placeholder='Enter Your Email'
                                                            value={personalInfo.email}
                                                            required 
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                
                    {/* {EmailError && (<label className="form-label d-block text-danger">Email Already Exist !</label>)} */}

                                                            <label className="form-label"> Mobile :</label>
                                                            <input className='form-control mb-2'
                                                                type='number' 
                                                                placeholder='Enter Your Mobile Number' 
                                                                value={personalInfo.Mobile}
                                                                required
                                                                onChange={(e) => setMobile(e.target.value)}
                                                                />


                                                            <label className="form-label"> Gender </label> <br/> 
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input"
                                                                name="flexRadioDefault" 
                                                                id="flexRadioDefault1"
                                                                type="radio"   
                                                                value="male"
                                                                required
                                                                onChange={(e) => setGender(e.target.value)}
                                                                />
                                                                <label class="form-check-label" for="inlineRadio1">Male</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input"
                                                                name="flexRadioDefault" 
                                                                id="flexRadioDefault2" 
                                                                type="radio" 
                                                                value="female"
                                                                onChange={(e) => setGender(e.target.value)} 
                                                                />
                        
                                                                <label class="form-check-label" for="inlineRadio2">Female</label>
                                                            </div>
                                                            <div class="form-check form-check-inline mb-2">
                                                                <input class="form-check-input"
                                                                name="flexRadioDefault" 
                                                                id="flexRadioDefault3" 
                                                                type="radio"  
                                                                value="custom"
                                                                onChange={(e) => setGender(e.target.value)} 
                                                                />
                                                                <label class="form-check-label" for="inlineRadio3">Custom</label>
                                                            </div>

                    
                                                            <br />
                                                            <label className="form-label mb-2"> Date of Birth (Applicatns must be over 18) :</label> <br />
                                                            <input className='form-control mb-3' 
                                                                type='date'
                                                                value={personalInfo.DateOfBirth}
                                                                required
                                                                onChange={(e) => setDateOfBirth(e.target.value)}
                                                            />


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
                                        <span className='text-secondary'>Name</span>
                                        <h5 className="mt-1 fw-bold">{personalInfo.FirstName} {doctorInfo.LastName}</h5>
                                    </div>

                                    <div className='mt-3'>
                                        <span className='text-secondary'>Email</span>
                                        <h5 className="mt-1 fw-bold">{personalInfo.email}</h5>
                                    </div>

                                    <div className='mt-3'>
                                        <span className='text-secondary'>Mobile</span>
                                        <h5 className="mt-1 fw-bold">{personalInfo.Mobile}</h5>
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

export default DoctorInfo
