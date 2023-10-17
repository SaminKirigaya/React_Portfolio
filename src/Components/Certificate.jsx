import React, { Fragment, useState, useEffect } from 'react'

import react from '../Assets/Images/UC-a96b9954-87eb-44cf-979e-15d97fd10861.jpg'
import reactAdv from '../Assets/Images/UC-75f83832-2971-4c8c-9b88-340478beaeb1.jpg'
import frontend from '../Assets/Images/UC-fb291181-57fe-41dd-bb18-e9fe4f517e31.jpg'
import bootcamp from '../Assets/Images/UC-04cc3bd6-20e8-4682-b236-bcd9f11c193b.jpg'

function Certificate() {
  return (
    <Fragment>

    <div className='sidePageSize' style={{overflowY:'hidden',overflowX:'hidden', zIndex:'-200'}}>
    
        <div className='sidePageSizeExp' style={{overflowY:'hidden',overflowX:'hidden', zIndex:'-200'}}></div>
        
        <h4 className='mx-auto addMargin' style={{color:'white'}}>My Certificates</h4>
        

        <div id="carouselExampleIndicators2" class="carousel slide carouselPosition mx-auto" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
            <img src={react} class="d-block w-100" alt="React Course" />
            </div>
            <div class="carousel-item" data-bs-interval="5000">
            <img src={reactAdv} class="d-block w-100" alt="React Advanced" />
            </div>
            <div class="carousel-item" data-bs-interval="5000">
            <img src={frontend} class="d-block w-100" alt="FrontEnd Course" />
            </div>
            <div class="carousel-item" data-bs-interval="5000">
            <img src={bootcamp} class="d-block w-100" alt="FullStack BootCamp" />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
        
        
        

    </div>    

      
    </Fragment>
  )
}

export default Certificate
