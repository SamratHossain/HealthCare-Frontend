import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import TitleNave from '../Components/TitleNave'
import {DoctorSignupAction} from '../Actions/UserActions'
import nidcard from '../images/smartcard.jpg'
import profile from '../images/profile.jpeg'

const NidCard = () => {
    const [NidPhoto, setNidPhoto] = useState('')
    const [ProfilePhoto, setProfilePhoto] = useState('')

    const doctorSignup = useSelector(state => state.doctorSignup)
    const {error, success, loading} = doctorSignup

    // if(success){
    //     history.push("/")
    // }
    
    const DoctorInfo = JSON.parse(localStorage.getItem("DoctorInfo"))
    const Qualification = JSON.parse(localStorage.getItem("Qualification"))
    const Experience = JSON.parse(localStorage.getItem("Experience"))
    const Availibility = JSON.parse(localStorage.getItem("Availibility"))
    const Consultation = JSON.parse(localStorage.getItem("Consultation"))
    
    const Title = DoctorInfo.Title
    const FirstName = DoctorInfo.FirstName
    const LastName = DoctorInfo.LastName
    const Email = DoctorInfo.Email
    const Mobile = DoctorInfo.Mobile
    const Gender = DoctorInfo.Gender
    const DateOfBirth = DoctorInfo.DateOfBirth
    const NidOrPassport = DoctorInfo.NidOrPassport
    const Registration = DoctorInfo.Registration
    const Password = DoctorInfo.Password

    const DegreeName = Qualification.DegreeName
    const InstituteName = Qualification.InstituteName
    const Speciality = Qualification.Speciality
    const Country = Qualification.Country
    const PassingYear = Qualification.PassingYear

    const HospitalName = Experience.HospitalName
    const Department = Experience.Department
    const Designation = Experience.Designation
    const CurrentlyWorking = Experience.CurrentlyWorking
    const From = Experience.From
    const To = Experience.To

    const StartTime = Availibility.StartTime
    const EndTime = Availibility.EndTime
    const AvailableDays = Availibility.Days

    const ConsultationFee = Consultation.ConsultFee
    const FollowUpFee = Consultation.FollowupFee
    const ConsultancyDuration = Consultation.ConsultDuration
    const WithinDuration = Consultation.FollowUpDuration

    const DoctorsData = new FormData()
    
    DoctorsData.append("Title",Title)
    DoctorsData.append("FirstName",FirstName)
    DoctorsData.append("LastName",LastName)
    DoctorsData.append("Email",Email)
    DoctorsData.append("Mobile",Mobile)
    DoctorsData.append("Gender",Gender)
    DoctorsData.append("DateOfBirth",DateOfBirth)
    DoctorsData.append("NidOrPassport",NidOrPassport)
    DoctorsData.append("Registration",Registration)
    DoctorsData.append("Password",Password)
    DoctorsData.append("DegreeName",DegreeName)
    DoctorsData.append("InstituteName",InstituteName)
    DoctorsData.append("Specialist",Speciality)
    DoctorsData.append("Country",Country)
    DoctorsData.append("PassingYear",PassingYear)
    DoctorsData.append("HospitalName",HospitalName)
    DoctorsData.append("Department",Department)
    DoctorsData.append("Designation",Designation)
    DoctorsData.append("CurrentlyWorking",CurrentlyWorking)
    DoctorsData.append("From",From)
    DoctorsData.append("To",To)
    DoctorsData.append("Start",StartTime)
    DoctorsData.append("End",EndTime)
    DoctorsData.append("AvailableDays",AvailableDays)
    DoctorsData.append("ConsultationFee",ConsultationFee)
    DoctorsData.append("FollowUpFee",FollowUpFee)
    DoctorsData.append("ConsultancyDuration",ConsultancyDuration)
    DoctorsData.append("WithinDuration",WithinDuration)
    DoctorsData.append("NidPhoto",NidPhoto)
    DoctorsData.append("ProfilePhoto",ProfilePhoto)
    
    const history = useHistory()
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(DoctorSignupAction(DoctorsData))
        history.push("/doctor/signup/done")    
    }

    return (
        <div className='container-fluid'>
            {<TitleNave />}
                
            <div className='form mx-auto mt-3 mb-3 border rounded p-3 shadow' style={{width:'500px'}}>
                
                <form onSubmit={submitHandler}>
                    <div>
                        
                        <h2 className='text-center'>Confirm Your Identity</h2>
                        <div className='bg-secondary bg-opacity-25 p-2 rounded mb-3'>
                            <p>We need your <span className='text-danger'>Natinal ID / Passport</span> to veify Your
                                identity. We're aiming to protect our authorised doctor
                                and patients to make sure no un-authorised person is 
                                registration as doctor. Your ID will be stored securly and will not be vissible to anyone 
                            </p>
                        </div>
                        <h5>Here is an Example Photo</h5>
                        <div className='text-center my-3'>
                            <img className='border border-3 mb-4 rounded' style={{width:"400px", height:"200px"}} src={nidcard} />
                        </div>
                        <h5>Please Make Sure</h5>
                        <p className='text-info'>Your NID Card or Passport should be clearly visible</p>
                        <div class="custom-file mt-3 mb-5">
                            <input 
                            type="file" 
                            class="form-control" 
                            required 
                            onChange={(e) => setNidPhoto(e.target.files[0])}
                            />
                        </div>

                        <div className='text-center'>
                            <h5>Upload Your Profile Picture</h5>
                            <p className='text-danger'>This will be visible to the patient</p>
                        </div>
                        <div className='text-center my-3'>
                            <img className='border border-3 mb-4 rounded-circle' style={{width:"200px", height:"200px"}} src={profile} />
                        </div>
                        <div class="custom-file mt-3 mb-5">
                            <input 
                            type="file" 
                            class="form-control" 
                            required 
                            onChange={(e) => setProfilePhoto(e.target.files[0])}
                            />
                        </div>
                    </div>
                    
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-success px-4 py-2 fs-5 fw-bold' onClick={()=> history.goBack()}>Back</button>
                        <button className='btn btn-success px-4 py-2 fs-5 fw-bold' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NidCard;