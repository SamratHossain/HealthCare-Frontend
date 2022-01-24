import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FaPlusCircle, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

import {  
        viewQualificationAction,
         } from '../../Actions/DoctorActions'

const Qualification = () => {

    const [specialist, setSpecialist] = useState('')
    const [degreeName, setDegreeName] = useState('')
    const [instituteName, setInstituteName] = useState('')
    const [country, setCountry] = useState(false)
    const [passingYear, setPassingYear] = useState('')
    

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    
    const viewQualification = useSelector(state => state.viewQualification)
    const {qualifications} = viewQualification

    const dispatch = useDispatch()

    const history = useHistory()

    useEffect(() => {
        if(userInfo){
            dispatch(viewQualificationAction())
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
                        <h2 className="fw-bold d-inline ms-5" >Qualification</h2>

                        
                            { qualifications.map(qualification => (
                                <div>
                                    <div class="card mx-5 my-3">
                                        <div class="card-body">
                                                
                                    <div className='mt-3 row'>
                                        <div className='col-8'>
                                            <span className='text-secondary'>Speciality</span>
                                            <h3 className='fw-bold'>{qualification.Specialist}</h3>
                                        </div>
                                        <div className='col-4 d-flex justify-content-end'>
                                            <div className=''>
                        
                                                <div type="button" class="btn btn-white fs-3 text-primary position-absolute  end-0 me-5" data-bs-toggle="modal" data-bs-target="#updateQualificationModal">
                                                    <FaRegEdit />
                                                </div>
                                                <div class="modal fade" id="updateQualificationModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">Update Your Qualification</h5>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                    <form onSubmit={submitHandler}>
                                                        <label className="form-label"> Speciality: </label>
                                                        <input className="form-control mb-2"
                                                            type="text"
                                                            value={qualification.Specialist}
                                                            onChange={(e) => setSpecialist(e.target.value)}
                                                        />

                                                        <label className="form-label"> Degree Name: </label>
                                                        <input className="form-control mb-2"
                                                            type="text"
                                                            value={qualification.DegreeName}
                                                            onChange={(e) => setDegreeName(e.target.value)} 
                                                        />

                                                        <label className="form-label"> Institute Name: </label>
                                                        <input className="form-control mb-3"
                                                            type="text"
                                                            value={qualification.InstituteName}
                                                            onChange={(e) => setInstituteName(e.target.value)}
                                                        />

                                                        <label className="form-label"> Country: </label>
                                                        <input className="form-control mb-3"
                                                            type="text"
                                                            value={qualification.Country}
                                                            onChange={(e) => setCountry(e.target.value)}
                                                        />
                                                        <label className="form-label"> Passing Year: </label>
                                                        <input className="form-control mb-3"
                                                            type="text"
                                                            value={qualification.PassingYear}
                                                            onChange={(e) => setPassingYear(e.target.value)}
                                                        />

                                                        
                                                
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
                

                                    <div className='mt-3'>
                                        <span className='text-secondary'>Degree Name</span>
                                        <h4 className="mt-1 fw-bold">{qualification.DegreeName}</h4>
                                    </div>

                                    <div className='mt-3'>
                                        <span className='text-secondary'>Institute Name</span>
                                        <h4 className="mt-1 fw-bold">{qualification.InstituteName}</h4>
                                    </div>

                                    <div className='mt-3'>
                                        <span className='text-secondary'>Country</span>
                                        <h4 className="mt-1 fw-bold">{qualification.Country}</h4>
                                    </div>
                                    <div className='mt-3'>
                                        <span className='text-secondary'>Passing Year</span>
                                        <h4 className="mt-1 fw-bold">{qualification.PassingYear}</h4>
                                    </div>
                                    
                                        </div>
                                    </div>
                                </div>
                            )

                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Qualification
