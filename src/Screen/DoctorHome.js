import React from 'react'
import { useHistory } from 'react-router-dom'
import '../CSS/DoctorHome.css'
import DoctorNavbar from './DoctorNavbar'

const DoctorHome = () => {
    const userInfo = localStorage.getItem("UserInfo")
    
    const history = useHistory()

    if(userInfo == null){
        history.push('/login')
    }
    return (
        <div className="container-fluid ">
           <DoctorNavbar />
        </div>
    )
}

export default DoctorHome