import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FaPlusCircle, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { addExperienceAction, 
         viewExperienceAction,
         updateExperienceAction 
         } from '../../Actions/DoctorActions'

const Experience = () => {

    const [hospitalName, setHospitalName] = useState('')
    const [designation, setDesignation] = useState('')
    const [department, setDepartment] = useState('')
    const [currentlyWorking, setCurrentlyWorking] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    console.log(hospitalName);
    console.log(designation);
    console.log(department);
    console.log(from);
    console.log(to);

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    
    const viewExperience = useSelector(state => state.viewExperience)
    const {experiences} = viewExperience
    
    
    const dispatch = useDispatch()

    const history = useHistory()

    useEffect(() => {
        if(userInfo){
            dispatch(viewExperienceAction())
        }else{
            history.push('/login')
        }
    },[dispatch])

    
    const addSubmitHandler = (e) => {
        e.preventDefault()
        console.log("I amm Add Click");
        dispatch(addExperienceAction(hospitalName, designation, department, currentlyWorking, from, to))
    }

    const updateSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(updateExperienceAction(hospitalName, designation, department, currentlyWorking, from, to))
    }
    
    return (
        <div className="container-fluid h-auto" style={{backgroundColor: "#f0f2f5"}}>
            <div className="row">
                <div className="col-md-12">
                    <div className="bg-white mt-3 py-3 rounded position-relative">
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
                                            <h4 className='fw-bold'>{experience.HospitalName}</h4>
                                        </div>
                                        <div className='col-4 d-flex justify-content-end'>
                                            <div className=''>
                        
                                                <div type="button" class="btn btn-white fs-3 text-primary position-absolute  end-0 me-5" data-bs-toggle="modal" data-bs-target="#updateExperienceModal">
                                                    <FaRegEdit /> {experience.id}
                                                </div>
                                                <div class="modal fade" id="updateExperienceModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">Update Your Experience</h5>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                    <form onSubmit={updateSubmitHandler}>
                                                        <label className="form-label"> Hospital Name: </label>
                                                        <input className="form-control mb-2"
                                                            type="text"
                                                            // value={experience.HospitalName}
                                                            onChange={(e) => setHospitalName(e.target.value)}
                                                        />
                                                        <label className="form-label"> Designation: </label>
                                                        <input className="form-control mb-2"
                                                            type="text"
                                                            
                                                            onChange={(e) => setDesignation(e.target.value)} 
                                                        />
                                                        <label className="form-label"> Department: </label>
                                                        <input className="form-control mb-3"
                                                            type="text"
                                                            
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
                                                           
                                                           onChange={(e) => setFrom(e.target.value)}
                                                      />
                                                </div>
                                                {!currentlyWorking && (
                                                <div className="col-6">
                                                    <label className="form-label mb-2"> To: </label>
                                                    <input className="form-control"
                                                           style={{width:"200px"}} 
                                                           type="date"
                                                           
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
                                        <form onSubmit={addSubmitHandler}>
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
                                                <button type="submit" class="btn btn-primary">Submit</button>
                                            </div>
                                        </form>
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

export default Experience
