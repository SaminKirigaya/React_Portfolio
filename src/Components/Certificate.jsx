import React, { Fragment, useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {motion,useScroll,useTransform} from 'framer-motion'

import react from '../Assets/Images/UC-a96b9954-87eb-44cf-979e-15d97fd10861.jpg'
import reactAdv from '../Assets/Images/UC-75f83832-2971-4c8c-9b88-340478beaeb1.jpg'
import frontend from '../Assets/Images/UC-fb291181-57fe-41dd-bb18-e9fe4f517e31.jpg'
import bootcamp from '../Assets/Images/UC-04cc3bd6-20e8-4682-b236-bcd9f11c193b.jpg'



function Certificate() {
  const {scrollY}=useScroll()

  const sendRes= ()=>{
    if(window.innerWidth<1000){
      return [2*window.innerHeight, 3*window.innerHeight+3*(window.innerHeight/14.2)+3*(((window.innerHeight/14.2)/10)), 4*window.innerHeight]
    }else{
      return [2*window.innerHeight, 3*window.innerHeight, 4*window.innerHeight]
    }
  }

  const animateEffect = ()=>{
    if(window.innerWidth>1000){
      return [-1000, 0, 1000]
    }else{
      return [0, 0, 0]
    }
  }

  const changeX= useTransform(scrollY, sendRes(),animateEffect())
    
  return (
    <Fragment>

    <div className='sidePageSize' style={{overflowY:'hidden',overflowX:'hidden', zIndex:'200'}}>
    
        <div className='sidePageSizeExp' style={{overflowY:'hidden',overflowX:'hidden', zIndex:'-200'}}></div>
        
        <motion.h4 whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className='mx-auto addMargin' style={{color:'white', cursor:'pointer'}}>My Certificates</motion.h4>
        


        <motion.div id="carouselExampleIndicators" className="carousel slide carouselPosition mx-auto" data-bs-ride="carousel" style={{x:changeX}}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={react} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={reactAdv} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={frontend} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
          <img src={bootcamp} className="d-block w-100" alt="..." />
         </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </motion.div>
        
        




    </div>    

      
    </Fragment>
  )
}

export default Certificate
