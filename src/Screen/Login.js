import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import TitleNave from '../Components/TitleNave'
import { UserLoginAction } from '../Actions/UserActions'


const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const userLogin = useSelector(state => state.userLogin)
    const {loading, userInfo, error} = userLogin
    
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(UserLoginAction(email, password))
    }

    return (
        <div className="conatiner-fluid">
            
            {<TitleNave />}
            <div className='form mx-auto mt-3 border rounded p-3 shadow' style={{width:'500px'}}>
                <form onSubmit={submitHandler}> 
                {error && (<label className="form-label d-block text-danger">Invalid Email or Password !</label>)}
                <label className="form-label"> Email :</label>
                <input className='form-control mb-2'
                        type='text' 
                        placeholder='Enter Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />   
                <label className="form-label"> Password :</label>
                <input className='form-control mb-2'
                        type='password' 
                        placeholder='Enter Your Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    <button className='btn btn-success px-3 py-2 fs-5 fw-bold' type='submit'>Login</button>
                    <p className='lead d-inline ms-2'>Don't Have an Account?</p> <Link to='/' className='fw-bold fs-5'>Register</Link>   
                </ form>
            </div>
        </div>
    )
}

export default Login
