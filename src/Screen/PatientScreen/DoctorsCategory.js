import React from 'react';
import Navbar from '../../Components/Patient/Navbar';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { 
  viewDoctorsCategory,
  searchDoctorsCategory } from '../../Actions/PatientAction';
import '../../CSS/Patient/find-doctor.css'

const DoctorsCategory = (props) => {

  const [name, setName] = useState('')
  

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const doctorCategories = useSelector(state => state.doctorCategories)
  const {categories} = doctorCategories

  const dispatch = useDispatch()
  const history = useHistory()
    
  useEffect(() => {
    if(userInfo){
        dispatch(viewDoctorsCategory())                                
    }else{
        history.push('/login')
    }
  },[dispatch])

  const categoryHandler = () => {
    history.push(`/patient/doctor-list`)
  }

  const searchHandler = (e) => {
    e.preventDefault()
    dispatch(searchDoctorsCategory(name))
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
                  placeholder="Search Department" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-success mb-3">Search</button>
              </div>
            </form>
              
              <div className='row doctor-list justify-content-center'>
                
                {
                  categories.map((category) => (
                      
                    <div className='col-lg-4 col-12 '>
                    <Link to={{
                      pathname:'/patient/doctor-list',
                      state: {spname: category.name}
                    }} style={{ textDecoration: 'none' }}>
                      <div className='rounded my-2 p-3 category' >
                          <h5 className='text-center text-white fs-4 fw-bold'>{category.name}</h5>
                          <p className=' text-white fs-4 mt-3'>{category.about}</p>
                        
                      </div>
                      </Link>
                    </div>
                   
                  ))
                }
              </div>
            </div>
          </div>

      </div>
  )
}

export default DoctorsCategory;