import React, { Fragment, useEffect } from 'react'
import Typed from 'typed.js';
import {motion} from 'framer-motion'

import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

import homeImgMy from '../Assets/Images/myimgbg.png'

function Introduction() {
  useEffect(() => {
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
      <div className='sidePageSize' style={{overflowY:'hidden'}}> {/* base box which will next time be renamed with same class properties but different backgroundcol and name in different component.*/}

        <div className='skillDetails d-flex justify-content-center align-items-center flex-column'>
          <p className='mx-auto'>Hello_&#128151;</p>
          <p style={{fontSize:'1.5rem'}} className='text-center'>I'm <span className='typing-animation' style={{fontWeight:'bold',color:'rgb(152, 28, 253)'}}></span></p>
          <p className='text-center'>I Believe Coding Is Like An Artwork. So, When I Code I Try To Make It As Precise As Possible &#128151;</p>
          <p>
          
          <motion.button whileHover={{scale:[1,1.3]}} transition={{ type:'spring', stiffness:400 }} type="button" class="btn btn-primary"
          style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', marginRight:'1rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
            Github <GitHubIcon fontSize='small' />
          </motion.button>

          <motion.button whileHover={{scale:[1,1.2]}} transition={{ type:'spring', stiffness:400 }} type="button" class="btn btn-primary"
          style={{ paddingTop : '.25rem', paddingBottom : '.25rem' , paddingLeft : '.5rem', paddingRight : '.5rem', fontSize: '.75rem', backgroundColor:'rgb(152, 28, 253)', color:'white', border: 'none', borderRadius:'0rem'}}>
            Let's Talk <MailIcon fontSize='small' />
          </motion.button>

          </p>
        </div>


        <motion.div  animate={{scale:[1.1,1,1.1]}} transition={{duration:1.8,repeat:'infinity'}} className='introPageImgBox d-flex justify-content-center align-items-center flex-column'>
          
          <img style={{width:'100%',height:'100%', objectFit:'fill'}} src={homeImgMy} />
          
        
        </motion.div>


        <motion.div className='firstBall'>
        </motion.div>


        <motion.div className='secondBall'>
        </motion.div>

      </div>

    </Fragment>
  )
}

export default Introduction
