import React, { useEffect } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import Navbar from '../../Components/Patient/Navbar';
import '../../CSS/Patient/doctorprofileinfo.css'
import { doctorsExperience, doctorsInfo, doctorAction, doctorQualification } from '../../Actions/PatientAction';
import { useDispatch, useSelector } from 'react-redux';


const DoctorProfileInfo = () => {
  const params = useParams();
  console.log("id is: ",params.id)

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const doctorExperience = useSelector(state => state.doctorExperience)
  const {experiences} = doctorExperience

  var currentHospital
  experiences.map((ex) =>{
    if(ex.CurrentlyWorking){
        currentHospital = ex.HospitalName
    }
  })

  const doctorInfo = useSelector(state => state.doctorInfo)
  const {info} = doctorInfo

  const doctors = useSelector(state => state.doctors)
  const {doctor} = doctors

  const qualifications = useSelector(state => state.qualifications)
  const {qualification} = qualifications

  console.log("info is: ",info)

  const dispatch = useDispatch()

  const history = useHistory()

  useEffect(() => {
    if(userInfo){
        dispatch(doctorsExperience(params.id))
        dispatch(doctorsInfo(params.id))
        dispatch(doctorAction(params.id))
        dispatch(doctorQualification(params.id))
    }else{
        history.push('/login')
    }
},[dispatch])

  return (
    <div>
      <Navbar />
      <div>
        {/* start */}
        {/* end */}
      </div>
    <div class="container-fluid top-padding">
        <div class="row">
                <div class="col">
                    <div class="main">
                        <div class="pic">
                            <img src={info.ProfilePhoto} alt="doctor-icon" />
                            <div>
                                <p>{doctor.Title} {doctor.FirstName} {doctor.LastName}</p>
                                <p>{qualification.DegreeName}</p>
                                <p>{qualification.Specialist}</p>
                                
                            </div>
                        </div>
                        <div class="exp">
                            <p>Total Exprience</p>
                            <p>3+ Years</p>
                        </div>
                        <div class="lwork">
                            {
                                
                            }
                            <p>Work In</p>
                            <p>{currentHospital}</p>
                        </div>
                        <div class="rating">
                            <p>Total Rating (1,827)</p>
                            <p>***** 4.9</p>
                            <br></br>
                            <br></br>
                            <p>BMDC Number</p>
                            <p>{doctor.RegistrationNumberBMDC}</p>
                        </div>
                        <div class="avl">
                            <p>Contact on Whatsapp</p>
                            <Link to={`/patient/chat/:${params.id}`}><button className='btn btn-success px-3 py-2 fs-9 fw-bold' type='submit'>Send Message</button></Link>
                        </div>
                        <div class="footer">
                            <p>৳{info.ConsultationFee}(Incl.VAT) per consultation</p>
                        </div>
                    </div>
                </div>
        </div>
   </div>
   <div class="container-fluid">
    <div class="row">
        <div class="col-4 ier">
            <div>
                <p  class="divhead">Info</p>
                <div class="row" id="D-info">
                    <p>{info.About}</p>
                    
                </div>
                
                <div class="row" id="glance">
                    <div class="col-6">
                        <p class="key">Consultation Fee :</p>
                        <p class="value">৳{info.ConsultationFee}</p>
                        <p class="key">Patient Attendence :</p>
                        <p class="value">20267</p>
                        <p class="key">Consultation Time :</p>
                        <p class="value">{info.AvailableTime}</p>
                    </div>
                    <div class="col-6">
                        <p class="key">Follow-up Fee :</p>
                        <p class="value">৳{info.FollowUpFee}(Within{info.WithinDuration})</p>
                        <p class="key">Availability :</p>
                        <p class="value">{info.AvailableDay}</p>
                        <p class="key">Doctor Code :</p>
                        <p class="value">{info.user}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div>
                <p  class="divhead">Exprience</p>
                
                 {
                    experiences.map((experience) => (
                        <div>
                        <p id="exp">{experience.HospitalName}</p>
                        <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-4">
                                <p class="key">Designation :</p>
                                <p class="value">{experience.Designation}</p>
                                <p class="key">Period :</p>
                                <p class="value">{experience.EmploymentPeriod}</p>
                            </div>
                            <div class="col-4">
                                <p class="key">Department :</p>
                                <p class="value">{experience.Department}</p>
                            </div>
                            <div class="col-4">
                                <p class="key">Employment Period :</p>
                                <p class="value">{experience.From} - {experience.To}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>
                    ))
                 }
                {/* <hr> */}
            </div>
        </div>
        <div class="col-4">
            <p  class="divhead">Reviews</p>
                <div>
                    <div class="row review">
                        <div class="col-6 ">
                            <p class="key rname">Rofiqul Islam</p>
                            <p class="value rvalue">Sep 15,2022</p>
                        </div>
                        <div class="col-6">
                            <p class="key urating">5</p>
                            <p class="value star">*****</p>
                        </div>
                    </div>
                    {/* <hr> */}
                    <div class="row review">
                        <div class="col-6">
                            <p class="key rname">Ahmed Khan</p>
                            <p class="value rvalue">Sep 15,2022</p>
                        </div>
                        <div class="col-6">
                            <p class="key urating">5</p>
                            <p class="value star">*****</p>
                        </div>
                    </div>
                    {/* <hr> */}
                    <div class="row review">
                        <div class="col-6">
                            <p class="key rname">Salman Khan</p>
                            <p class="value rvalue">Sep 15,2022</p>
                        </div>
                        <div class="col-6">
                            <p class="key urating">5</p>
                            <p class="value star">*****</p>
                        </div>
                    </div>
                    {/* <hr> */}
                    <div class="row review">
                        <div class="col-6">
                            <p class="key rname">Shah Rukh Khan</p>
                            <p class="value rvalue">Sep 15,2022</p>
                        </div>
                        <div class="col-6">
                            <p class="key urating">5</p>
                            <p class="value star">*****</p>
                        </div>
                    </div>
                    {/* <hr> */}
                </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default DoctorProfileInfo
