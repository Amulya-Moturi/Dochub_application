import React from 'react'
import './Dashhome.css'
import { useContext } from 'react'
import { loginContext } from '../../contexts/loginContext'
function Dashhome() {
  let [curruser, logerr, userLoginStatus, loginUser, logoutUser] = useContext(loginContext)
  return (
    <div className="image-container">
         <header className="header">
          <div>
            <h4 className="m-2">Hello,{curruser.username}</h4>
            {/* <p className="m-0">Email : {curruser.email}</p>
            <p className="m-0">Date Of Birth : {curruser.dob}</p> */}
          </div>
          <div className="profileimg m-2">
            <img src={curruser.img} alt="Profile Picture" />
          </div>
        </header>
    </div>
  )
}

export default Dashhome