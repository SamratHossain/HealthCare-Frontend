import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FaPlusCircle, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import DoctorNavbar from './DoctorNavbar'
import propic from '../images/propic.jpg'
import { addExperienceAction, viewExperienceAction } from '../Actions/DoctorActions'

const DoctorProfile = () => {

    const [hospitalName, setHospitalName] = useState('')
    const [designation, setDesignation] = useState('')
    const [department, setDepartment] = useState('')
    const [currentlyWorking, setCurrentlyWorking] = useState(false)
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    console.log("info : ", userInfo);
    const viewExperience = useSelector(state => state.viewExperience)
    const {experiences} = viewExperience
    
    console.log("test: ",experiences)
    var arr = ['samrat', 'hossain', 'cse']
    
    const dispatch = useDispatch()

    const history = useHistory()

    useEffect(() => {
        if(userInfo){
            dispatch(viewExperienceAction())
        }else{
            history.push('/login')
        }
    },[dispatch])

    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addExperienceAction(hospitalName, designation, department, currentlyWorking, from, to))
    }
    
    return (
        <div className="container-fluid h-auto" style={{backgroundColor: "#f0f2f5"}}>
            <DoctorNavbar />
            <div className="row">
                <div className="col-md-8">
                    <div className="ms-5 mt-3 pb-3 bg-white rounded">
                        <img className="ms-5 mt-2 border border-3 rounded-circle" style={{width:"150px", height:"150px"}} src={propic}/>
                        <h4 className="fw-bold ms-5 mt-2">Dr. Samrat Hossain</h4>
                        <p className="fw-bold ms-5">MBBS</p>
                        <p className="ms-5 mb-2 text-danger">Neurology, Internal Medicine</p>
                        <h4 className="ms-5 mb-3 fw-bold">Dhaka Medical College</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="bg-white mt-3 py-3 ms-5 rounded position-relative">
                        <h2 className="fw-bold d-inline ms-5" >Experience</h2>


                        <button type="button" class="btn btn-primary position-absolute  end-0 me-5" data-bs-toggle="modal" data-bs-target="#addExperienceModal">
                            <FaPlusCircle /> Add Experience
                        </button>

                        
                            { experiences.map(experience => (
                                <div>
                                    <div class="card mx-5 my-3">
                                        <div class="card-body">
                                                
                                    <div className='mt-3 row'>
                                        <div className='col-8'>
                                            <span className='text-secondary'>Hospital Name</span>
                                            <h2 className='fw-bold'>{experience.HospitalName}</h2>
                                        </div>
                                        <div className='col-4 d-flex justify-content-end'>
                                            <div className=''>
                        
                                                <div type="button" class="btn btn-white fs-3 text-primary position-absolute  end-0 me-5" data-bs-toggle="modal" data-bs-target="#updateExperienceModal">
                                                    <FaRegEdit />
                                                </div>
                                                <div class="modal fade" id="updateExperienceModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">Update Your Experience</h5>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                    <form onSubmit={submitHandler}>
                                                        <label className="form-label"> Hospital Name: </label>
                                                        <input className="form-control mb-2"
                                                            type="text"
                                                            value={experience.HospitalName}
                                                            onChange={(e) => setHospitalName(e.target.value)}
                                                        />
                                                        <label className="form-label"> Designation: </label>
                                                        <input className="form-control mb-2"
                                                            type="text"
                                                            value={experience.Designation}
                                                            onChange={(e) => setDesignation(e.target.value)} 
                                                        />
                                                        <label className="form-label"> Department: </label>
                                                        <input className="form-control mb-3"
                                                            type="text"
                                                            value={experience.Department}
                                                            onChange={(e) => setDepartment(e.target.value)}
                                                        />

                                                        <label className="form-label mb-2 fw-bold"> Employment Period </label>
                                                        <div class="form-check">
                                                            <input class="form-check-input"
                                                                type="checkbox"
                                                                value={true}
                                                                id="flexCheckDefault"
                                                                
                                                                onChange={(e) => setCurrentlyWorking(e.target.value)}
                                                        />
                                                       
                                                        <label class="form-check-label mb-3" for="flexCheckDefault">
                                                            Currently Working
                                                        </label>
                                                </div>
                                                <div className="row">
                                                <div className="col-6">
                                                    <label className="form-label mb-2"> From: </label>
                                                    <input className="form-control"
                                                           style={{width:"200px"}}
                                                           type="date"
                                                           value={experience.From}
                                                           onChange={(e) => setFrom(e.target.value)}
                                                      />
                                                </div>
                                                {!currentlyWorking && (
                                                <div className="col-6">
                                                    <label className="form-label mb-2"> To: </label>
                                                    <input className="form-control"
                                                           style={{width:"200px"}} 
                                                           type="date"
                                                           value={experience.To}
                                                           onChange={(e) => setTo(e.target.value)}
                                                           />
                                                </div>)
                                                }
                                            </div>
                                            <div class="modal-footer">
                                                <button type="submit" class="btn btn-primary">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    
                                            </div>
                                            <div className='btn btn-white fs-3 text-danger'>
                                                <FaRegTrashAlt />
                                            </div>
                                        </div>
                                    </div>
                

                                    <div className='mt-3'>
                                        <span className='text-secondary'>Designation</span>
                                        <h4 className="mt-1 fw-bold">{experience.Designation}</h4>
                                    </div>

                                    <div className='mt-3'>
                                        <span className='text-secondary'>Department</span>
                                        <h4 className="mt-1 fw-bold">{experience.Department}</h4>
                                    </div>

                                    
                                    
                                    <div className='row'>
                                        <div className='col-4'>
                                            <span className='text-secondary'>From</span>
                                            <h4 className='mt-1 fw-bold'>{experience.From}</h4>
                                        </div>
                                        
                                        {experience.To && (
                                            <div className='col-4'>
                                                <span className='text-secondary'>To</span>
                                                <h4 className='mt-1 fw-bold'>{experience.To}</h4>
                                            </div>
                                        )}

                                        {experience.CurrentlyWorking ? (
                                            <div className='mt-3'>
                                                <span className='text-secondary'>Working Period</span>
                                                <h5 className="mt-1 fw-bold">Currently Working</h5>
                                            </div>
                                        ): (
                                            <div className='mt-3'>
                                                <span className='text-secondary'>Working Period</span>
                                                <h4 className="mt-1 fw-bold">{experience.EmploymentPeriod}</h4>
                                            </div>
                                        )}
                                    </div>
                                    
                                    
                                    
                                        </div>
                                    </div>
                                </div>
                            )

                            )}
                            
                        
                        {/* Add Experience Modal  */}
                        <div class="modal fade" id="addExperienceModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Add Your Experience</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form onSubmit={submitHandler}>
                                            <label className="form-label"> Hospital Name: </label>
                                            <input className="form-control mb-2"
                                                   type="text"
                                                   value={hospitalName}
                                                   onChange={(e) => setHospitalName(e.target.value)}
                                                   />
                                            <label className="form-label"> Designation: </label>
                                            <input className="form-control mb-2"
                                                   type="text"
                                                   value={designation}
                                                   onChange={(e) => setDesignation(e.target.value)} 
                                                   />
                                            <label className="form-label"> Department: </label>
                                            <input className="form-control mb-3"
                                                   type="text"
                                                   value={department}
                                                   onChange={(e) => setDepartment(e.target.value)}
                                            />

                                            <label className="form-label mb-2 fw-bold"> Employment Period </label>
                                            <div class="form-check">
                                                <input class="form-check-input"
                                                       type="checkbox"
                                                       value={true}
                                                       id="flexCheckDefault"
                                                       onChange={(e) => setCurrentlyWorking(e.target.value)}
                                                />
                                                       
                                                <label class="form-check-label mb-3" for="flexCheckDefault">
                                                    Currently Working
                                                </label>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <label className="form-label mb-2"> From: </label>
                                                    <input className="form-control"
                                                           style={{width:"200px"}}
                                                           type="date"
                                                           value={from}
                                                           onChange={(e) => setFrom(e.target.value)}
                                                      />
                                                </div>
                                                {!currentlyWorking && (
                                                <div className="col-6">
                                                    <label className="form-label mb-2"> To: </label>
                                                    <input className="form-control"
                                                           style={{width:"200px"}} 
                                                           type="date"
                                                           value={to}
                                                           onChange={(e) => setTo(e.target.value)}
                                                           />
                                                </div>)
                                                }
                                            </div>
                                            <div class="modal-footer">
                                                <button type="submit" class="btn btn-primary">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="bg-white mt-3 mb-5 ms-5 rounded">
                    <h2>Education</h2>
                    

                </div>
            </div>
            
        </div>
    )
}

export default DoctorProfile
