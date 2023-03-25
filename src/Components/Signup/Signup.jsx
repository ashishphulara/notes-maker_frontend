import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (
    <div>
       <div className='signupmain-container'>
            <h3>Signup</h3>
            <label htmlFor="#" className='signup-labels'>email address</label>
            <input placeholder='enter Email' className='signupinput-fields'/>
            <label htmlFor="#" className='signup-labels'>Password</label>
            <input placeholder='Enter Password' className='signupinput-fields'/>
            <label htmlFor="#" className='signup-labels'>Confirm Password</label>
            <input placeholder='Enter Password' className='signupinput-fields'/>
            <button className='signupbtn'>Submit</button>
        </div>
    </div>
  )
}

export default Signup