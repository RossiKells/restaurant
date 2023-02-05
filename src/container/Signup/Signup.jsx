import React, { useState,useRef } from 'react'
import './Signup.css'
import {MdOutlineRestaurantMenu} from 'react-icons/md'

const Signup = ({signup}) => {
  console.log(signup)
  const ref=useRef();
  const handleClick=()=>{
    ref.current.className='hidden'
    
  }
  // console.log(close);
 
  return (
        
    <div ref={ref} className={signup?"container":"hidden"}>
      <MdOutlineRestaurantMenu className='logo' fontSize={27} onClick={handleClick} />
      <div className="input">
      <input type="text" placeholder='Username'/>
      <input type="email" placeholder='Email' />
      <input type="Password" placeholder='Password' />
      <input type="Password" placeholder='Confirm password' />
      


      </div>
      <div className="agreement">

      <input type="checkbox" id="agree" name="agree" value="agree"></input>
      <p>I agree with all the terms and conditions</p>
      </div>
      <button >Signup</button>
      
      

    </div>
  )
    
}

export default Signup;