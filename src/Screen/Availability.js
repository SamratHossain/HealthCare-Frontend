import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import TitleNave from '../Components/TitleNave'
import {DoctorSignupAction} from '../Actions/UserActions'

const Availability = () => {
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState()
    const [days, setDays] = useState()
    
    console.log("Time is: ",startTime)
    const availablity = {
        "StartTime" : startTime,
        "EndTime" : endTime,
        "Days" : days,
    }

    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        localStorage.setItem("Availibility" , JSON.stringify(availablity))    
        history.push("/doctor/signup/consultationfee")
    }

    return (
        <div className='container-fluid'>
            {<TitleNave />}
                <div className='text-center'>
                    <h3>Availability</h3>
                </div>
            <div className='form mx-auto mt-3 mb-3 border rounded p-3 shadow' style={{width:'500px'}}>
                
                <form onSubmit={submitHandler}>
                    <div className='bg-secondary bg-opacity-25 p-2 rounded mb-4'>
                        <h3 className='text-danger'>Keep in mind</h3>
                        <p>Below mentioned dates gives patients indication about your regular availability for consultation on E-HealthCare.
                            However, you can come online and consult patient any time you want.
                        </p>
                    </div>

                    <div>
                        <h3 className='text-center mb-3 bg-info mx-5 rounded'>Available Time</h3>
                        <div className='row'>
                            <div className='col-6'>
                                <h4>Start</h4>
                                <input className="form-control m-2" 
                                type='time'
                                value={startTime}
                                required
                                onChange={(e) => setStartTime(e.target.value)}
                                />
                                
                            </div>
                            <div className='col-6'>
                                <h4>End</h4>
                                <input className="form-control m-2" 
                                type='time'
                                value={endTime}
                                required
                                onChange={(e) => setEndTime(e.target.value)}
                                />
                            </div>

                        </div>
                        <h3 className='text-center mb-3 mt-3 bg-info mx-5 rounded'>Available Day</h3>
                        <input className='form-control mb-2'
                           type='text' 
                           placeholder='Enter Your Available Days'
                           value={days}
                           required
                           onChange={(e) => setDays(e.target.value)}
                    />
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

export default Availability;