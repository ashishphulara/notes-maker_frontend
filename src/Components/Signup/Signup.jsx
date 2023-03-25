import React,{useState} from 'react'
import "./Signup.css"
import axios from "axios"

const Signup = () => {

  const [user , setUser] = useState({
  
    email : "",
    password : "",
    confirmPassword : ""
  })

  const handleChange = e =>{
    const {name , value} = e.target
    setUser({
      ...user ,
      [name] : value
    })
  }

  const Register= ()=>{
    const {email , password , confirmPassword} = user;
    if( email && password && (password === confirmPassword)){
      axios.post("http://localhost:8081/register",user)
      .then(res => console.log(res))
    }
    
  }
  return (
    <div>
       <div className='signupmain-container'>
            <h3>Signup</h3>
            <label htmlFor="#" className='signup-labels'>email address</label>
            <input name='email' value={user.email} placeholder='enter Email' className='signupinput-fields' onChange={handleChange} />

            <label htmlFor="#" className='signup-labels'>Password</label>
            <input name='password'value={user.password} placeholder='Enter Password' className='signupinput-fields' onChange={handleChange} />

            <label htmlFor="#" className='signup-labels'>Confirm Password</label>
            <input name='confirmPassword' value={user.confirmPassword} placeholder='ReEnter Password' className='signupinput-fields' onChange={handleChange} />

            <button className='signupbtn' onClick={Register}>Submit</button>
        </div>
    </div>
  )
}

export default Signup