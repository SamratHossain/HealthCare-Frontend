import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import TitleNave from '../Components/TitleNave'
import {DoctorSignupAction} from '../Actions/UserActions'

const Experience = () => {
    const [hospitalName, setHospitalName] = useState('')
    const [designation, setDesignation] = useState('')
    const [department, setDepartment] = useState('')
    const [currentlyWorking, setCurrentlyWorking] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    
    const experience = {
        "HospitalName" : hospitalName,
        "Designation" : designation,
        "Department" : department,
        "From" : from,
        "To" : to
    }

    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        localStorage.setItem("Experience" , JSON.stringify(experience))    
        history.push("/doctor/signup/availability")
    }

    return (
        <div className='container-fluid'>
            {<TitleNave />}
                <div className='text-center'>
                    <h3>Add Your Experience</h3>
                </div>
            <div className='form mx-auto mt-3 mb-3 border rounded p-3 shadow' style={{width:'500px'}}>
                
                <form onSubmit={submitHandler}>

                    <label className="form-label"> Institute Name :</label>
                    <input className='form-control mb-2'
                           type='text' 
                           
                           value={hospitalName}
                           required
                           onChange={(e) => setHospitalName(e.target.value)}
                    />

                    <label className="form-label"> Designation :</label>
                    <input className='form-control mb-2' 
                           type='text'        
                           value={designation}
                           required 
                           onChange={(e) => setDesignation(e.target.value)}
                    />
                    
                    <label className="form-label"> Department :</label>
                    <input className='form-control mb-2' 
                           type='text'   
                           value={department}
                           required 
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
                                            <div className="row mb-3">
                                                <div className="col-6">
                                                    <label className="form-label mb-2"> From: </label>
                                                    <input className="form-control"
                                                           style={{width:"200px"}}
                                                           type="date"
                                                           value={from}
                                                           required
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
                                                           required
                                                           onChange={(e) => setTo(e.target.value)}
                                                           />
                                                </div>)
                                                }
                                            </div>

                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-success px-4 py-2 fs-5 fw-bold' onClick={()=> history.goBack()}>Back</button>
                        <button className='btn btn-success px-4 py-2 fs-5 fw-bold' type='submit'>Proceed Next</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Experience;