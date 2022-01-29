import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import DoctorNavbar from './DoctorNavbar'
import propic from '../images/propic.jpg'
import Experience from './DoctorScreen/Experience'
import PersonalInfo from './DoctorScreen/PersonalInfo'
import Qualification from './DoctorScreen/Qualification'
import DoctorInfo from './DoctorScreen/DoctorInfo'

const DoctorProfile = () => {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    
    const dispatch = useDispatch()

    const history = useHistory()

    return (
        <div className="container-fluid h-auto" style={{backgroundColor: "#f0f2f5"}}>
            <DoctorNavbar />
            <div className='text-center mt-3'>
                <h3>Profile Dashboard</h3>
            </div>
            <div style={{width: 800}} className='m-auto'>
                
                <PersonalInfo />
                <DoctorInfo />
                <Experience />
                <Qualification />
            </div>
        </div>
    )
}

export default DoctorProfile
