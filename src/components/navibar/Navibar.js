import React from 'react'
import './Navibar.css'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react'
import { loginContext } from '../../contexts/loginContext';
import logo1 from '../../images/logo1.png';
function Navibar() {
  let [curruser, logerr, userLoginStatus, loginUser,logoutUser] = useContext(loginContext)
  return (
    <div className='Nabar'>
      <nav className="navbar navi navbar-expand-sm bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" href="#"><img src={logo1} width="50px" alt="" /></NavLink>
          <div>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item text-white">
                <NavLink className="nav-link text-white" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item text-white">
                <NavLink className="nav-link text-white" to="/register">
                  Register
                </NavLink>
              </li>
              {userLoginStatus ?
                <li className="nav-item text-white">
                  <NavLink className="nav-link text-white" to="/login" onClick={logoutUser}>
                    Logout
                  </NavLink>
                </li>
                :
                <li className="nav-item text-white">
                  <NavLink className="nav-link text-white" to="/login">
                    Login
                  </NavLink>
                </li>
              }

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navibar