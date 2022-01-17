import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import TitleNave from '../Components/TitleNave'
import {DoctorSignupAction} from '../Actions/UserActions'

const Experience = () => {
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
                            onChange={(e) => setDegreeName(e.target.value)}
                            >
                        <option selected>Degree Name</option>
                        {degree.map((dg) => (<option> {dg} </option>))}
                        
                    </select>

                    <label className="form-label"> Select Speciality :</label>
                    <select className="form-select mb-3"
                            aria-label="Default select example"
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
                           onChange={(e) => setInstituteName(e.target.value)}
                    />

                    <label className="form-label"> Country :</label>
                    <input className='form-control mb-2' 
                           type='text' 
                           placeholder='Enter Your Last Name'
                           value={country} 
                           onChange={(e) => setCountry(e.target.value)}
                    />

                    <br />
                    <label className="form-label mb-2"> Passing Year :</label> <br />
                    <input className='form-control mb-3' 
                           type='date'
                           value={passingYear}
                           onChange={(e) => setPassingYear(e.target.value)}
                     />

                    <button className='btn btn-success px-4 py-2 fs-5 fw-bold' type='submit'>Proceed Next</button>
                </form>
            </div>
        </div>
    )
}

export default Experience;