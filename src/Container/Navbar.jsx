import React, { useRef } from 'react'
import './navbar.css'
import image from '../image'

const Navbar = () => {

  const[toggleMenu,setToggleMenu]=React.useState(false)

  const menuRef=useRef();
  const burgerRef=useRef();

  window.addEventListener("click",(e)=>{
    if(e.target !== menuRef.current && e.target !== burgerRef.current){
      setToggleMenu(false)
    }
  })
  

  return (
    <div className='navbar'>
      
        <div className="logo">
            <img src={image.logo} alt="manage logo" className='header_logo' />
        </div>
        <div className="navbar_menu">
            
                <a href="#">Pricing</a>
                <a href="#">Product</a>
                <a href="#">AboutUs</a>
                <a href="#">Careers</a>
                <a href="#">Community</a>
            
        </div>
        <div className="navbar_button">
            <button className='orange_button'>Get started</button>
        </div>

        <div className="hamburger" onClick={()=>setToggleMenu(!toggleMenu)} >
          

          {toggleMenu ? <img ref={burgerRef} src={image.iconclose} />:<img ref={burgerRef} src={image.iconhamburger} /> }
          
        </div>


        {toggleMenu && (
          <div className="dim">

          <div ref={menuRef} className="hamburger_menu">
                <a href="#">Pricing</a>
                <a href="#">Product</a>
                <a href="#">AboutUs</a>
                <a href="#">Careers</a>
                <a href="#">Community</a>
          </div>
          </div>
          
          
          
        )
        }
      
    </div>
  )
}

export default Navbar
