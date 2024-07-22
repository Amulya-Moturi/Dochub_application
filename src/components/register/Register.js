import React from 'react'
import { useState,useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { TokenContext } from '../../contexts/TokenContext';
import axios from 'axios'
import './Register.css'
function Register() {
  const navigate = useNavigate()
  let[token,login,logout]=useContext(TokenContext)
  let [err, setError] = useState("")
  let [file, setFile] = useState(null)
  let { register, handleSubmit, formState: { errors } } = useForm()
  let addnewUser = (newUser) => {
    let fd = new FormData()
    //append new user to form data
    //append takes only stirng or a blob so we convert new user to string
    fd.append("user", JSON.stringify(newUser))
    //append selected file to formdata
    fd.append("photo", file)
    axios.post("http://localhost:3500/user-api/user-signup", fd)
      .then(res => {
        if (res.status === 201) {
          setError("")
          navigate('/login')
        }
        else {
          setError(res.data.message)
        }
      })
      .catch(err => {
        setError(err.message)
      })
  }
  const onFileSelect = (e) => {
    setFile(e.target.files[0])
  }
  return (
    <div className='bg-image m-0'>
      <div className='col-16'>
        <p className="display-2 text-center text-white ">Register</p>
        {err.length !== 0 && <p className="text-danger display-3 text-center ">{err}</p>}
        <div className='row'>
          <div className='col-11 col-sm-8 col-md-6 mx-auto my-auto'>
            <form onSubmit={handleSubmit(addnewUser)}>
              <div >
                <label htmlFor="username" className="text-white form-label fw-bold">Username</label>
                <input type="text" id="username" className="form-control" {...register("username", { required: true })} />
              </div>
              {errors.name?.type === "required" && <p className="text-danger fw-bold">*Name is required!!</p>}
              <div >
                <label htmlFor="password" className="text-white form-label fw-bold">Password</label>
                <input type="password" id="password" className="form-control" {...register("password", { required: true })} />
              </div>
              {errors.password?.type === "required" && <p className="text-danger fw-bold">*Password is required!!</p>}
              <div>
                <label htmlFor="email" className="text-white form-label fw-bold">Email address</label>
                <input type="email" id="email" className="form-control" {...register("email", { required: true })} />
              </div>
              {errors.email?.type === "required" && <p className="text-danger fw-bold">*Email is required!!</p>}
              <div>
                <label htmlFor="dob" className="text-white form-label fw-bold">Date Of Birth</label>
                <input type="date" id="dob" className="form-control" {...register("dob", { required: true })} />
              </div>
              {errors.dob?.type === "required" && <p className="text-danger fw-bold">*Date Of Birth is required!!</p>}
              <div>
                <label htmlFor="img" className="text-white form-label fw-bold ">Select Profile Pic</label>
                <input type="file" id="img" className="form-control mb-3" {...register("img", { required: true })}
                  onInput={onFileSelect} />
              </div>
              {errors.img?.type === "required" && <p className="text-danger fw-bold">*Image is required!!</p>}
              <div>
                <label htmlFor="pin" className="text-white form-label fw-bold">Confidential pin</label>
                <input type="password" id="pin" className="form-control" {...register("pin", { required: true })} />
              </div>
              {errors.dob?.type === "required" && <p className="text-danger fw-bold">*Pin required!!</p>}
              <button type="submit" className="btn btn-primary float-end">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register