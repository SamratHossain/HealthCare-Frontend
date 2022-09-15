import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doctorsListAction } from '../../Actions/PatientAction';
import Navbar from '../../Components/Patient/Navbar';
import { useHistory, Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

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
            
            <div className='row doctor-list justify-content-center'>
              
              {
                doctorList.map((doctorLists) => {
                  if(doctorLists.qualificationInfo[0].Specialist == specialist){
                    return( 
                  <div className='col-lg-4 col-12 '>
                    <div className='rounded my-2 p-3 category' onClick={categoryHandler}>
                        <h5 className='text-center text-white fs-4 fw-bold'>{doctorLists.id}</h5>
                        <p className=' text-white fs-4 mt-3'>{doctorLists.qualificationInfo[0].Specialist}</p>
                        <p className=' text-white fs-4 mt-3'>{doctorLists.qualificationInfo[0].DegreeName}</p>
                        <p className=' text-white fs-4 mt-3'>{doctorLists.doctorInfo[0].ConsultationFee}</p>
                        <p className=' text-white fs-4 mt-3'>{doctorLists.doctor[0].Title} {doctorLists.doctor[0].FirstName} {doctorLists.doctor[0].LastName}</p>
                        {
                          doctorLists.experienceInfo.map((ex) => (
                            ex.CurrentlyWorking &&
                             (<p className=' text-white fs-4 mt-3'>{ex.HospitalName}</p>)
                          
                          )  
                          )
                        }
                        <div>
                          <img src={doctorLists.doctorInfo[0].ProfilePhoto} width="50" height="50" />
                        </div>
                    </div>
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
)
}

export default DoctorsList;
