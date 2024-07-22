import { useState,useContext } from "react"
import {loginContext} from './loginContext'
import axios from "axios"
function UserLoginStore({children}) {
    let [curruser,setUser]=useState({});
    let [userLoginStatus,setUserLoginStatus]=useState(false)
    let [logerr,setLogError]=useState("")
    //function to make user login request
    const loginUser=(userCredObj)=>{
        axios.post("http://localhost:3500/user-api/login",userCredObj)
        .then(res=>{
            if(res.data.message==="success"){
                //save token to local storage
                localStorage.setItem("token",res.data.token)
                setUserLoginStatus(true)
                setUser({...res.data.user});
                setLogError("")
                console.log("navigated to user dashboard")
            }
            else
            {
                setLogError(res.data.message)
                console.log("user login failed ",res.data.message)
            }
        })
        .catch(err=>{
            setLogError(err.message)
        })
    }
    //logout functionality
    const logoutUser=()=>{
        localStorage.clear()
        setUserLoginStatus(false)
    }
  return (
    <loginContext.Provider value={[curruser,logerr,userLoginStatus,loginUser,logoutUser]}>
        {children}
    </loginContext.Provider>
  )
}

export default UserLoginStore