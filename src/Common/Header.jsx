import React, { Suspense, Fragment, useState, useEffect } from 'react'


const Nav = React.lazy(()=>import('../Common/Nav'))
const Introduction = React.lazy(()=>import('../Components/Introduction'))
const AboutMe = React.lazy(()=>import('../Components/AboutMe'))
const Experience = React.lazy(()=>import('../Components/Experience'))
const Certificate = React.lazy(()=>import('../Components/Certificate'))
const Services = React.lazy(()=>import('../Components/Services'))
const Projects = React.lazy(()=>import('../Components/Projects'))
const Contact = React.lazy(()=>import('../Components/Contact'))

function loadingEffect(){
  return  <div className='container-fluid loader d-flex justify-content-center align-items-center'>
      <div className="spinner-border desLoad" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      
      
  </div>
}

function Header() {

  return (
    <Fragment>
      <Nav/>

      <Suspense fallback={loadingEffect()}>
        <Introduction />
      </Suspense>
      
      <AboutMe />
      <Experience />
      <Certificate />
      <Services />
      <Projects />
      <Contact />
      


    </Fragment>
  )
}

export default Header
