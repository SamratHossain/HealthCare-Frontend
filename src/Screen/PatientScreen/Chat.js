import React from 'react'
import { useState } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { sendMessageAdction } from '../../Actions/PatientAction'

const Chat = () => {

    const [message, setMessage] = useState('')

    // const userInfo = localStorage.getItem('UserInfo')
    // console.log("userInfo",userInfo)

    const userLogin = useSelector(state => state.userLogin)
    const {loading, userInfo, error} = userLogin
    const user_from = userInfo.data.id

    const params = useParams();
    const user_to = params.id

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()    
        dispatch(sendMessageAdction(message, user_from, user_to))   
    }

  return (
    <div>
        <div>
        <div className='form mx-auto mt-3 border rounded p-3 shadow' style={{width:'500px'}}>
            <form onSubmit={submitHandler}>
            <input className='form-control mb-2'
                           type='text' 
                           placeholder='Write Your Message'
                           value={message}
                           onChange={(e) => setMessage(e.target.value)}
                    />
            <button className='btn btn-success px-4 py-2 fs-5 fw-bold' type='submit'>Send</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Chat
