import React from 'react';
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    updatePersonalInfoAction } from '../../Actions/DoctorActions'


const UpdatePersonalInfo = () => {

    const viewPersonalInfo = useSelector(state => state.viewPersonalInfo)
    const {personalInfo} = viewPersonalInfo

    const [title, setTitle] = useState(personalInfo.Title);
    const [firstName, setFirstName] = useState(personalInfo.FirstName);
    const [lastName, setLastName] = useState(personalInfo.LastName);
    const [email, setEmail] = useState(personalInfo.email);
    const [mobile, setMobile] = useState(personalInfo.Mobile);
    const [gender, setGender] = useState(personalInfo.Gender);
    const [dateOfBirth, setDateOfBirth] = useState(personalInfo.DateOfBirth);
    const id = personalInfo.id

    const dispatch = useDispatch()

    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updatePersonalInfoAction(id ,title, firstName, lastName, email, mobile, gender, dateOfBirth))
        history.push('/doctor/profile')
    }

    return (
        <div className='container-fluid'>
            
                <div className='text-center'>
                    <h3>Update Personal Info</h3>
                </div>
            <div className='form mx-auto mt-3 border rounded p-3 shadow' style={{width:'500px'}}>
                
                <form onSubmit={submitHandler}>
                    <label className="form-label"> Title :</label>
                    <select className="form-select mb-3"
                            aria-label="Default select example"
                            required
                            onChange={(e) => setTitle(e.target.value)}
                            >
                        <option selected>{title}</option>
                        <option value="Dr.">Dr.</option>
                        <option value="Prof. Dr.">Prof. Dr.</option>
                        <option value="Assoc. Prof. Dr.">Assoc. Prof. Dr.</option>
                        <option value="Asst. Prof. Dr.">Asst. Prof. Dr.</option>
                    </select>

                    <label className="form-label"> First Name :</label>
                    <input className='form-control mb-2'
                           type='text' 
                           placeholder='Enter Your First Name'
                           value={firstName}
                           required
                           onChange={(e) => setFirstName(e.target.value)}
                    />

                    <label className="form-label"> Last Name :</label>
                    <input className='form-control mb-2' 
                           type='text' 
                           placeholder='Enter Your Last Name'
                           value={lastName}
                           required 
                           onChange={(e) => setLastName(e.target.value)}
                    />

                
                    <label className="form-label"> Email :</label>
                    <input className='form-control mb-2'
                           type='email' 
                           placeholder='Enter Your Email'
                           value={email}
                           required 
                           onChange={(e) => setEmail(e.target.value)}
                    />
                

                    <label className="form-label"> Mobile :</label>
                    <input className='form-control mb-2'
                           type='number' 
                           placeholder='Enter Your Mobile Number' 
                           value={mobile}
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
                           value={dateOfBirth}
                           required
                           onChange={(e) => setDateOfBirth(e.target.value)}
                     />


                    <button className='btn btn-success px-4 py-2 fs-5 fw-bold' type='submit'>Update</button>
                    
                </form>
            </div>
        </div>
    )
}

export default UpdatePersonalInfo ;
