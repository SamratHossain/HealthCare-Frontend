import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import UserLogoutAction from '../../Actions/UserActions';

const Navbar = () => {

  const dispatch = useDispatch()

  const history = useHistory()

  const logoutHandler = () => {
      dispatch(UserLogoutAction())
      history.push('/login')

  }
  return(
      <div>
          <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">
            E-HealthCare
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div class="nav-links">
            <ul>
              <li><Link to="/patient/home"><a >Home</a></Link></li>
              <li><Link to="/patient/doctors-category"><a >Find Doctor</a></Link></li>
              <li><a href="#">Hospital</a></li>
              <li><button className='btn btn-success' onClick={logoutHandler}>Logout</button></li>
            </ul>
        </div>
    </div>
      </div>
  )
}

export default Navbar;
