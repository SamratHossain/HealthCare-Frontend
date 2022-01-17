import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import '../CSS/DoctorHome.css'
import DoctorNavbar from './DoctorNavbar'

const DoctorHome = () => {
    // const userInfo = localStorage.getItem("UserInfo")

    const userLogin = useSelector(state => state.userLogin)
    const {userToken, error, loading} = userLogin

    const history = useHistory()

    if(!userToken){
        history.push('/login')
    }
    return (
        <div className="container-fluid ">
           <DoctorNavbar />
        </div>
    )
}

export default DoctorHome