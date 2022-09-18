import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Navbar from '../../Components/Patient/Navbar';
import '../../CSS/Patient/doctorprofileinfo.css'
import { doctorsProfile } from '../../Actions/PatientAction';
import { useDispatch, useSelector } from 'react-redux';


const DoctorProfileInfo = () => {
  const params = useParams();
  console.log("id is: ",params.id)

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const doctorProfile = useSelector(state => state.doctorProfile)
  const {profiles} = doctorProfile

  const dispatch = useDispatch()

  const history = useHistory()

  useEffect(() => {
    if(userInfo){
        dispatch(doctorsProfile(params.id))
    }else{
        history.push('/login')
    }
},[dispatch])

  return (
    <div>
      <Navbar />
    <div class="container-fluid top-padding">
        <div class="row">
                <div class="col">
                    <div class="main">
                        <div class="pic">
                            <img src="" alt="doctor-icon" />
                            <div>
                                <p>Dr. Khaled Bin Shahabuddin</p>
                                <p>MBBS</p>
                                <p>General Physician, Pediatrics, Covid Unit</p>
                            </div>
                        </div>
                        <div class="exp">
                            <p>Total Exprience</p>
                            <p>3+ Years</p>
                        </div>
                        <div class="lwork">
                            <p>Last Work In</p>
                            <p>BLOOD MAN</p>
                        </div>
                        <div class="rating">
                            <p>Total Rating (1,827)</p>
                            <p>***** 4.9</p>
                        </div>
                        <div class="avl">
                            <p>Available For</p>
                            <p id="img"><img src="" alt="video-call" />Video Call</p>
                        </div>
                        <div class="footer">
                            <p>৳150(Incl.VAT) per consultation</p>
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
                    <p>Hey I am Dr. Khaled Bin Shahabuddin</p>
                    <p>Assalamalaikum. I m Dr.Khaled Bin Shahabuddin Sunny. I completed My M.B.B.S. from Anwer Khan Modern Medical College and Hospital in 2017.After that i Completed 1year Internship programme in 2018.After that I completed 6months Honorary Programme from Medicine Department in 2019.After that i completed 6months Honorary programme from ENT Department in 2020.From the 1st January 2020 to 30th june 2020 i worked as Medical Officer in ENT Department in Anwer Khan Modern Medical Hospital.Now i m working As a Medical Officer In an NGO named PD Foundation in Medicine Department.</p>
                </div>
                {/* <hr> */}
                <div class="row" id="glance">
                    <div class="col-6">
                        <p class="key">Consultation Fee :</p>
                        <p class="value">৳150</p>
                        <p class="key">Patient Attendence :</p>
                        <p class="value">20267</p>
                        <p class="key">Consultation Time :</p>
                        <p class="value">11:00 AM - 01:00 PM</p>
                    </div>
                    <div class="col-6">
                        <p class="key">Follow-up Fee :</p>
                        <p class="value">৳100</p>
                        <p class="key">Availability :</p>
                        <p class="value">Sat-Fri</p>
                        <p class="key">Doctor Code :</p>
                        <p class="value">DT2056</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div>
                <p  class="divhead">Exprience</p>
                <p id="exp">Dhaka Medical,Dhaka</p>
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-4">
                                <p class="key">Designation :</p>
                                <p class="value">Medical Officer</p>
                                <p class="key">Period :</p>
                                <p class="value">1 Years 1 Month</p>
                            </div>
                            <div class="col-4">
                                <p class="key">Department:</p>
                                <p class="value">Covid Department</p>
                            </div>
                            <div class="col-4">
                                <p class="key">Employment Period :</p>
                                <p class="value">Jul 11, 2020 - Aug 31,2021</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <hr> */}
                <p id="exp">Imperial Hospital,Chittagong</p>
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-4">
                                <p class="key">Designation :</p>
                                <p class="value">Medical Officer</p>
                                <p class="key">Period :</p>
                                <p class="value">1 Years 1 Month</p>
                            </div>
                            <div class="col-4">
                                <p class="key">Department :</p>
                                <p class="value">Covid Department</p>
                            </div>
                            <div class="col-4">
                                <p class="key">Employment Period :</p>
                                <p class="value">Jul 11, 2020 - Aug 31,2021</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/* <hr> */}
                <p id="exp">Dhaka National Medical College</p>
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-4">
                                <p class="key">Designation :</p>
                                <p class="value">Medical Officer</p>
                                <p class="key">Period :</p>
                                <p class="value">1 Years 1 Month</p>
                            </div>
                            <div class="col-4">
                                <p class="key">Department :</p>
                                <p class="value">Covid Department</p>
                            </div>
                            <div class="col-4">
                                <p class="key">Employment Period :</p>
                                <p class="value">Jul 11, 2020 - Aug 31,2021</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
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
