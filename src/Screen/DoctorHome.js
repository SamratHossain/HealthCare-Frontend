import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import '../CSS/DoctorHome.css'
import DoctorNavbar from './DoctorNavbar'

const DoctorHome = () => {
    
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo, error, loading} = userLogin

   
    const history = useHistory()

    if(!userInfo){
        history.push('/login')
    }
    
    return (
        <div>
            <div className="container-fluid ">
                <DoctorNavbar />
            </div>
            <div>
                <h2>Doctor Home</h2>
            </div>
        </div>
    )
}

export default DoctorHome