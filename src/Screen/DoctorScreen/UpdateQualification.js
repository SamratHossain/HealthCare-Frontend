import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FaPlusCircle, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

import {  
        viewQualificationAction,
        updateQualificationAction
         } from '../../Actions/DoctorActions'

const UpdateQualification = () => {

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
        <div className='container-fluid'>
            
                <div className='text-center'>
                    <h3>Update Doctor Info</h3>
                </div>
            <div className='form mx-auto mt-3 border rounded p-3 shadow' style={{width:'500px'}}>
            
            <form onSubmit={submitHandler}>
                                                        

                                                        <label className="form-label"> Select Degree :</label>
                                                        <select className="form-select mb-3"
                                                                aria-label="Default select example"
                                                                required
                                                                onChange={(e) => setDegreeName(e.target.value)}
                                                                
                                                                >
                                                            <option selected>{degreeName}</option>
                                                            {degree.map((dg) => (<option> {dg} </option>))}
                                                            
                                                        </select>
    
                                                        <label className="form-label"> Select Speciality :</label>
                                                        <select className="form-select mb-3"
                                                                aria-label="Default select example"
                                                                required
                                                                onChange={(e) => setSpecialist(e.target.value)}
                                                                >
                                                            <option selected>{specialist}</option>
                                                            {speciality.map((sp) => (<option> {sp} </option>))}
                                                            
                                                        </select>
    
                                                            <label className="form-label"> Institute Name: </label>
                                                            <input className="form-control mb-3"
                                                                type="text"
                                                                value={instituteName}
                                                                onChange={(e) => setInstituteName(e.target.value)}
                                                            />
    
                                                            <label className="form-label"> Country: </label>
                                                            <input className="form-control mb-3"
                                                                type="text"
                                                                value={country}
                                                                onChange={(e) => setCountry(e.target.value)}
                                                            />
                                                            <label className="form-label"> Passing Year: </label>
                                                            <input className="form-control mb-3"
                                                                type="date"
                                                                value={passingYear}
                                                                onChange={(e) => setPassingYear(e.target.value)}
                                                            />
    
                                                            
                                                    
                                                <div class="modal-footer">
                                                    <button type="submit" class="btn btn-primary">Save</button>
                                                </div>
                                            </form>  
            </div>
        </div>
    )
}

export default UpdateQualification;
