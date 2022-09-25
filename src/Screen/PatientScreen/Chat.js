import React, { useEffect } from 'react'
import { useState } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import Navbar from '../../Components/Patient/Navbar';
import { useHistory, useParams } from 'react-router-dom'
import { sendMessageAdction, getMessageAdction } from '../../Actions/PatientAction'
import '../../CSS/Chat/patientchat.css'

const Chat = () => {

    const [message, setMessage] = useState('')

    const userLogin = useSelector(state => state.userLogin)
    const {loading, userInfo, error} = userLogin
    const user_from = userInfo.data.id

    const doctors = useSelector(state => state.doctors)
    const {doctor} = doctors

    const getMessage = useSelector(state => state.getMessage)
    const {messages} = getMessage

    messages.map((message) => {
      console.log(message.message)
    })

    const params = useParams();
    const user_to = params.id

    const mobile = doctor.Mobile



    const dispatch = useDispatch()

    const history = useHistory()

    useEffect(() => {
      if(userInfo){
          dispatch(getMessageAdction(user_from, user_to))
      }else{
          history.push('/login')
      }
  },[dispatch])

    const submitHandler = (e) => {
        e.preventDefault()    
        dispatch(sendMessageAdction(message, mobile))   
    }

  return (
    <div>
      <Navbar />
      <div>
      <div class="container">
        <div class="header">
            <h3>{doctor.Title} {doctor.FirstName} {doctor.LastName}</h3>
        </div>
        <div class="body">
          {
            messages.map((chat) => {
              if(chat.user_from==user_from){
                return(
                  <div>
                    <p class="massage">{chat.message}</p>
                  </div>
                )
              }
              return(
                <p class="massage other_massage">{chat.message}</p>
              )
            })
          }
        </div>
        <div class="footer">
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
        
    </div>
  )
}

export default Chat
