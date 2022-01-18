import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import TitleNave from '../Components/TitleNave'
import {DoctorSignupAction} from '../Actions/UserActions'
import nidcard from '../images/smartcard.jpg'
import profile from '../images/profile.jpeg'

const NidCard = () => {
    const [nid, setNid] = useState('')
    
    const file = new FormData()
    file.append("image", nid)
    console.log("image:",file)
    
    const Identity = {
        "NID" : nid        
    }

    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        localStorage.setItem("Identity" , Identity)    
        history.push("/doctor/signup/nid")
    }

    

    return (
        <div className='container-fluid'>
            {<TitleNave />}
                
            <div className='form mx-auto mt-3 mb-3 border rounded p-3 shadow' style={{width:'500px'}}>
                
                <form onSubmit={submitHandler}>
                    <div>
                        
                        <h2 className='text-center'>Confirm Your Identity</h2>
                        <div className='bg-secondary bg-opacity-25 p-2 rounded mb-3'>
                            <p>We need your <span className='text-danger'>Natinal ID / Passport</span> to veify Your
                                identity. We're aiming to protect our authorised doctor
                                and patients to make sure no un-authorised person is 
                                registration as doctor. Your ID will be stored securly and will not be vissible to anyone 
                            </p>
                        </div>
                        <h5>Here is an Example Photo</h5>
                        <div className='text-center my-3'>
                            <img className='border border-3 mb-4 rounded' style={{width:"400px", height:"200px"}} src={nidcard} />
                        </div>
                        <h5>Please Make Sure</h5>
                        <p className='text-info'>Your NID Card or Passport should be clearly visible</p>
                        <div class="custom-file mt-3 mb-5">
                            <input 
                            type="file" 
                            class="form-control" 
                            required 
                            onChange={(e) => setNid(e.target.files[0])}
                            />
                        </div>

                        <div className='text-center'>
                            <h5>Upload Your Profile Picture</h5>
                            <p className='text-danger'>This will be visible to the patient</p>
                        </div>
                        <div className='text-center my-3'>
                            <img className='border border-3 mb-4 rounded-circle' style={{width:"200px", height:"200px"}} src={profile} />
                        </div>
                        <div class="custom-file mt-3 mb-5">
                            <input 
                            type="file" 
                            class="form-control" 
                            required 
                            onChange={(e) => setNid(e.target.files[0])}
                            />
                        </div>
                    </div>
                    
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-success px-4 py-2 fs-5 fw-bold' onClick={()=> history.goBack()}>Back</button>
                        <button className='btn btn-success px-4 py-2 fs-5 fw-bold' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NidCard;