import React from 'react'
import Header from '../Header/header'
import "./Postform.css"



const PostForm = () => {

    const HandlePost =()=>{

    }
  return (
    <div>
        <Header/>
        <div className='title-description'>
         
            <label htmlFor="#" className='labels-title'>Title</label>
        <input type={Text} className="title" placeholder='Title'/>

        <label htmlFor="#" className='labels-title' >description</label>
        <input type={Text} className="description" placeholder='What on  your mind..?'/>

        <button onClick={HandlePost} className="post-btn" >ADD-Note</button>
        </div>
       
    </div>
  )
}

export default PostForm