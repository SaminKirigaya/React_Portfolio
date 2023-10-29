import React, { Fragment, useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {motion, useScroll, useTransform} from 'framer-motion'

import wave from '../Assets/Images/wave.png'
import reverseWave from '../Assets/Images/reversewave.png'
import wavegif from '../Assets/Images/wave.gif'
import exp from '../Assets/Images/experience.gif'
import work from '../Assets/Images/presentation.gif'
import prof from '../Assets/Images/hiring.gif'

function AboutMe() {

  const {scrollY} = useScroll()

  const [volatileSize, setVolatileSize] = useState('')
  const [volatileSize2, setvolatileSize2] = useState('')
  const [cardHeight, setCardHeight] = useState('')
  const [aboveMargin, setAboveMargin] = useState('')


  const yShift = useTransform(scrollY, [0, window.innerHeight+(window.innerHeight/14.2)+(2*((window.innerHeight/14.2)/10)), 2*window.innerHeight], [1000,0, 1000])
  const yShift2= useTransform(scrollY, [0, window.innerHeight+(window.innerHeight/14.2)+(2*((window.innerHeight/14.2)/10)), 2*window.innerHeight], [-1000,0, -1000] )
  const yShift3= useTransform(scrollY, [0, window.innerHeight+(window.innerHeight/14.2)+(2*((window.innerHeight/14.2)/10)), 2*window.innerHeight], [-1000,0, -1000])
  const yShift4= useTransform(scrollY, [0, window.innerHeight+(window.innerHeight/14.2)+(2*((window.innerHeight/14.2)/10)), 2*window.innerHeight], [-1000,0, -1000])


  useEffect(()=>{

    if(window.innerWidth>760 && window.innerWidth<1000){
      setCardHeight('7rem')
    }else{
      setCardHeight('6rem')
    }


    if(window.innerWidth>760 && window.innerWidth<1000){
      setAboveMargin('1rem')
    }


    if(window.innerWidth<359){
      setvolatileSize2('0.59rem')
    }else if(window.innerWidth>358 && window.innerWidth<400){
      setvolatileSize2('0.65rem')
    }
    else if(window.innerWidth>400 && window.innerWidth<760){
      setvolatileSize2('0.7rem')
    }
    else if(window.innerWidth>760 && window.innerWidth<1000){
      setvolatileSize2('0.9rem')
    }else if(window.innerWidth>1000){
      setvolatileSize2('0.65rem')
    } 


    if(window.innerWidth<359){
      setVolatileSize('0.8rem')

    }else if(window.innerWidth>358 && window.innerWidth<390){
      setVolatileSize('0.9rem')
    }else if(window.innerWidth<760 && window.innerWidth>390){
      setVolatileSize('1rem')
    }else if(window.innerWidth>760 && window.innerWidth<911){
      setVolatileSize('1.5rem')
    }else if(window.innerWidth>910 && window.innerWidth<1000){
      setVolatileSize('2rem')

    }
  },[])

  return (
    <Fragment>
    <div className='sidePageSize' style={{overflowY:'hidden',overflowX:'hidden'}}>
        <div className='topWave' style={{zIndex:'-200'}}>

        <img className='waveHeight' style={{width:'100%', objectFit:'fill'}} src={wave}></img>

        </div>


        <motion.h4 whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} style={{ color:'rgb(152, 28, 253)', cursor:'pointer'}} className='mx-auto aboutMe'>About Me</motion.h4>


        <div className='threeCards'>
          <div className='row row-cols-2 d-flex'>


          <div className='col row-cols-md-2 d-flex justify-content-end mb-1' style={{height:cardHeight}}>
          <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card" style={{width: '10rem',backgroundColor: '#f5f5f6', cursor:'pointer',
          border: '0.13rem solid rgb(152, 28, 253)',borderRadius:'1rem', x:yShift2}}>
        
          <div className="card-body  d-flex flex-column justify-content-center align-items-center">
          <p className="card-title mb-0"><Stack direction="row" spacing={2}>
          <Avatar alt="Experience" src={exp} />
          </Stack></p>
          <p className="card-text mt-0 mb-0" style={{fontSize:volatileSize2, fontWeight:'bold', color:'rgb(152, 28, 253)'}}>Experience</p>
          <p className='card-text mt-0 text-center' style={{fontSize:volatileSize2, color:'rgb(152, 28, 253)'}}>+6 Years</p>
            
          </div>
          </motion.div>
          </div>



          <div className='col row-cols-md-2 d-flex justify-content-start mb-2' style={{height:cardHeight}}>
            <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card" style={{width: '10rem',backgroundColor: '#f5f5f6', cursor:'pointer',
            border: '0.13rem solid rgb(152, 28, 253)',borderRadius:'1rem', x:yShift3}}>
          
            <div className="card-body  d-flex flex-column justify-content-center align-items-center">
            <p className="card-title mb-0"><Stack direction="row" spacing={2}>
            <Avatar alt="Projects" src={work} />
            </Stack></p>
            <p className="card-text mt-0 mb-0" style={{fontSize:volatileSize2, fontWeight:'bold', color:'rgb(152, 28, 253)'}}>Projects</p>
            <p className='card-text mt-0 text-center' style={{fontSize:volatileSize2, color:'rgb(152, 28, 253)'}}>+20 Completed</p>
              
            </div>
            </motion.div>
            </div>


            <div className='col row-cols-md-2 d-flex justify-content-end mb-1' style={{height:cardHeight}}>
            <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card" style={{width: '10rem',backgroundColor: '#f5f5f6', cursor:'pointer',
            border: '0.13rem solid rgb(152, 28, 253)',borderRadius:'1rem', x:yShift4}}>
          
            <div className="card-body  d-flex flex-column justify-content-center align-items-center">
            <p className="card-title mb-0"><Stack direction="row" spacing={2}>
            <Avatar alt="Professional At" src={prof} />
            </Stack></p>
            <p className="card-text mt-0 mb-0" style={{fontSize:volatileSize2, fontWeight:'bold', color:'rgb(152, 28, 253)'}}>Professional At</p>
            <p className='card-text mt-0 text-center' style={{fontSize:volatileSize2, color:'rgb(152, 28, 253)'}}>MERN Stack</p>
              
            </div>
            </motion.div>
            </div>


          </div>
          


        </div>

        <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className='aboutCards' style={{color:'rgb(102, 0, 185)', cursor:'pointer', x:yShift}}>
          <p className='mx-auto text-center d-flex justify-content-center flex-row mb-0 disp2k' style={{fontSize:volatileSize}}><Stack direction="row" spacing={2}>
          <Avatar alt="Hello" src={wavegif} />
          </Stack> &nbsp;&nbsp;
          Hello, I'm &nbsp;<span style={{fontWeight:'bold'}}>Samin Arnob</span>.</p>
          <p className='mx-auto text-justify aboutText justIt' style={{marginTop: aboveMargin}}>My Major Was In Electronics & Telecommunication Engineering. But, Later I Figured Out I Never Had Passion For Electrical Components Instead I Had Passion For Coding. So, I Started To Self Teach Myself Code From Udemy, W3schools & Stack Overflow.</p>
          <p className='mx-auto text-justify aboutText justIt'>Currently I'm A Full-Stack Developer. My Main Fields of Working Are Node Js, Express Js, React Js, Framer Motion, Bootstrap, CSS, JS/ES6/ES7, MySql & MongoDB.</p>

          </motion.div>


        <div className='reverseWave' style={{zIndex:'-200'}}>

        <img className='waveHeight' style={{width:'100vw', objectFit:'fill'}} src={reverseWave}></img>

        </div>


    </div>
    </Fragment>
  )
}

export default AboutMe
