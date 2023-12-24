import React from 'react'
import './App.css'
import './index.css'

import Navbar from './Container/Navbar'
import Header from './Container/Header'
import Midsec from './Container/Midsec'
import Banner from './Container/Banner'
import Footer from './Container/Footer'
import Slider from './Container/Slider'




const App = () => {
  return (
    <>
    
    
    <div className='layout'>
      <div className="top_bg" />

        
      <Navbar/>
      <Header/>
      <Midsec/>
      <Slider/>
      <Banner/>
      <Footer/>
      <div className="mid_bg" />
      <div className="right_bg" />
    </div>
    </>
  )
}

export default App
