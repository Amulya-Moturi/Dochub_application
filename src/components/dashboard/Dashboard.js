import React from 'react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { loginContext } from '../../contexts/loginContext'
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'
function Dashboard() {
  let [curruser, logerr, userLoginStatus, loginUser, logoutUser] = useContext(loginContext)
  let { register, handleSubmit, formState: { errors } } = useForm()
  console.log("login status : ",{userLoginStatus});
  console.log("user : ",{curruser});
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo mt-4">
          <h2>Dashboard</h2>
        </div>
        <nav className="menu">
          <div>
            <ul>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="education">
                  Education
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="medical">
                  Medical
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="confidential">
                  Confidential
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="personal">
                  Personal
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="identity">
                  Identity
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="passwords">
                  Passwords
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="certificates">
                  Cerificates
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="vehicle">
                 Vehicle
                </NavLink>
              </li>
              <li className="nav-item c">
                <NavLink className="nav-link text-white" to="others">
                  Others
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
      <main className="contenting p-0">
        <Outlet />
      </main>
    </div>
  )
}

export default Dashboard