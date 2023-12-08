import React, { Suspense, Fragment, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const Nav = React.lazy(()=>import('../Common/Nav'))
const Introduction = React.lazy(()=>import('../Components/Introduction'))
const AboutMe = React.lazy(()=>import('../Components/AboutMe'))
const Experience = React.lazy(()=>import('../Components/Experience'))
const Certificate = React.lazy(()=>import('../Components/Certificate'))
const Services = React.lazy(()=>import('../Components/Services'))
const Projects = React.lazy(()=>import('../Components/Projects'))
const Contact = React.lazy(()=>import('../Components/Contact'))

function loadingEffect(){
  return  <div className='container-fluid loader d-flex justify-content-center align-items-center' style={{paddingTop:'45vh'}}>
      <div className="spinner-border desLoad" style={{width: '3rem', height: '3rem', color:'rgb(152, 28, 253)'}} role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      
      
  </div>
}

function Header() {

  const enterPosition2 = window.innerHeight * 0.5;
  

  useEffect(()=>{
    if(window.innerWidth<1023){
    window.addEventListener('scroll', ()=>{
      try{
        let pos1 = document.getElementById("positionAbout")
        let pos2 = pos1.getBoundingClientRect().top
        let pos3 = pos1.getBoundingClientRect().bottom
        const divBox2 = document.getElementById("aboutCardsData")
        const divBox3 = document.getElementById("threeCardsData")

        if (pos2 <= enterPosition2 && pos3 >= enterPosition2) {
          divBox2.style.transform= 'translateX(0%)';
          divBox3.style.transform= 'translateX(0%)';
        } else {
          divBox2.style.transform= 'translateX(-150%)';
          divBox3.style.transform= 'translateX(150%)';
        }

        divBox2.style.transition = 'transform 0.4s';
        divBox3.style.transition = 'transform 0.4s';




        let pos4 = document.getElementById("positionExp")
        let pos5 = pos4.getBoundingClientRect().top
        let pos6 = pos4.getBoundingClientRect().bottom
        const divBox4 = document.getElementById("aboutExperience")
        

        if (pos5 <= enterPosition2 && pos6 >= enterPosition2) {
          divBox4.style.opacity= '1';
         
        } else {
          divBox4.style.opacity= '0';
        
        }

        divBox4.style.transition = 'opacity 0.4s';
        



        let pos7 = document.getElementById("positionCert")
        let pos8 = pos7.getBoundingClientRect().top
        let pos9 = pos7.getBoundingClientRect().bottom
        const divBox5 = document.getElementById("carouselExampleIndicators")
        

        if (pos8 <= enterPosition2 && pos9 >= enterPosition2) {
          divBox5.style.transform= 'translateX(0%)';
         
        } else {
          divBox5.style.transform= 'translateX(-150%)';
          
        }

        divBox5.style.transition = 'transform 0.4s';



        let pos10 = document.getElementById("positionServ")
        let pos11 = pos10.getBoundingClientRect().top
        let pos12 = pos10.getBoundingClientRect().bottom
        const divBox6 = document.getElementById ("servLeft1")
        const divBox7 = document.getElementById ("servLeft2")
        const divBox8 = document.getElementById ("servLeft3")
        const divBox9 = document.getElementById("servRight1")
        const divBox10 = document.getElementById("servRight2")
        const divBox11 = document.getElementById("servRight3")

        if (pos11 <= enterPosition2 && pos12 >= enterPosition2) {
          divBox6.style.transform= 'translateX(0%)';
          divBox9.style.transform= 'translateX(0%)';
          divBox7.style.transform= 'translateX(0%)';
          divBox10.style.transform= 'translateX(0%)';
          divBox8.style.transform= 'translateX(0%)';
          divBox11.style.transform= 'translateX(0%)';
        } else {
          divBox6.style.transform= 'translateX(-150%)';
          divBox9.style.transform= 'translateX(150%)';
          divBox7.style.transform= 'translateX(-150%)';
          divBox10.style.transform= 'translateX(150%)';
          divBox8.style.transform= 'translateX(-150%)';
          divBox11.style.transform= 'translateX(150%)';
        }

        divBox6.style.transition = 'transform 0.4s';
        divBox7.style.transition = 'transform 0.4s';
        divBox8.style.transition = 'transform 0.4s';
        divBox9.style.transition = 'transform 0.4s';
        divBox10.style.transition = 'transform 0.4s';
        divBox11.style.transition = 'transform 0.4s';


       
        let pos13 = document.getElementById("positionProj")
        let pos14 = pos13.getBoundingClientRect().top
        let pos15 = pos13.getBoundingClientRect().bottom
        const divBox12 = document.getElementById("carouselExampleIndicators3")
        

        if (pos14 <= enterPosition2 && pos15 >= enterPosition2) {
          divBox12.style.transform= 'translateX(0%)';
         
        } else {
          divBox12.style.transform= 'translateX(150%)';
          
        }

        divBox12.style.transition = 'transform 0.4s';



        let pos16 = document.getElementById("positionCont")
        let pos17 = pos16.getBoundingClientRect().top
        let pos18 = pos16.getBoundingClientRect().bottom
        const divBox13 = document.getElementById("topBox")
        const divBox14 = document.getElementById("bottomBox")

        if (pos17 <= enterPosition2 && pos18 >= enterPosition2) {
          divBox13.style.transform= 'translateY(0%)';
          divBox14.style.transform= 'translateY(0%)';
        } else {
          divBox13.style.transform= 'translateY(-300%)';
          divBox14.style.transform= 'translateY(300%)';
        }

        divBox13.style.transition = 'transform 0.4s';
        divBox14.style.transition = 'transform 0.4s';



        
      }catch(err){
        console.log(err)
      }
      
    })
  }
  },[])






  return (
    <Fragment>
      <Nav/>

      <Suspense fallback={loadingEffect()}>
        <Introduction />
        <AboutMe />
        <Experience />
        <Certificate />
        <Services />
        <Projects />
        <Contact />
      </Suspense>
      
      
      


    </Fragment>
  )
}

export default Header
