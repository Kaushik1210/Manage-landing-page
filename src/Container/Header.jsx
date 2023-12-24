import React from 'react'
import './header.css'
import image from '../image'

const Header = () => {
  return (
    
        
    <div className='header'>
        
      <div className="header_left_content">
        <h1 className='title header_title'>Bring everyone together to build better products.</h1>
        <p className='para header_para'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
        <button className='orange_button'>Get Started</button>

      </div>
      <div className="header_right_img">
            <img  className="header_img" src={image.illustrationintro} alt="header image" />
      </div>
    </div>
    
  )
}

export default Header
