import React, { Fragment, useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import wave from '../Assets/Images/wave.png'
import reverseWave from '../Assets/Images/reversewave.png'
import wavegif from '../Assets/Images/wave.gif'
import exp from '../Assets/Images/experience.gif'
import work from '../Assets/Images/presentation.gif'
import prof from '../Assets/Images/hiring.gif'

function AboutMe() {

  const [volatileSize, setVolatileSize] = useState('')
  const [volatileSize2, setvolatileSize2] = useState('')
  const [cardHeight, setCardHeight] = useState('')
  const [aboveMargin, setAboveMargin] = useState('')

  useEffect(()=>{

    if(window.innerWidth>760 && window.innerWidth<1000){
      setCardHeight('7rem')
    }else{
      setCardHeight('6rem')
    }


    if(window.innerWidth>760 && window.innerWidth<1000){
      setAboveMargin('1rem')
    }


    if(window.innerWidth<400){
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


    if(window.innerWidth<1000 && window.innerWidth<390){
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
    <div className='sidePageSize' style={{overflowY:'hidden',overflowX:'hidden', zIndex:'-200'}}>
        <div className='topWave'>

        <img className='waveHeight' style={{width:'100%', objectFit:'fill'}} src={wave}></img>

        </div>


        <h4 style={{ color:'rgb(152, 28, 253)'}} className='mx-auto aboutMe'>About Me</h4>


        <div className='threeCards'>
          <div className='row row-cols-2 d-flex'>


          <div className='col row-cols-md-2 d-flex justify-content-end mb-1' style={{height:cardHeight}}>
          <div class="card" style={{width: '10rem',backgroundColor: '#f5f5f6',
          border: '0.13rem solid rgb(152, 28, 253)',borderRadius:'1rem'}}>
        
          <div class="card-body  d-flex flex-column justify-content-center align-items-center">
          <p class="card-title mb-0"><Stack direction="row" spacing={2}>
          <Avatar alt="Experience" src={exp} />
          </Stack></p>
          <p class="card-text mt-0 mb-0" style={{fontSize:volatileSize2, fontWeight:'bold', color:'rgb(152, 28, 253)'}}>Experience</p>
          <p className='card-text mt-0 text-center' style={{fontSize:volatileSize2, color:'rgb(152, 28, 253)'}}>+6 Years</p>
            
          </div>
          </div>
          </div>



          <div className='col row-cols-md-2 d-flex justify-content-start mb-2' style={{height:cardHeight}}>
            <div class="card" style={{width: '10rem',backgroundColor: '#f5f5f6',
            border: '0.13rem solid rgb(152, 28, 253)',borderRadius:'1rem'}}>
          
            <div class="card-body  d-flex flex-column justify-content-center align-items-center">
            <p class="card-title mb-0"><Stack direction="row" spacing={2}>
            <Avatar alt="Projects" src={work} />
            </Stack></p>
            <p class="card-text mt-0 mb-0" style={{fontSize:volatileSize2, fontWeight:'bold', color:'rgb(152, 28, 253)'}}>Projects</p>
            <p className='card-text mt-0 text-center' style={{fontSize:volatileSize2, color:'rgb(152, 28, 253)'}}>+20 Completed</p>
              
            </div>
            </div>
            </div>


            <div className='col row-cols-md-2 d-flex justify-content-end mb-1' style={{height:cardHeight}}>
            <div class="card" style={{width: '10rem',backgroundColor: '#f5f5f6',
            border: '0.13rem solid rgb(152, 28, 253)',borderRadius:'1rem'}}>
          
            <div class="card-body  d-flex flex-column justify-content-center align-items-center">
            <p class="card-title mb-0"><Stack direction="row" spacing={2}>
            <Avatar alt="Professional At" src={prof} />
            </Stack></p>
            <p class="card-text mt-0 mb-0" style={{fontSize:volatileSize2, fontWeight:'bold', color:'rgb(152, 28, 253)'}}>Professional At</p>
            <p className='card-text mt-0 text-center' style={{fontSize:volatileSize2, color:'rgb(152, 28, 253)'}}>MERN Stack</p>
              
            </div>
            </div>
            </div>


          </div>
          


        </div>

        <div className='aboutCards' style={{color:'rgb(102, 0, 185)'}}>
          <p className='mx-auto text-center d-flex justify-content-center flex-row mb-0 disp2k' style={{fontSize:volatileSize}}><Stack direction="row" spacing={2}>
          <Avatar alt="Hello" src={wavegif} />
          </Stack> &nbsp;&nbsp;
          Hello, I'm &nbsp;<span style={{fontWeight:'bold'}}>Samin Arnob</span>.</p>
          <p className='mx-auto text-justify aboutText justIt' style={{marginTop: aboveMargin}}>My Major Was In Electronics & Telecommunication Engineering. But, Later I Figured Out I Never Had Passion For Electrical Components Instead I Had Passion For Coding. So, I Started To Self Teach Myself Code From Udemy, W3schools & Stack Overflow.</p>
          <p className='mx-auto text-justify aboutText justIt'>Currently I'm A Full-Stack Developer. My Main Fields of Working Are Node Js, Express Js, React Js, Framer Motion, Bootstrap, CSS, JS/ES6/ES7, MySql & MongoDB.</p>

          </div>


        <div className='reverseWave'>

        <img className='waveHeight' style={{width:'100vw', objectFit:'fill'}} src={reverseWave}></img>

        </div>


    </div>
    </Fragment>
  )
}

export default AboutMe
