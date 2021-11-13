import React from 'react'
import '../CSS/Patient.css'
import IMG from '../images/medical.jpg'

const Select = () => {
    return (
        <div className='container-fluid'>
            <div className='main bg-info'>
                <div className='ms-3'>
                    <h2 className='text-white fw-bold ts-1'>E-HealthCare</h2>
                </div>
                <div className='row'>
                    <div className='col-md-8 text-center mt-5'>
                        <h2 className='text-white
                                       fs-1
                                       fw-bold
                                       mt-5'
                                       >Instant Video Consultation</h2>

                        <h2 className='m-2'>Anytime Anywhere</h2>
                    
                        <div className='mt-5'>
                            <h2 className='text-white bg-primary d-inline px-5 py-3 rounded-pill'>Register Now</h2>
                        </div>
                        <div className='mt-5'>
                            <button className='btn btn-success p-5 m-3 fw-bold fs-2 shadow-lg'>Join as Patient</button>
                            <button className='btn btn-success p-5 fw-bold fs-2 shadow-lg'>Join as Doctor</button>
                        </div>
                    </div>
                    
                    <div className='col-md-4 text-center'>
                        <img className='photo' src={IMG} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Select

