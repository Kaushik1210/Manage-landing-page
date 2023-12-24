import React from 'react'
import './footer.css'
import image from '../image'
import { useForm } from 'react-hook-form'


const Footer = () => {

  const {register,handleSubmit,formState:{errors}} = useForm();

  const onSubmit = (data) =>{
    console.log(data);
  }

  return (
    <>
    <div className='footer'>
      <div className="footer1">
        <div className="footer_logo">
            <img src={image.logofooter} alt="" />
        </div>
        <div className="social_media">
            <img src={image.iconfacebook} alt="fb" />
            <img src={image.iconyoutube} alt="y" />
            <img src={image.icontwitter} alt="t" />
            <img src={image.iconpinterest} alt="p" />
            <img src={image.iconinstagram} alt="insta" />
            
        </div>
      </div>
      <div className="footer2">
            <div className="footer2_left"><a href="">Home</a>
            <a href="">Pricing</a>
            <a href="">Products</a>
            <a href="">About Us</a>
            </div>

            <div className="footer2_right">
            <a href="">Careers</a>
            <a href="">Community</a>
            <a href="">Privacy Policy</a>

            </div>
      

      </div>
      <div className="footer3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="email"
          placeholder='Updates in your inbox…'
          {...register("email",{required:true, pattern:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/})}
          />
          <error className='error'>
            {errors.email?.type==="required"&&"Email is required"}
            {errors.email?.type==="pattern"&&"Please insert a valid email"}
          </error>

          <button className='go'>Go</button>
        </form>

        

      </div>
      
    </div>
    {/* <p className="para">All Rights Reserved</p> */}
    </>
  )
}

export default Footer
