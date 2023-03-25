import React from 'react'
import {useNavigate} from "react-router-dom"
import {HouseLine ,Plus ,Trash ,Export } from "phosphor-react"
import "./header.css"

const Header = () => {

    const navigate = useNavigate()
    const handleHome = ()=>{
        navigate("/LandingPage")
    }

    const handlePlus = ()=>{
        navigate("/PostForm")
    }

    const handleTrash = ()=>{
     
    }


    const handleExport = ()=>{

    }
  return (
    <div className='header'>
        <div id='symbols'>
            <label htmlFor="#" className='labels-header'>Home</label>
        <HouseLine size={32} id="House" onClick={handleHome}/>

        <label htmlFor="#" className='labels-header' >Add Note</label>
        <Plus size={32} id="plus"  onClick={handlePlus}/>

        <label htmlFor="#" className='labels-header' >Delete All</label>
        <Trash size={32}  id="trash" onClick={handleTrash}/>

        <label htmlFor="#" className='labels-header' >Export</label>
        <Export size={32}  id="export" onClick={handleExport}/>
        </div>
      
    </div>
  )
}

export default Header