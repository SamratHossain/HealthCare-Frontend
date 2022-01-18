import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import TitleNave from '../Components/TitleNave'
import {DoctorSignupAction} from '../Actions/UserActions'

const ConsultationFee = () => {
    const [consultFee, setConsultFee] = useState('')
    const [followUpDuration, setFollowupDuration] = useState('')
    const [consultDuration, setConsultDuration] = useState('')
    const [followupFee, setFollowupFee] = useState('')
    const [followup, setFollowup] = useState(false)
    
    
    const consultation = {
        "ConsultFee" : consultFee,
        "FollowUpDuration" : followUpDuration,
        "ConsultDuration" : consultDuration,
        "FollowupFee" : followupFee
    }

    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        localStorage.setItem("Consultation" , JSON.stringify(consultation))    
        history.push("/doctor/signup/nidcard")
    }

    const followupDurations = [
        '1 week',
        '2 week',
        '1 month',
        '2 month',
        '3 month',
        '4 month',
        '5 month',
        '6 month',
        '7 month',
        '8 month'
    ]

    const consultationDuration = [
        '10 minutes',
        '15 minutes',
        '20 minutes',
        '25 minutes',
        '30 minutes',
        '40 minutes',
        '45 minutes',
        '50 minutes',
        '55 minutes'
    ]

    return (
        <div className='container-fluid'>
            {<TitleNave />}
                
            <div className='form mx-auto mt-3 mb-3 border rounded p-3 shadow' style={{width:'500px'}}>
                
                <form onSubmit={submitHandler}>
                    
                    <div>
                        <h3>Consultation Fee</h3>
                        <input className='form-control mb-2'
                           type='text' 
                           placeholder='Enter Consultation Fee'
                           value={consultFee}
                           required
                           onChange={(e) => setConsultFee(e.target.value)}
                        />
                        <p>You can change it later on your profile setting</p>
                        <div class="form-check">
                            <input class="form-check-input"
                                    type="checkbox"
                                    value={true}
                                    id="flexCheckDefault"
                                    onChange={(e) => setFollowup(e.target.value)}
                                    />
                                                       
                            <label class="form-check-label mb-2" for="flexCheckDefault">
                                    <p>I will charge a different fee to patient on follow-up consultation</p>
                            </label>
                        </div>
                        {followup && (
                            <div>
                                <input className='form-control mb-2'
                                    type='text' 
                                    placeholder='Enter Follow-up Fee'
                                    value={followupFee}
                                    required
                                    onChange={(e) => setFollowupFee(e.target.value)}
                                />
                                <select className="form-select mb-3"
                                    aria-label="Default select example"
                                    required
                                    onChange={(e) => setFollowupDuration(e.target.value)}
                                    >
                                    <option selected>follow up consultation within this duration</option>
                                    {followupDurations.map((fd) => (<option> {fd} </option>))}
                                
                                </select>
                            </div>
                        )}

                        <h5>Average Per Patient Consultancy Duration</h5>
                        <div className='bg-secondary p-2 mb-3 bg-opacity-10 rounded'>
                            <p>NB: Please enter the aproximate avg. per patient consultation duration.
                                It'll help us to show patients how long they've to wait in the queue.</p>
                        </div>
                        <select className="form-select mb-3"
                            aria-label="Default select example"
                            required
                            onChange={(e) => setConsultDuration(e.target.value)}
                            >
                            <option selected>Select duration in minutes</option>
                            {consultationDuration.map((fd) => (<option> {fd} </option>))}     
                        </select>
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

export default ConsultationFee;