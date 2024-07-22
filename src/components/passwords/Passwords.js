import React from 'react'
import './Passwords.css'
import { useState,useContext } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import { loginContext } from '../../contexts/loginContext'
import { TokenContext } from "../../contexts/TokenContext";
import icon1 from '../../images/password.png'
import { useEffect } from 'react'
function Passwords(){
  let [curruser, logerr, userLoginStatus, loginUser, logoutUser]=useContext(loginContext)
  let[token,login,logout]=useContext(TokenContext)
  let [err, setError] = useState("")
  let [doc,setDoc]=useState("")
  let[image1,setImage]=useState("")
  let [file, setFile] = useState(null)
  let [show,setShow]=useState(false)
  let showModal=()=>setShow(true);
  let closeModal=()=>setShow(false);
  let { register, handleSubmit, formState: { errors } } = useForm()
  let [data1,setData]=useState([]);
  let [newDataAdded, setNewDataAdded] = useState(false); 
  let viewUser=(userObj)=>{
    showModal()
    setDoc(userObj.title)
    setImage(userObj.password)
  }
  let close=()=>
  {
    closeModal()
  }

  let deleteUser=(dataObj)=>{
    console.log(dataObj);
    axios.delete(`http://localhost:3500/user-api/delete-data/${dataObj.username}`, {
      params: {
        userId:8,
        title:dataObj.title
      },
      headers: {
        'Authorization': `bearer ${token}`
      }
    })
    .then(response=>{
      if(response.status==200 && response.data.message==="success")
        {
          console.log("data deleted");
          getUserData();
        }
    })
    .catch(err=>{
     console.log("error is ",err.message)
    })
  }
const getUserData = () => {
  console.log(curruser.username);
    axios.get(`http://localhost:3500/user-api/get-data/${curruser.username}`, {
      params: {
        userId:8
      },
      headers: {
        'Authorization': `bearer ${token}`
      }
    })
    .then(response=>{
      if(response.status==200)
      {
        console.log(response.data.payload)
        setData(response.data.payload);
      }
    })
  .catch (err=> {
    setError(err.message);
  })
};

useEffect(()=>{
  getUserData()
},[newDataAdded])

// useEffect(() => {
//   if (data1) {
//     console.log(data1);
//   }
// }, [data1]);
  let addnewData = (newData) => {
      newData.ids=8;
      newData.username=curruser.username;
      console.log(newData);
    axios.post("http://localhost:3500/user-api/storeee",newData,{
      headers: {
        'Authorization': `bearer ${token}`
      }
    })
      .then(res => {
        if (res.status === 201) {
          setError("")
          console.log("stored")
          setNewDataAdded(prev => !prev);
        }
        else {
          setError(res.data.message)
        }
      })
      .catch(err => {
        setError(err.message)
      })
  }
  return (
    <div>
    <div className='container'>
    <p className="display-4 text-center mt-5">Passwords</p>
      <div className='row mt-5'>
        <div className='col-10 col-sm-8 col-md-6 mx-auto'>     
          <form onSubmit={handleSubmit(addnewData)}>
            <div >
              <label htmlFor="title" className=" form-label fw-bold">Title</label>
              <input type="text" id="title" className="form-control" {...register("title", { required: true })} />
              </div>
              {errors.title?.type === "required" && <p className="text-danger fw-bold">*Title is required!!</p>}
            {/* {errors.title?.type === "required" && <p className="text-danger fw-bold">*Title is required!!</p>} */}
            <div >
              <label htmlFor="description" className=" form-label fw-bold">Description</label>
              <input type="text" id="description" className="form-control" {...register("description")} />
            </div>
            {/* {errors.description?.type === "required" && <p className="text-danger fw-bold">*description is required!!</p>} */}
            <div>
              <label htmlFor="password" className=" form-label fw-bold ">Password</label>
              <input type="text" id="password" className="form-control mb-3" {...register("password", { required: true })}/>
            </div>
            {errors.password?.type === "required" && <p className="text-danger fw-bold">*password is required!!</p>}
            {/* {errors.file.type === "required" && <p className="text-danger fw-bold">*File is required!!</p>} */}
            <button type="submit" className="btn btn-primary float-end mb-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
    {data1.length > 0 ?
    <div className='row row-cols-1 row-cols-sm-3 row-cols-md-4 g-4 m-2'>
    {
      data1.map((dataObj)=>
        <div className="col text-center mx-auto" key={dataObj.id}>
          
      <div className="card">
        <img src={icon1} className='mx-auto p-3 profilee' alt=""/>
        <div className='card-body p-1'>
          <p className='lead namee pb-1'>{dataObj.title}</p>
          <p className='pb-1'>{dataObj.description}</p>
          
          <button className='btn view-btn float-start' onClick={()=>viewUser(dataObj)}>View</button>
          <button className='btn delete-btn float-end' onClick={()=>deleteUser(dataObj)}>Delete</button>
          </div>
          </div>
      </div>
        )
    }
  </div>:<h1 className='text-center'>Empty</h1>
}
  <Modal show={show} onHide={closeModal} backdrop='static' centered className='modal p-4 m-0' width="400px" height="600px">
        <Modal.Header>
          <Modal.Title>{doc}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='lead display-6'>{image1}</p>
        </Modal.Body>
      <Modal.Footer>
            {/* <button className="btn save-btn btn-warning" onClick={downloadFile}>Download</button>  */}
        <button className="btn save-btn btn-warning" onClick={close}>Close</button> 
      </Modal.Footer>
      </Modal>
  </div>
  )
}

export default Passwords