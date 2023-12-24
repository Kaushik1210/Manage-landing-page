import React from 'react'
import './slider.css'
import image from '../image'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'




const Slider = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1200, min: 800 },
      items: 2,
      slidesToSlide: 1,
      centerMode:true // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
      slidesToSlide: 1,
      centerMode:false // optional, default to 1.
    }
  };

  

  return (
   <>
   <div className="carousel_sec">

      <h1 className="title slider_title">What they’ve said </h1>
      
      <Carousel responsive={responsive}
      infinite={true}
      centerMode={false}
      autoPlaySpeed={10}
      draggable={true}
      swipeable={true}
      removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
      showDots={true}
      containerClass='container'
      itemClass="card"
      dotlistClass="dot"

      
      >
          
      <div className="team_member ">
      

        <img src={image.avataranisha} alt="" />
        <h4 className='title'>Anisha Li</h4>
        <p className='para'>“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
      </div>

      <div className="team_member ">
        <img src={image.avatarali} alt="" />
        <h4 className='title'>Ali Bravo</h4>
        <p className='para'>“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
      </div>

      <div className="team_member ">
        <img src={image.avatarrichard} alt="" />
        <h4 className='title'>Richard Watts</h4>
        <p className='para'>“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”</p>
      </div>

      <div className="team_member ">
        <img src={image.avatarshanai} alt="" />
        <h4 className='title'>Shanai Gough</h4>
        <p className='para'>“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
      </div>

      </Carousel>
        <div className="slider_button">

        <button className="orange_button">Get Started</button>
        </div>
        
        </div>
      
      </>
     

    
  )
}

export default Slider
