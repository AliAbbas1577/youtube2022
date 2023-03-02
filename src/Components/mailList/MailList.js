import React from 'react'
import mailList from './mailList.css';

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className='mailTitle'>Save time,save money!</h1>
        <span className='mailDesc'>Sign up and we'll send you important info</span>
        <div className='mailInputContainer'>
            <input type="text" placeholder='Enter Email'></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList