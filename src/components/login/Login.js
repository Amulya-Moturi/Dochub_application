import React from 'react'
import {useEffect ,useContext} from 'react'
import { useForm } from 'react-hook-form'
import './Login.css'
import { loginContext } from '../../contexts/loginContext'
import { TokenContext } from '../../contexts/TokenContext';
import { useNavigate } from 'react-router-dom'
function Login() {
  let [curruser,logerr,userLoginStatus,loginUser,logoutUser]=useContext(loginContext)
  let [token,login,logout]=useContext(TokenContext)
  let {register,handleSubmit,formState:{errors}}=useForm()
  let navigate=useNavigate()
  let handleSubmitUser=(userCredObj)=>{
    loginUser(userCredObj)
    login(localStorage.getItem("token"));
    //here if we write code for checking user login status it only executes once at time of login so that this does not work 
    //so we write this in useeffect which rerenders for every state change
  }
  useEffect(()=>{
    if(userLoginStatus===true)
      {
        navigate("/dashboard")
      }
  },[userLoginStatus])
  return (
    <div className='container-fluid bg-image'>
      <p className="display-3 text-center text-white">Login</p>
       {logerr.length!==0 && <p className="text-danger display-3 text-center fw-bold">{logerr}</p>} 
      <div className='row'>
        <div className='col-11 col-sm-8 col-md-6 mx-auto my-auto'>
      <form onSubmit={handleSubmit(handleSubmitUser)}>
      <div class="mb-3">
    <label htmlFor="username" className="text-white form-label fw-bold">Username</label>
    <input type="text" className="form-control" {...register("username",{required:true})}/>
  </div>
  {errors.username?.type==="required" && <p className="text-danger fw-bold">*Name is required!!</p>}
  <div className="mb-3">
    <label htmlFor="password" className="text-white form-label fw-bold">Password</label>
    <input type="password" className="form-control" {...register("password",{required:true})}/>
  </div>
  {errors.password?.type==="required" && <p className="text-danger fw-bold">*Password is required!!</p>}
  <button type="submit" className="btn btn-primary float-end">Submit</button>
</form>
</div>
</div>
   </div>
  )
}

export default Login