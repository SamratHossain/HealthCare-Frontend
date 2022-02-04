import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { addExperienceAction, 
         viewExperienceAction,
         updateExperienceAction 
         } from '../../Actions/DoctorActions'

const UpdateExperience = (props) => {

    const viewExperience = useSelector(state => state.viewExperience)
    const {experiences} = viewExperience

    const {id} = useParams()

    let HospitalName
    let Designation
    let Department
    let From
    let To

    experiences.map((ex) => {
        if (id == ex.id) {
          HospitalName = ex.HospitalName
          Designation = ex.Designation
          Department = ex.Department
          From = ex.From
          To = ex.To

        }
    })
    
    const [hospitalName, setHospitalName] = useState(HospitalName)
    const [designation, setDesignation] = useState(Designation)
    const [department, setDepartment] = useState(Department)
    const [currentlyWorking, setCurrentlyWorking] = useState(false)
    const [from, setFrom] = useState(From)
    const [to, setTo] = useState(To)

    console.log("hpName: ",hospitalName);


    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    
    const dispatch = useDispatch()

    const history = useHistory()
    


    useEffect(() => {
        if(userInfo){
            dispatch(viewExperienceAction())
        }else{
            history.push('/login')
        }
    },[dispatch])

    

    const updateSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(updateExperienceAction(hospitalName, designation, department, currentlyWorking, from, to))
    }

    
    return (
        <div className='container-fluid'>
            
                <div className='text-center'>
                    <h3>Update Experience</h3>
                    
                </div>
            <div className='form mx-auto mt-3 border rounded p-3 shadow' style={{width:'500px'}}>
            <form onSubmit={updateSubmitHandler}>
                                        
                                                        <label className="form-label"> Hospital Name: </label>
                                                        <input className="form-control mb-2"
                                                            type="text"
                                                            value={hospitalName}
                                                            onChange={(e) => setHospitalName(e.target.value)}
                                                        />
                                                        <label className="form-label"> Designation: </label>
                                                        <input className="form-control mb-2"
                                                            type="text"
                                                            value={designation}
                                                            onChange={(e) => setDesignation(e.target.value)} 
                                                        />
                                                        <label className="form-label"> Department: </label>
                                                        <input className="form-control mb-3"
                                                            type="text"
                                                            value={department}
                                                            onChange={(e) => setDepartment(e.target.value)}
                                                        />

                                                        <label className="form-label mb-2 fw-bold"> Employment Period </label>
                                                        <div class="form-check">
                                                            <input class="form-check-input"
                                                                type="checkbox"
                                                                value={true}
                                                                id="flexCheckDefault"
                                                                
                                                                onChange={(e) => setCurrentlyWorking(e.target.value)}
                                                        />
                                                       
                                                        <label class="form-check-label mb-3" for="flexCheckDefault">
                                                            Currently Working
                                                        </label>
                                                </div>
                                                <div className="row">
                                                <div className="col-6">
                                                    <label className="form-label mb-2"> From: </label>
                                                    <input className="form-control"
                                                           style={{width:"200px"}}
                                                           type="date"
                                                           value={from}
                                                           onChange={(e) => setFrom(e.target.value)}
                                                      />
                                                </div>
                                                {!currentlyWorking && (
                                                <div className="col-6">
                                                    <label className="form-label mb-2"> To: </label>
                                                    <input className="form-control"
                                                           style={{width:"200px"}} 
                                                           type="date"
                                                           value={to}
                                                           onChange={(e) => setTo(e.target.value)}
                                                           />
                                                </div>)
                                                }
                                            </div>
                                            <div class="modal-footer">
                                                <button type="submit" class="btn btn-primary">Save</button>
                                            </div>
                                        </form>
                
            </div>
        </div>
    )
}


export default UpdateExperience;
