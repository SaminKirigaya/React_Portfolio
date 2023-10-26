import React, { Fragment, useState, useEffect, Suspense } from 'react'
import Typed from 'typed.js';
import {motion, useAnimation, useScroll, useTransform} from 'framer-motion'

import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

import homeImgMy from '../Assets/Images/myimgbg.png'

function loadingEffect(){
  return  <div className='container-fluid loader d-flex justify-content-center align-items-center'>
      <div className="spinner-border desLoad" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      
      
  </div>
}

function Introduction() {

  const {scrollY} = useScroll()
  const [volatileFont, setFontSize] = useState('')


  const controls = useAnimation();
  const controls2 = useAnimation();

  const a = 400; // Semi-major axis
  const b = 150; // Semi-minor axis
  const numPoints = 100;
  const mainX = []
  const mainY=[]

  const a2 = -200; // Semi-major axis
  const b2 = 200; // Semi-minor axis
  const numPoints2 = 100;
  const mainX2 = []
  const mainY2=[]

  const path = Array.from({ length: numPoints }, (_, i) => {
    const theta = (2 * Math.PI * i) / numPoints;
    const x = a * Math.cos(theta);
    const y = b * Math.sin(theta);
    mainX.push(x)
    mainY.push(y)
  });


  const path2 = Array.from({ length: numPoints2 }, (_, i) => {
    const theta = (2 * Math.PI * i) / numPoints2;
    const x = a2 * Math.cos(theta);
    const y = b2 * Math.sin(theta);
    mainX2.push(x)
    mainY2.push(y)
  });


  const yShift = useTransform(scrollY, [0,window.innerHeight], [0,-1000])
  

  useEffect(() => {

    if(window.innerWidth>319 && window.innerWidth<359){
      setFontSize('0.65rem')
    }else{
      setFontSize('0.75rem')
    }

    controls.start({
      
      scale:[0.3,1,0.3],
      x: mainX,
      y: mainY,
      transition: { duration: 10, repeat: Infinity, ease: 'linear' },
    });

    controls2.start({
      
      scale:[0.3,1,0.3],
      x: mainX2,
      y: mainY2,
      transition: { duration: 10, repeat: Infinity, ease: 'linear' },
    });
    

    console.log(window.innerHeight)
    // Define the options for Typed.js
    const options = {
      strings: ['Samin Arnob.', 'A Full-Stack Developer.', 'A MERN Stack Developer.', 'Always Free For Your Project.'],
      typeSpeed: 100, // typing speed in milliseconds
      backSpeed: 50, // backspacing speed in milliseconds
      loop: true, // loop the animation
    };

    // Create a new Typed instance with the target element and options
    const typed = new Typed('.typing-animation', options);

    // Clean up the Typed instance on unmount
    return () => {
      typed.destroy();
    };
  }, []);


  return (

    <Fragment>
      <div className='sidePageSize' style={{overflowY:'hidden',overflowX:'hidden'}}> {/* base box which will next time be renamed with same class properties but different backgroundcol and name in different component.*/}

        <motion.div animate={{x:[-1000,0], transition:{duration: 0.8, type:'spring', stiffness:350}}} whileHover={{scale: [1,1.1],transition:{duration:1, type:'spring', stiffness:350 }}} className='skillDetails d-flex justify-content-center align-items-center flex-column' style={{cursor:'pointer', x:yShift}}>
          <p className='mx-auto'>Hello_&#128151;</p>
          <p style={{fontSize:'1.5rem'}} className='text-center'>I'm <span className='typing-animation' style={{fontWeight:'bold',color:'rgb(152, 28, 253)'}}></span></p>
          <p className='text-center'>I Believe Coding Is Like An Artwork. So, When I Code I Try To Make It As Precise As Possible &#128151;</p>
          <p>
          
          <motion.a href="https://github.com/SaminKirigaya" whileHover={{scale:[1,1.3],borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" class="btn btn-primary"
          style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: volatileFont, marginRight:'1rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
            Github <GitHubIcon fontSize='small' />
          </motion.a>

          <motion.a href="https://www.facebook.com/samin.arnob.3" whileHover={{scale:[1,1.2], borderRadius:'0.3rem'}} transition={{ type:'spring', stiffness:400 }} type="button" class="btn btn-primary"
          style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: volatileFont, backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
            Let's Talk <MailIcon fontSize='small' />
          </motion.a>

          </p>
        </motion.div>


        <motion.div animate={{scale:[1.1,1,1.1]}} transition={{duration:1.8,repeat:'infinity'}} className='introPageImgBox d-flex justify-content-center align-items-center flex-column'>
          
          <Suspense fallback={loadingEffect()}>
          <img style={{width:'100%',height:'100%', objectFit:'fill'}} src={homeImgMy} />
          </Suspense>
          
        
        </motion.div>


        <motion.div initial={false} animate={controls} transition={{duration:9}} className='firstBall'>
        </motion.div>


        <motion.div initial={false} animate={controls2} className='secondBall'>
        </motion.div>

      </div>

    </Fragment>
  )
}

export default Introduction
