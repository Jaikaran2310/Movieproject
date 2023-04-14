import React from 'react'
import'./Error.css'
import { useNavigate } from 'react-router-dom';
const Error = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/Home')
  return (
    <div className='error'>
      <div>
        <span>Oops!</span>
        <p className='page'>404-PAGE NOT FOUND</p>
        <button className='btn' onClick={handleClick}> Go to Home</button>
      </div>
    </div>
  )
}

export default Error
