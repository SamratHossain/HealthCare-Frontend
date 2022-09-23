import React from 'react'
import Navbar from '../../Components/Patient/Navbar'
import '../../CSS/Navbar.css'
// import '../../CSS/Patient/patienthome.css'

const PatientHome = () => {
    return (
        <div>
            <Navbar />
            <div class="content">
            <h1>HealthCare that makes you smile.</h1>
            <p>Virtual primary care and mental health treatment when you need it. Get personalized, high-quality healthcare by talking to top Bangladeshi Medical doctors all from tha ease of your samartphone.</p>
            <button class="btn">Book an Appointment</button>
        </div>
        </div>
    )
}

export default PatientHome