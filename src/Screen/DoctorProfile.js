import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import DoctorNavbar from './DoctorNavbar'
import propic from '../images/propic.jpg'
import { addExperienceAction } from '../Actions/DoctorActions'

const DoctorProfile = () => {

    const [hospitalName, setHospitalName] = useState('')
    const [designation, setDesignation] = useState('')
    const [department, setDepartment] = useState('')
    const [currentlyWorking, setCurrentlyWorking] = useState(false)
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')


    const dispatch = useDispatch()

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


                        <button type="button" class="btn btn-primary position-absolute  end-0 me-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Add Experience
                        </button>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
