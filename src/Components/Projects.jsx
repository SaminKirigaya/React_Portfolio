import React, { Fragment, useState, useEffect } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

import project1 from '../Assets/Images/project1.jpg'
import project2 from '../Assets/Images/project2.jpg'
import project3 from '../Assets/Images/project3.jpg'
import project4 from '../Assets/Images/project4.jpg'
import project5 from '../Assets/Images/project5.png'
import project6 from '../Assets/Images/project6.png'
import project7 from '../Assets/Images/project7.jpg'
import project8 from '../Assets/Images/project8.png'
import project9 from '../Assets/Images/project9.jpg'
import project10 from '../Assets/Images/project10.jpg'
import project11 from '../Assets/Images/project11.jpg'
import project12 from '../Assets/Images/project12.jpg'
import project13 from '../Assets/Images/project13.jpg'
import project14 from '../Assets/Images/project14.jpg'
 
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';


function Projects() {
  const {scrollY}=useScroll()
  const enterPosition2 = window.innerHeight * 0.5;
  const sendRes= ()=>{
    if(window.innerWidth<1000){
      return [4*window.innerHeight, 5*window.innerHeight+5*(window.innerHeight/14.2)+6*(((window.innerHeight/14.2)/10)), 6*window.innerHeight]
    }else{
      return [4*window.innerHeight, 5*window.innerHeight, 6*window.innerHeight]
    }
  }

  const animateEffect=()=>{
    if(window.innerWidth>1000){
      return [1000, 0, -1000]
    }else{
      return [0, 0, 0]
    }
  }

  const changeX= useTransform(scrollY, sendRes(), animateEffect())

  useEffect(()=>{
    if(window.innerWidth<1023){
    window.addEventListener('scroll', ()=>{
      try{
        let pos = document.getElementById("positionProj")
        let pos2 = pos.getBoundingClientRect().top
        let pos3 = pos.getBoundingClientRect().bottom
        const divBox12 = document.getElementById("carouselExampleIndicators3")
        

        if (pos2 <= enterPosition2 && pos3 >= enterPosition2) {
          divBox12.style.transform= 'translateX(0%)';
         
        } else {
          divBox12.style.transform= 'translateX(150%)';
          
        }

        divBox12.style.transition = 'transform 0.4s';
       

        console.log(pos2,pos3)
      }catch(err){
        console.log(err)
      }
      
    })
  }
  },[])

  return (
    <Fragment>
    <div className='sidePageSize' style={{overflowY:'hidden',overflowX:'hidden', zIndex:'200'}}>
    
    <div className='topDesign'></div>
    
    <div id='positionProj'></div>
    
    <motion.h4 whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className='mx-auto positionTitleProjects' style={{cursor:'pointer'}}>Completed Projects</motion.h4>
    



    {window.innerWidth>1023 ? 
      <motion.div id="carouselExampleIndicators3" className="carousel slide carouselPositionProjects mx-auto" data-bs-ride="carousel" style={{x:changeX}}>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="5" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="6" aria-label="Slide 7"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="7" aria-label="Slide 8"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="8" aria-label="Slide 9"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="9" aria-label="Slide 10"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="10" aria-label="Slide 11"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="11" aria-label="Slide 12"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="12" aria-label="Slide 13"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="13" aria-label="Slide 14"></button>
      
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={project1} className="d-block w-100 imageHeight bluring" alt="..."/>
          <div className="carousel-caption d-flex">
              
              <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Modern Personal Portfolio Design With React, Css & Framer Motion. &nbsp;<motion.a href="https://github.com/SaminKirigaya/React_Portfolio" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
              style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                View
              </motion.a></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={project2} className="d-block w-100 imageHeight  bluring" alt="..." />
          <div className="carousel-caption d-flex">
              
              <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Online Code Editor With Html5, Js, Bootstrap. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Online_Frontend_Code_Editor_v3.github.io" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
              style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                View
              </motion.a></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={project3} className="d-block w-100 imageHeight bluring" alt="..." />
          <div className="carousel-caption d-flex">
              
              <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Video Sharing Platform FrontEnd With React, Redux, Framer Motion. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Video_Sharing_Platform_Forum_FrontEnd_REACT_REDUX_FRAMER" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
              style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                View
              </motion.a></p>
          </div>
        </div>
        <div className="carousel-item">
        <img src={project4} className="d-block w-100 imageHeight  bluring" alt="..." />
        <div className="carousel-caption d-flex">
              
              <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Video Sharing Platform BackEnd With Node, Express Js. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Video_Sharing_Platform_Backend_MERN_Stack" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
              style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                View
              </motion.a></p>
          </div>
       </div>
       <div className="carousel-item">
        <img src={project5} className="d-block w-100 imageHeight  bluring" alt="..." />
        <div className="carousel-caption d-flex">
              
              <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Messaging Server Like Whats App FrontEnd With React Js. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Chat_Web_Server_FrontEnd_REACT_JS" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
              style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                View
              </motion.a></p>
          </div>
       </div>
       <div className="carousel-item">
        <img src={project6} className="d-block w-100 imageHeight  bluring" alt="..." />
        <div className="carousel-caption d-flex">
              
              <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Messaging Server Like Whats App BackEnd With Node, Express Js. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Chat_Web_Server_BackEnd_RestApi_with_NODE_EXPRESS" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
              style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                View
              </motion.a></p>
          </div>
       </div>
       <div className="carousel-item">
        <img src={project7} className="d-block w-100 imageHeight  bluring" alt="..." />
        <div className="carousel-caption d-flex">
              
              <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Forum Server FrontEnd With React Js, Bootstrap. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Forum_FrontEnd_With_React_Js__NODE_JS__OPTIMIZED-" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
              style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                View
              </motion.a></p>
          </div>
       </div>
       <div className="carousel-item">
        <img src={project8} className="d-block w-100 imageHeight  bluring" alt="..." />
        <div class="carousel-caption d-flex">
              
              <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Forum Server BackEnd With Node, Express Js. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Forum_Backend_REST_API_Converting_To_NODE_JS" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
              style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                View
              </motion.a></p>
          </div>
       </div>
       <div className="carousel-item">
        <img src={project9} className="d-block w-100 imageHeight  bluring" alt="..." />
        <div className="carousel-caption d-flex">
              
              <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Ecommerce Site FrontEnd With React, Bootstrap, Css & Framer Motion. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Ecommerce_web_app_FrontEnd_with_REACT_JS_-STRIPE_PAY-" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
              style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                View
              </motion.a></p>
          </div>
       </div>
       <div className="carousel-item">
        <img src={project10} className="d-block w-100 imageHeight  bluring" alt="..." />
        <div className="carousel-caption d-flex">
              
              <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Ecommerce Site With Stripe Payment BackEnd With Node, Express Js. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Ecommerce_web_BackEnd_rest_api_with_NODE_JS_-STRIPE_PAY-" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
              style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                View
              </motion.a></p>
          </div>
       </div>
       <div className="carousel-item">
        <img src={project11} className="d-block w-100 imageHeight  bluring" alt="..." />
        <div className="carousel-caption d-flex">
              
              <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Restaurant Website FrontEnd With HTML, Css, Bootstrap, Js. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Restaurant_Web_Design_With_Es7_Bootstrap5.github.io" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
              style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                View
              </motion.a></p>
          </div>
       </div>
       <div className="carousel-item">
        <img src={project12} className="d-block w-100 imageHeight  bluring" alt="..." />
        <div className="carousel-caption d-flex">
              
              <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Personal Portfolio Conversion With Basic HTML, Css, Bootstrap, Js. &nbsp;<motion.a href="https://github.com/SaminKirigaya/My_Personal_Portfolio_.github.io" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
              style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                View
              </motion.a></p>
          </div>
       </div>
       <div className="carousel-item">
        <img src={project13} className="d-block w-100 imageHeight  bluring" alt="..." />
        <div className="carousel-caption d-flex">
              
              <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Basic Simple Portfolio Design With HTML, Css, Js. &nbsp;<motion.a href="https://github.com/SaminKirigaya/simple-looking-portfolio.github.io" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
              style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                View
              </motion.a></p>
          </div>
        
       </div>
       <div className="carousel-item">
        <img src={project14} className="d-block w-100 imageHeight  bluring" alt="..." />
        <div className="carousel-caption d-flex">
              
              <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Custom Cool Login & Reg Page Design With HTML, Css, Js. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Frontenddesign_for_creative_login_reg_form.github.io" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
              style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                View
              </motion.a></p>
          </div>

       </div>

      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </motion.div> :

    <div id="carouselExampleIndicators3" className="carousel slide carouselPositionProjects mx-auto" data-bs-ride="carousel" style={{x:changeX}}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="7" aria-label="Slide 8"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="8" aria-label="Slide 9"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="9" aria-label="Slide 10"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="10" aria-label="Slide 11"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="11" aria-label="Slide 12"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="12" aria-label="Slide 13"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="13" aria-label="Slide 14"></button>
        
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={project1} className="d-block w-100 imageHeight bluring" alt="..."/>
            <div className="carousel-caption d-flex">
                
                <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Modern Personal Portfolio Design With React, Css & Framer Motion. &nbsp;<motion.a href="https://github.com/SaminKirigaya/React_Portfolio" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
                style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                  View
                </motion.a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={project2} className="d-block w-100 imageHeight  bluring" alt="..." />
            <div className="carousel-caption d-flex">
                
                <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Online Code Editor With Html5, Js, Bootstrap. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Online_Frontend_Code_Editor_v3.github.io" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
                style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                  View
                </motion.a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={project3} className="d-block w-100 imageHeight bluring" alt="..." />
            <div className="carousel-caption d-flex">
                
                <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Video Sharing Platform FrontEnd With React, Redux, Framer Motion. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Video_Sharing_Platform_Forum_FrontEnd_REACT_REDUX_FRAMER" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
                style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                  View
                </motion.a></p>
            </div>
          </div>
          <div className="carousel-item">
          <img src={project4} className="d-block w-100 imageHeight  bluring" alt="..." />
          <div className="carousel-caption d-flex">
                
                <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Video Sharing Platform BackEnd With Node, Express Js. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Video_Sharing_Platform_Backend_MERN_Stack" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
                style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                  View
                </motion.a></p>
            </div>
         </div>
         <div className="carousel-item">
          <img src={project5} className="d-block w-100 imageHeight  bluring" alt="..." />
          <div className="carousel-caption d-flex">
                
                <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Messaging Server Like Whats App FrontEnd With React Js. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Chat_Web_Server_FrontEnd_REACT_JS" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
                style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                  View
                </motion.a></p>
            </div>
         </div>
         <div className="carousel-item">
          <img src={project6} className="d-block w-100 imageHeight  bluring" alt="..." />
          <div className="carousel-caption d-flex">
                
                <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Messaging Server Like Whats App BackEnd With Node, Express Js. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Chat_Web_Server_BackEnd_RestApi_with_NODE_EXPRESS" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
                style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                  View
                </motion.a></p>
            </div>
         </div>
         <div className="carousel-item">
          <img src={project7} className="d-block w-100 imageHeight  bluring" alt="..." />
          <div className="carousel-caption d-flex">
                
                <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Forum Server FrontEnd With React Js, Bootstrap. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Forum_FrontEnd_With_React_Js__NODE_JS__OPTIMIZED-" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
                style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                  View
                </motion.a></p>
            </div>
         </div>
         <div className="carousel-item">
          <img src={project8} className="d-block w-100 imageHeight  bluring" alt="..." />
          <div class="carousel-caption d-flex">
                
                <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Forum Server BackEnd With Node, Express Js. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Forum_Backend_REST_API_Converting_To_NODE_JS" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
                style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                  View
                </motion.a></p>
            </div>
         </div>
         <div className="carousel-item">
          <img src={project9} className="d-block w-100 imageHeight  bluring" alt="..." />
          <div className="carousel-caption d-flex">
                
                <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Ecommerce Site FrontEnd With React, Bootstrap, Css & Framer Motion. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Ecommerce_web_app_FrontEnd_with_REACT_JS_-STRIPE_PAY-" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
                style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                  View
                </motion.a></p>
            </div>
         </div>
         <div className="carousel-item">
          <img src={project10} className="d-block w-100 imageHeight  bluring" alt="..." />
          <div className="carousel-caption d-flex">
                
                <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Ecommerce Site With Stripe Payment BackEnd With Node, Express Js. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Ecommerce_web_BackEnd_rest_api_with_NODE_JS_-STRIPE_PAY-" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
                style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                  View
                </motion.a></p>
            </div>
         </div>
         <div className="carousel-item">
          <img src={project11} className="d-block w-100 imageHeight  bluring" alt="..." />
          <div className="carousel-caption d-flex">
                
                <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Restaurant Website FrontEnd With HTML, Css, Bootstrap, Js. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Restaurant_Web_Design_With_Es7_Bootstrap5.github.io" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
                style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                  View
                </motion.a></p>
            </div>
         </div>
         <div className="carousel-item">
          <img src={project12} className="d-block w-100 imageHeight  bluring" alt="..." />
          <div className="carousel-caption d-flex">
                
                <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Personal Portfolio Conversion With Basic HTML, Css, Bootstrap, Js. &nbsp;<motion.a href="https://github.com/SaminKirigaya/My_Personal_Portfolio_.github.io" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
                style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                  View
                </motion.a></p>
            </div>
         </div>
         <div className="carousel-item">
          <img src={project13} className="d-block w-100 imageHeight  bluring" alt="..." />
          <div className="carousel-caption d-flex">
                
                <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Basic Simple Portfolio Design With HTML, Css, Js. &nbsp;<motion.a href="https://github.com/SaminKirigaya/simple-looking-portfolio.github.io" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
                style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                  View
                </motion.a></p>
            </div>
          
         </div>
         <div className="carousel-item">
          <img src={project14} className="d-block w-100 imageHeight  bluring" alt="..." />
          <div className="carousel-caption d-flex">
                
                <p className='mx-auto text-center responsiveProjectTitle' style={{color:'rgb(152, 28, 253)', fontWeight:'bold'}}>Custom Cool Login & Reg Page Design With HTML, Css, Js. &nbsp;<motion.a href="https://github.com/SaminKirigaya/Frontenddesign_for_creative_login_reg_form.github.io" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" className="btn btn-primary"
                style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
                  View
                </motion.a></p>
            </div>

         </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    }
        

      

      <div className='bottomDesign'></div>


    
    
    
    </div>
    
    
    
    </Fragment>
  )
}

export default Projects
