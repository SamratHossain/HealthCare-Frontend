import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import TitleNave from '../Components/TitleNave'
import {PatientSignupAction} from '../Actions/UserActions'

const PatientSignup = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [gender, setGender] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()    
        dispatch(PatientSignupAction(firstName, lastName, email, mobile, gender, dateOfBirth, password))   
    }
    
    return (
        <div className='container-fluid'>
            {<TitleNave />}
            <div className='form mx-auto mt-3 border rounded p-3 shadow' style={{width:'500px'}}>
                <form onSubmit={submitHandler}>
                    <label className="form-label"> First Name :</label>
                    <input className='form-control mb-2'
                           type='text' 
                           placeholder='Write Your Message'
                           value={firstName}
                           onChange={(e) => setFirstName(e.target.value)}
                    />

                    <label className="form-label"> Last Name :</label>
                    <input className='form-control mb-2' 
                           type='text' 
                           placeholder='Enter Your Last Name'
                           value={lastName} 
                           onChange={(e) => setLastName(e.target.value)}
                    />

                    <label className="form-label"> Email :</label>
                    <input className='form-control mb-2'
                           type='email' 
                           placeholder='Enter Your Email'
                           value={email} 
                           onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className="form-label"> Mobile :</label>
                    <input className='form-control mb-2'
                           type='number' 
                           placeholder='Enter Your Mobile Number' 
                           value={mobile}
                           onChange={(e) => setMobile(e.target.value)}
                    />

                    <label className="form-label"> Gender </label> <br/> 
                    <div class="form-check form-check-inline">
                        <input class="form-check-input"
                        name="flexRadioDefault" 
                        id="flexRadioDefault1" 
                        type="radio"   
                        value="male"
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
                    <label className="form-label mb-2"> Date of Birth :</label> <br />
                    <input className='form-control mb-3' 
                           type='date'
                           value={dateOfBirth}
                           onChange={(e) => setDateOfBirth(e.target.value)}
                     />

                    <label className="form-label"> Password :</label>
                    <input className='form-control mb-2'
                           type='password' 
                           placeholder='Enter Your Password' 
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className='btn btn-success px-4 py-2 fs-5 fw-bold' type='submit'>Signup</button>
                    <p className='lead d-inline ms-2'>Already Have an Account?</p> <Link to='/login' className='fw-bold fs-5'>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default PatientSignup