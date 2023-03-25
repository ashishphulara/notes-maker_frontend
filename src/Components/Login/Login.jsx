import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className='login-container'>
        <div className='main-container'>
            <h3>Login</h3>
            <label htmlFor="#" className='labels'>email address</label>
            <input placeholder='enter Email' className='input-fields'/>
            <label htmlFor="#" className='labels'>Password</label>
            <input placeholder='Enter Password' className='input-fields'/>
        <button className='btn'>Submit</button>
        </div>
    </div>
  )
}

export default Login