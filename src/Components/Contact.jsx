import React, { Fragment, useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {motion, useScroll, useTransform} from 'framer-motion'

import wave from '../Assets/Images/wave.png'
import bottomwave from '../Assets/Images/reversewave.png'
import contact from '../Assets/Images/contact us.gif'
import location from '../Assets/Images/map.gif'
import contactIcon from '../Assets/Images/customer-experience.gif'

function Contact() {
    const [volatileFont, setSize] = useState('')
    const {scrollY}= useScroll()
    const enterPosition2 = window.innerHeight * 0.5;

    const sendRes= ()=>{
        if(window.innerWidth<1000){
          return [5*window.innerHeight, 6*window.innerHeight+6*(window.innerHeight/14.2)+6*(((window.innerHeight/14.2)/10)), 7*window.innerHeight]
        }else{
          return [5*window.innerHeight, 6*window.innerHeight, 7*window.innerHeight]
        }
      }

      const animateEffect1 = ()=>{
        if(window.innerWidth>1000){
          return [-500,0,-500]
        }else{
          return [0,0,0]
        }
      }

      const animateEffect2= ()=>{
        if(window.innerWidth>1000){
          return [500, 0, 500]
        }else{
          return [0,0,0]
        }
      }

    const changeFromTop = useTransform(scrollY, sendRes(), animateEffect1())
    const changeFromBottom = useTransform(scrollY, sendRes(), animateEffect2())

    useEffect(()=>{
        if(window.innerWidth<359){
            setSize('0.65rem')
        }else{
            setSize('0.8rem')
        }
    },[])


    useEffect(()=>{
      if(window.innerWidth<1023){
      window.addEventListener('scroll', ()=>{
        try{
          let pos = document.getElementById("positionCont")
          let pos2 = pos.getBoundingClientRect().top
          let pos3 = pos.getBoundingClientRect().bottom
          const divBox13 = document.getElementById("topBox")
          const divBox14 = document.getElementById("bottomBox")
  
          if (pos2 <= enterPosition2 && pos3 >= enterPosition2) {
            divBox13.style.transform= 'translateY(0%)';
            divBox14.style.transform= 'translateY(0%)';
          } else {
            divBox13.style.transform= 'translateY(-300%)';
            divBox14.style.transform= 'translateY(300%)';
          }
  
          divBox13.style.transition = 'transform 0.4s';
          divBox14.style.transition = 'transform 0.4s';
  
          console.log(pos2,pos3)
        }catch(err){
          console.log(err)
        }
        
      })
    }
    },[])


  return (
    <Fragment>

    <div className='sidePageSize' style={{overflowY:'hidden',overflowX:'hidden'}}>
    
    <div className='upperWave' style={{zIndex:'-200'}}>
        <img className='upperwaveSize' src={wave} />
    </div>
    
    <div id='positionCont'></div>

    <motion.h3 whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className='mx-auto titlePosition' style={{color:'rgb(152, 28, 253)', cursor:'pointer'}}>Contact Me</motion.h3>    
    

    <div className='animationBox animBoxSet'>
        <img className='animSize' src={contact}/>
    </div>





    <div className='twoDetailCards d-flex flex-row justify-content-center align-items-center'>


    <div className='row row-cols-1 row-cols-md-2'>


        <div id="topBox" className='col'>
            <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card cardSize" style={{ borderRadius:'1rem', cursor:'pointer', backgroundColor:'rgb(152 28 253 / 76%)', color:'white', y:changeFromTop}}>
            
            <div className="card-body">
            <h5 className="card-title mx-auto text-center d-flex flex-row justify-content-center align-items-center titleSize">
            <Stack direction="row" spacing={2}>
            <Avatar alt="Experience" src={location} />
            </Stack>&nbsp;
            My Location</h5>
            <p className="card-text" style={{fontSize:volatileFont}}><b>Permanent</b> : 33/2, North ManikNagar, Dhaka-1203, Bangladesh<br></br><b>Temporary</b> : Octra Moor, Rajshahi, Bangladesh</p>
            
            </div>
            </motion.div>
        </div>



        <div id="bottomBox" className='col'>
            <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card cardSize" style={{ borderRadius:'1rem', cursor:'pointer', backgroundColor:'rgb(152 28 253 / 76%)', color:'white', y:changeFromBottom}}>
            
            <div className="card-body">
            <h5 className="card-title mx-auto text-center d-flex flex-row justify-content-center align-items-center titleSize">
            <Stack direction="row" spacing={2}>
            <Avatar alt="Experience" src={contactIcon} />
            </Stack>&nbsp;
            My Contacts</h5>
            <p className="card-text" style={{fontSize:volatileFont}}><b>Mobile</b> : (+880)1856161055, (+880)1576545897<br></br><b>Gmail</b> : saminyeasararnob@gmail.com || arnobsamin95@gmail.com</p>
            
            </div>
            </motion.div>
        </div>





    </div>


    </div>





    <div className='bottomWave' style={{zIndex:'-200'}}>
        <img className='bottomwaveSize' src={bottomwave} />
    </div>


    
    </div>
    

    </Fragment>
  )
}

export default Contact
