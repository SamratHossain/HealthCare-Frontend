import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FaPlusCircle, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

import {  
        viewQualificationAction,
        updateQualificationAction
         } from '../../Actions/DoctorActions'

const Qualification = () => {

    const viewQualification = useSelector(state => state.viewQualification)
    const {qualification} = viewQualification
    console.log("dg: ", qualification.DegreeName);

    const [specialist, setSpecialist] = useState(qualification.Specialist)
    const [degreeName, setDegreeName] = useState(qualification.DegreeName)
    const [instituteName, setInstituteName] = useState(qualification.InstituteName)
    const [country, setCountry] = useState(qualification.Country)
    const [passingYear, setPassingYear] = useState(qualification.PassingYear)
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    
    

    const id = qualification.id
    console.log("dg: ", qualification.DegreeName);

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
        dispatch(updateQualificationAction(id, specialist, degreeName, instituteName, country, passingYear))
    }

    const updateHandler = () => {
        history.push('/doctor/profile/update-qualification')
    }

    const degree = [
        'MBBS',
        'BDS',
        'BMBS',
        'MBChB',
        'MD',
        'Dr.MuD',
        'Dr.Med',
        'MCM',
        'MMSc',
        'MMedSc',
        'MM,',
        'MMed',
        'MPhil',
        'MCh',
        'ChM',
        'DCM',
        'MSc',
        'DMSc',
        'DS',
        'DA',
        'DLO',
        'DEM',
        'DCH',
        'DTCT',
        'MRCP'
    ]
    

    const speciality = [
        'General Physician',
        'Internal Medicine',
        'Pediatrics',
        'Dentistry',
        'Gynaecology',
        'Dermatology',
        'Cardiology',
        'ENT',
        'Ophthalmology',
        'Pulmonology',
        'Gastroenterology',
        'Neurology',
        'Neurology',
        'Obsterics',
        'Orthopedics',
        'Endocrinology',
        'Urology',
        'Neurosurgery',
        'Nephrology',
        'Oncology',
        'Psychiatry',
        'Parasitology',
        'Plastic Surgery',
        'Podiatry',
        'Vascular Surgery',
        'Chiropractic',
        'Colorectal Surgery',
        'Herbal Medicine',
        'Occupational Therapy'

    ]
    
    return (
        <div className="container-fluid h-auto" style={{backgroundColor: "#f0f2f5"}}>
            <div className="row">
                <div className="col-md-12">
                    <div className="bg-white mt-3 py-3 rounded position-relative">
                        <h2 className="fw-bold d-inline ms-5" >Qualification</h2>

                        
                            { 
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
                        
                                                <div type="button" onClick={updateHandler} class="btn btn-white fs-3 text-primary position-absolute  end-0 me-5">
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
                            

                            }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Qualification
