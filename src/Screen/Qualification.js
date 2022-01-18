import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import TitleNave from '../Components/TitleNave'
import {DoctorSignupAction} from '../Actions/UserActions'

const Qualification = () => {
    const [degreeName, setDegreeName] = useState('')
    const [speciality, setSpeciality] = useState('')
    const [instituteName, setInstituteName] = useState('')
    const [country, setCountry] = useState('')
    const [passingYear, setPassingYear] = useState('')
    
    const qualification = {
        "DegreeName" : degreeName,
        "Speciality" : speciality,
        "InstituteName" : instituteName,
        "Country" : country,
        "PassingYear" : passingYear
    }

    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        localStorage.setItem("Qualification" , JSON.stringify(qualification))    
        history.push("/doctor/signup/experience")
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
    
    const specialist = [
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
            {<TitleNave />}
                <div className='text-center'>
                    <h3>Add Your Qualification</h3>
                </div>
            <div className='form mx-auto mt-3 mb-3 border rounded p-3 shadow' style={{width:'500px'}}>
                
                <form onSubmit={submitHandler}>
                    <label className="form-label"> Select Degree :</label>
                    <select className="form-select mb-3"
                            aria-label="Default select example"
                            required
                            onChange={(e) => setDegreeName(e.target.value)}
                            
                            >
                        <option selected>Degree Name</option>
                        {degree.map((dg) => (<option> {dg} </option>))}
                        
                    </select>

                    <label className="form-label"> Select Speciality :</label>
                    <select className="form-select mb-3"
                            aria-label="Default select example"
                            required
                            onChange={(e) => setSpeciality(e.target.value)}
                            >
                        <option selected>Speciality</option>
                        {specialist.map((sp) => (<option> {sp} </option>))}
                        
                    </select>

                    <label className="form-label"> Institute Name :</label>
                    <input className='form-control mb-2'
                           type='text' 
                           placeholder='Enter Your First Name'
                           value={instituteName}
                           required
                           onChange={(e) => setInstituteName(e.target.value)}
                    />

                    <label className="form-label"> Country :</label>
                    <input className='form-control mb-2' 
                           type='text' 
                           placeholder='Enter Your Last Name'
                           value={country}
                           required 
                           onChange={(e) => setCountry(e.target.value)}
                    />

                    <br />
                    <label className="form-label mb-2"> Passing Year :</label> <br />
                    <input className='form-control mb-3' 
                           type='date'
                           value={passingYear}
                           required
                           onChange={(e) => setPassingYear(e.target.value)}
                     />

                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-success px-4 py-2 fs-5 fw-bold' onClick={()=> history.goBack()}>Back</button>
                        <button className='btn btn-success px-4 py-2 fs-5 fw-bold' type='submit'>Proceed Next</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Qualification;