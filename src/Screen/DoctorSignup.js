import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import TitleNave from '../Components/TitleNave'
import {CheckExistingDoctorAction} from '../Actions/UserActions'

const DoctorSignup = () => {
    const [title, setTitle] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [nidOrPassport, setNidOrPassport] = useState('')
    const [registration, setRegistration] = useState('')
    const [gender, setGender] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [password, setPassword] = useState('')


    const checkExistingDoctor = useSelector(state => state.checkExistingDoctor)
    const {loading, success, error} = checkExistingDoctor
    console.log(success)
    
    var EmailError
    var NidOrPassportError
    var RegistrationError
    const valid = Object.keys(error)
    valid.map(err => {
        if(err=="EmailError"){
            EmailError = err
        }else if(err=="NidOrPassportError"){
            NidOrPassportError = err
        }else if(err=="RegistrationError"){
            RegistrationError = err
        }
    })


    const doctorInfo = {
        "Title" : title,
        "FirstName" : firstName,
        "LastName" : lastName,
        "Email" : email,
        "Mobile" : mobile,
        "NidOrPassport" : nidOrPassport,
        "Registration" : registration,
        "Gender" : gender,
        "DateOfBirth" : dateOfBirth,
        "Password" : password

    }


    
    const dispatch = useDispatch()

    const history = useHistory()

    if(success){
        history.push("/doctor/signup/qualification")
    }

    const submitHandler = (e) => {
        e.preventDefault()    
        localStorage.setItem("DoctorInfo", JSON.stringify(doctorInfo))
        
            dispatch(CheckExistingDoctorAction(email, nidOrPassport, registration))
        }
    
    return (
        <div className='container-fluid'>
            {<TitleNave />}
                <div className='text-center'>
                    <h3>Doctor SignUp</h3>
                </div>
            <div className='form mx-auto mt-3 border rounded p-3 shadow' style={{width:'500px'}}>
                
                <form onSubmit={submitHandler}>
                    <label className="form-label"> Title :</label>
                    <select className="form-select mb-3"
                            aria-label="Default select example"
                            required
                            onChange={(e) => setTitle(e.target.value)}
                            >
                        <option selected></option>
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
                
                    {EmailError && (<label className="form-label d-block text-danger">Email Already Exist !</label>)}

                    <label className="form-label"> Mobile :</label>
                    <input className='form-control mb-2'
                           type='number' 
                           placeholder='Enter Your Mobile Number' 
                           value={mobile}
                           required
                           onChange={(e) => setMobile(e.target.value)}
                    />

                    <label className="form-label"> NID/Passport Number :</label>
                    <input className='form-control mb-2'
                           type='number' 
                           placeholder='Enter Your NID/Passport Number' 
                           value={nidOrPassport}
                           required
                           onChange={(e) => setNidOrPassport(e.target.value)}
                    />

                    {NidOrPassportError && (<label className="form-label d-block text-danger">Nid Or Passport Number Already Exist !</label>)}

                    <label className="form-label"> Registration Number(BMDC)  :</label>
                    <input className='form-control mb-2'
                           type='number' 
                           placeholder='Enter Your Registration Number' 
                           value={registration}
                           required
                           onChange={(e) => setRegistration(e.target.value)}
                    />

                    {RegistrationError && (<label className="form-label d-block text-danger">Registration Number(BMDC) Already Exist !</label>)}

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

                    <label className="form-label"> Password :</label>
                    <input className='form-control mb-2'
                           type='password' 
                           placeholder='Enter Your Password' 
                           value={password}
                           required
                           onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className='btn btn-success px-4 py-2 fs-5 fw-bold' type='submit'>Register</button>
                    <p className='lead d-inline ms-2'>Already Have an Account?</p> <Link to='/login' className='fw-bold fs-5'>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default DoctorSignup