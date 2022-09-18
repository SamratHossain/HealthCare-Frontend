import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doctorsListAction } from '../../Actions/PatientAction';
import Navbar from '../../Components/Patient/Navbar';
import { useHistory, Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import '../../CSS/Patient/doctorlist.css'

const DoctorsList = (props) => {

  const location = useLocation();
  const {spname} = location.state;
  let namearr = spname.split("/")
  console.log("data is:",namearr[1]);
  let specialist = namearr[1]

  const [DoctorName, setDoctorName] = useState('')

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const doctorListInformation = useSelector(state => state.doctorListInformation)
  const {doctorList} = doctorListInformation



  doctorList.map((dl) => (
    // console.log("qInfo: ", dl.qualificationInfo[0])
    //   console.log("dInfo: ", dl.experienceInfo.map((ex)) => (
    //   console.log(ex.HospitalName)
    // ))

    dl.experienceInfo.map((ex) => {
      if(ex.CurrentlyWorking){
        console.log("HName: ", ex.HospitalName)
      }
    }  
    )
  ))

  // console.log(doctorList.qualificationInfo[0])

  const dispatch = useDispatch()
  const history = useHistory()

  // console.log("DoctorList: ",doctorList)

  useEffect(() => {
    if(userInfo){
        dispatch(doctorsListAction())                                
    }else{
        history.push('/login')
    }
  },[dispatch])

  const categoryHandler = () => {
    history.push('/patient/doctor-list')
  }

  const searchHandler = (e) => {
    e.preventDefault()
    // dispatch(searchDoctorsCategory(DoctorName))
    history.push('search-result')
  }

  const doctorlistHandler = (id) => {
    // e.preventDefault()
    // dispatch(searchDoctorsCategory(DoctorName))
    history.push(`/patient/doctorprofile-info/${id}`)
  }

  return(
    <div>
        <Navbar />
        <div>
          <div className='container-fluid find-doctor'>
          
          <form onSubmit={searchHandler} className="row justify-content-center mt-3">
            
            <div class="col-auto">
              <input type="text" 
                className="form-control" 
                placeholder="Search Doctor" 
                value={DoctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-success mb-3">Search</button>
            </div>
          </form>
        
          <div>
            
          <div class="container-fluid">
        <div class="row">
            <div class="row">    
            {
                doctorList.map((doctorLists) => {
                  if(doctorLists.qualificationInfo[0].Specialist == specialist){
                    return(
                <div class="col-4">
                  <Link to={`/patient/doctorprofile-info/${doctorLists.id}`}> 
                    <div class="main">
                        <div class="pic">
                            <img src={doctorLists.doctorInfo[0].ProfilePhoto} alt="doctor-icon" />
                            <p id="disc">{doctorLists.qualificationInfo[0].Specialist}</p>
                            <p>{doctorLists.id}</p> 
                        </div>
                        <div class="name">
                            <p>{doctorLists.doctor[0].Title} {doctorLists.doctor[0].FirstName} {doctorLists.doctor[0].LastName}</p>
                            <p>{doctorLists.qualificationInfo[0].DegreeName}</p>
                        </div>
                        <div class="exp">
                            <p>Total Exprience</p>
                            <p>3+ Years</p>
                        </div>
                        <div class="lwork">
                            <p>Work In</p>
                            {
                          doctorLists.experienceInfo.map((ex) => (
                            ex.CurrentlyWorking &&
                             (<p>{ex.HospitalName}</p>)
                          
                          )  
                          )
                        }
                        </div>
                        <div class="rating">
                            <p>Total Rating (1,827)</p>
                            <p>***** 4.9</p>
                        </div>
                        <div class="avl">
                            <p>Available For</p>
                            <p id="img"><img src="video-call.jpg" alt="video-call" />Video Call</p>
                        </div>
                        <div class="footer">
                            <p>৳{doctorLists.doctorInfo[0].ConsultationFee}(Incl.VAT) per consultation</p>
                        </div>
                    </div>
                    </Link>
                    
                </div>
                    );
                   }
                   return(
                    <h1></h1>
                  );
                    }
              )
              
            }
            </div>
        </div>
   </div>
          </div>
          
          </div>
        </div>

    </div>
)
}

export default DoctorsList;
