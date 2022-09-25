import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Patient/Navbar'
import '../../CSS/Navbar.css'
import '../../CSS/Patient.css'
import IMG from '../../images/medical.jpg'


const PatientHome = () => {
    return (
        <div>
            <Navbar />
        <div className='container-fluid'>
            <div className='maindiv bg-info'>
                <div className='ms-3 position-relative me-5'>
                    {/* <h2 className='text-white fw-bold ts-1 d-inline'>E-HealthCare</h2> */}
                    
                    {/* <Link to='/login' className='fw-bold fs-5'><button className="btn btn-primary mt-3 px-4 position-absolute top-0 end-0" type="submit">Login</button></Link> */}
                </div>
                <div className='row'>
                    <div className='col-md-8 text-center mt-5'>
                        <h2 className='text-white
                                       fs-1
                                       fw-bold
                                       mt-5'
                                       >HealthCare that makes you smile</h2>

                        <h2 className='m-2'>Virtual primary care and mental health treatment when you need it. Get personalized, high-quality healthcare by talking to top Bangladeshi Medical doctors all from the ease of your smartphone</h2>
                    
                        <div className='mt-5'>
                            {/* <h2 className='text-white bg-primary d-inline px-5 py-3 rounded-pill'>Register Now</h2> */}
                        </div>
                        <div className='mt-5'>
                            {/* <Link to='/patient/signup'> <button className='btn btn-success p-5 m-3 fw-bold fs-2 shadow-lg'>Join as Patient</button></Link> */}
                            <Link to='/patient/doctors-category'> <button className='btn btn-success p-5 fw-bold fs-2 shadow-lg'>Get Started</button></Link>
                        </div>
                    </div>
                    
                    <div className='col-md-4 text-center'>
                        <img className='photo' src={IMG} />
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default PatientHome