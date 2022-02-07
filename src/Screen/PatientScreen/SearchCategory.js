import React from 'react';
import Navbar from '../../Components/Patient/Navbar';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { 
  viewDoctorsCategory,
  searchDoctorsCategory } from '../../Actions/PatientAction';
import '../../CSS/Patient/find-doctor.css'

const SearchCategory = () => {

  const [name, setName] = useState('')
  

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const searchCategoryResult = useSelector(state => state.searchCategoryResult)
  const {searchCategories} = searchCategoryResult

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
    history.push('/doctor-list')
  }


  return(
      <div>
          <Navbar />
          <div>
            <div className='container-fluid find-doctor'>
                         
              <div className='row doctor-list justify-content-center'>
                
                {
                  searchCategories.map((category) => (
                    
                    <div className='col-lg-4 col-12 '>
                      <div className='rounded my-2 p-3 category' onClick={categoryHandler}>
                          <h5 className='text-center text-white fs-4 fw-bold'>{category.name}</h5>
                          <p className=' text-white fs-4 mt-3'>{category.about}</p>
                      </div>
                    </div>
                
                  ))
                }
              </div>
            </div>
          </div>

      </div>
  )
}

export default SearchCategory;