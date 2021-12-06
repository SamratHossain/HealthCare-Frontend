import React from 'react'
import { useDispatch} from 'react-redux'
import { Link, NavLink, useHistory } from 'react-router-dom'
import UserLogoutAction from '../Actions/UserActions'


const DoctorNavbar = () => {

    const dispatch = useDispatch()

    const history = useHistory()

    const logoutHandler = (e) => {
      e.preventDefault()
      dispatch(UserLogoutAction())
      history.push('/login')
    }
    return (
        <div className="container-fluid bg-white" >
            <nav class="navbar navbar-expand-lg navbar-white bg-white">
            <div class="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0 position-absolute top-50 end-0">
                <li className="nav-item mx-3" >
                  <NavLink to="/doctor/home" className="text-decoration-none ">Home</NavLink>
                </li>
                <li class="nav-item mx-3">
                  <NavLink to="/doctor/message" className="text-decoration-none">Message</NavLink>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle me-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            
                        <li><Link to="/doctor/profile" className="dropdown-item">View Profile</Link></li>
                          <li><a class="dropdown-item" href="#">Help & Support</a></li>
            
                        <li><a class="dropdown-item" onClick={logoutHandler}>Logout</a></li>
                    </ul>
                </li>
            </ul>
       </div>
      </div>
    </nav>
  </div>
    )
}

export default DoctorNavbar
