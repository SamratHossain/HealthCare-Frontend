import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const UserCheck = () => {

    const userLogin = useSelector(state => state.userLogin)
    const {loading, userInfo, error} = userLogin

    const history = useHistory()

    if(userInfo.data.IsPatient){
        history.push("/patient/home")
    }else if(userInfo.data.IsDoctor){
        history.push("/doctor/home")
    }

    return (
        <div>
            <h2>User Checking</h2>
        </div>
    )
}

export default UserCheck