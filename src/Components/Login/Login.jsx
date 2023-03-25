import React,{useState} from 'react'
import "./Login.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
const Login = () => {

  const navigate = useNavigate();
  const [user , setUser] = useState({
    
    email : "",
    password : "",
  })

  const handleChange = e =>{
    const {name , value} = e.target
    setUser({
      ...user ,
      [name] : value
    })
  }


  const login = () =>{
    axios.post(("http:localhost:8081/login"),user)
    .then(res => console.log(res))
    navigate("/Landingpage")
  }
  return (
    <div className='login-container'>
        <div className='main-container'>
            <h3>Login</h3>

            <label htmlFor="#" className='labels'>email address</label>
            <input placeholder='enter Email' name='email' value={user.email} className='input-fields' onChange={handleChange} />

            <label htmlFor="#" className='labels'>Password</label>
            <input placeholder='Enter Password'  className='input-fields' onChange={handleChange} name='password'value={user.password} />

        <button className='btn' onClick={login}>Submit</button>
        </div>
    </div>
  )
}

export default Login