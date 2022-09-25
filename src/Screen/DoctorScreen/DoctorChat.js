import React, { useEffect } from 'react'
import { useState } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { sendMessageAdction, getMessageAdction } from '../../Actions/PatientAction'
import DoctorNavbar from '../DoctorNavbar'
import '../../CSS/Chat/doctorchat.css'

const DoctorChat = () => {

    const [message, setMessage] = useState('')

    const userLogin = useSelector(state => state.userLogin)
    const {loading, userInfo, error} = userLogin
    const user_from = userInfo.data.id

    const getMessage = useSelector(state => state.getMessage)
    const {messages} = getMessage

    console.log(messages[0].user_from)

    const user_to = 10

    const dispatch = useDispatch()

    const history = useHistory()

    useEffect(() => {
      if(userInfo){
        if(messages.length == 0){
          dispatch(getMessageAdction(user_from, 0))
        }else{
          dispatch(getMessageAdction(user_from, user_to))
        }
      }else{
          history.push('/login')
      }
  },[dispatch])

    const submitHandler = (e) => {
        e.preventDefault()    
        dispatch(sendMessageAdction(message, user_from, user_to))   
    }

  return (
    <div>
      <DoctorNavbar />
      {/* start */}
      {/* <div>
      <div class="back-container">
    <div class="container-fluid front-container">
      <div class="back-main"></div>
    </div>
    <div class="container front-container1">
      <div class="row chat-top">
        <div class="col-sm-4 border-right border-secondary">
          <img src="" alt="" class="profile-image rounded-circle" />
          <span class="float-right mt-2">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            </svg>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-left-fill mx-3" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            </svg>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-three-dots-vertical mr-2" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </span>


        </div>
        <div class="col-sm-8">
          <img src="" alt="" class="profile-image rounded-circle" />
          <span class="ml-2">Patient</span>
          <span class="float-right mt-2">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
              <path fill-rule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
            </svg>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-three-dots-vertical mx-3" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </span>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 contacts">
          <div class="contact-table-scroll">
            <table class="table table-hover">
              <tbody>
                <tr>
                  <td><img src="" alt="" class="profile-image rounded-circle" /></td>
                  <td class="patient">Patient<br /> <span class="msg"> <small>Hello Doctor</small></span></td>
                </tr>  
              </tbody>
            </table>
          </div>

        </div>
        <div class="col-sm-8 message-area">
          <div class="message-table-scroll">
            <table class="table">
              <tbody>
                <tr>
                  <td>
                    <p class="bg-primary p-2 mt-2 mr-5 shadow-sm text-white float-left rounded">Hello Doctor</p>
                  </td>
                  <td class="time">
                    <p class="p-1 mt-2 mr-3 shadow-sm"><small>11:20 PM</small></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="bg-success p-2 mt-2 mr-5 shadow-sm text-white float-right rounded">Hello Pataient
                    </p>
                  </td>
                  <td class="time">
                    <p class="p-1 mt-2 mr-3 shadow-sm"><small>11:21 PM</small></p>
                  </td>
                </tr>
              
              </tbody>
            </table>
          </div>
          <div class="row message-box p-3">
            <div class="col-sm-10">
              <form action="">
                <input type="text" class="form-control" placeholder="Write message..." />
              </form>

            </div>
            <div class="col-sm-2 mt-1">
              <button type="button" class="btnn">Send</button>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
      </div> */}
      {/* end */}
        <div class="container">
        <div class="header">
            {/* <h3>{doctor.Title} {doctor.FirstName} {doctor.LastName}</h3> */}
            <h3>Elizabeth Olsen</h3>
        </div>
        <div class="body">
          {
            messages.map((chat) => {
              if(chat.user_from==user_from){
                return(
                  <p class="massage">{chat.message}</p>
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
  )
}

export default DoctorChat
