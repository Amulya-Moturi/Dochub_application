import React from 'react'
import { useForm } from 'react-hook-form'
import { useState,useContext } from 'react'
import { TokenContext } from '../../contexts/TokenContext';
import { useNavigate } from 'react-router-dom'
import { loginContext } from '../../contexts/loginContext'
function Confidential() {
  const navigate = useNavigate()
  let [curruser,logerr,userLoginStatus,loginUser,logoutUser]=useContext(loginContext)
  let { register, handleSubmit, formState: { errors } } = useForm()
  // let[token,login,logout,pin,logpin]=useContext(TokenContext)
  let [err, setError] = useState("")
  let addnewUser = (newUser) => {
    console.log(newUser.password);
   if(curruser.pin==newUser.password)
   {
    navigate('/dashboard/confidentialhome');
   }
   else
   {
      setError("incorrect Password");
   }
  }
  return (
      <div className='container-fluid'>
        <p className="display-4 text-center mt-5">Confidential</p>
        {err.length !== 0 && <p className="text-danger display-3 text-center ">{err}</p>}
        <div className='row mt-9'>
          <div className='col-11 col-sm-8 col-md-6 mx-auto my-auto'>
        <form onSubmit={handleSubmit(addnewUser)} className="top">
    <div className="mb-3">
      <label htmlFor="password" className="form-label fw-bold">Enter pin : </label>
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

export default Confidential