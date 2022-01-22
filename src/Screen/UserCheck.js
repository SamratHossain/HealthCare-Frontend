import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const UserCheck = () => {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const history = useHistory()

    console.log("User Info",userInfo);
    console.log("User Info",userInfo.data.IsDoctor);


    console.log("Executing");

    if(userInfo.data.IsPatient){
        history.push("/patient/home")
    }else if(userInfo.data.IsDoctor){
        history.push("/doctor/home")
    }

    // if(true){
    //     history.push("/doctor/home")
    // }

    return (
        <div>
            <h2>User Checking</h2>
        </div>
    )
}

export default UserCheck