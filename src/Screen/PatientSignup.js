import React from 'react'
import {Link} from 'react-router-dom'
import TitleNave from '../Components/TitleNave'

const PatientSignup = () => {
    
    
    return (
        <div className='container-fluid'>
            {<TitleNave />}
            <div className='form mx-auto mt-3 border rounded p-3 shadow' style={{width:'500px'}}>
                <form >
                    <label className="form-label"> First Name :</label>
                    <input className='form-control mb-2' type='text' placeholder='Enter Your First Name' />

                    <label className="form-label"> Last Name :</label>
                    <input className='form-control mb-2' type='text' placeholder='Enter Your Last Name' />

                    <label className="form-label"> Email :</label>
                    <input className='form-control mb-2' type='email' placeholder='Enter Your Email' />

                    <label className="form-label"> Mobile :</label>
                    <input className='form-control mb-2' type='number' placeholder='Enter Your Mobile Number' />

                    <label className="form-label"> Gender </label> <br/> 
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">Female</label>
                    </div>
                    <div class="form-check form-check-inline mb-2">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                        <label class="form-check-label" for="inlineRadio3">Custom</label>
                    </div>
                    <br />
                    <label className="form-label mb-2"> Date of Birth :</label> <br />
                    <input className='form-control mb-3' type='date' />
                    <button className='btn btn-success px-4 py-2 fs-5 fw-bold' type='submit'>Signup</button>
                    <p className='lead d-inline ms-2'>Already Have an Account?</p> <Link to='/login' className='fw-bold fs-5'>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default PatientSignup