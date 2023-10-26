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
    const changeFromTop = useTransform(scrollY, [5*window.innerHeight, 6*window.innerHeight, 7*window.innerHeight], [-500,0,-500])
    const changeFromBottom = useTransform(scrollY, [5*window.innerHeight, 6*window.innerHeight, 7*window.innerHeight], [500,0,500])

    useEffect(()=>{
        if(window.innerWidth<359){
            setSize('0.65rem')
        }else{
            setSize('0.8rem')
        }
    },[])
  return (
    <Fragment>

    <div className='sidePageSize' style={{overflowY:'hidden',overflowX:'hidden'}}>
    
    <div className='upperWave' style={{zIndex:'-200'}}>
        <img className='upperwaveSize' src={wave} />
    </div>
    
    <motion.h3 whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className='mx-auto titlePosition' style={{color:'rgb(152, 28, 253)', cursor:'pointer'}}>Contact Me</motion.h3>    
    

    <div className='animationBox animBoxSet'>
        <img className='animSize' src={contact}/>
    </div>





    <div className='twoDetailCards d-flex flex-row justify-content-center align-items-center'>


    <div className='row row-cols-1 row-cols-md-2'>


        <div className='col'>
            <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} class="card cardSize" style={{ borderRadius:'1rem', cursor:'pointer', backgroundColor:'rgb(152 28 253 / 76%)', color:'white', y:changeFromTop}}>
            
            <div class="card-body">
            <h5 class="card-title mx-auto text-center d-flex flex-row justify-content-center align-items-center titleSize">
            <Stack direction="row" spacing={2}>
            <Avatar alt="Experience" src={location} />
            </Stack>&nbsp;
            My Location</h5>
            <p class="card-text" style={{fontSize:volatileFont}}><b>Permanent</b> : 33/2, North ManikNagar, Dhaka-1203, Bangladesh<br></br><b>Temporary</b> : Octra Moor, Rajshahi, Bangladesh</p>
            
            </div>
            </motion.div>
        </div>



        <div className='col'>
            <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} class="card cardSize" style={{ borderRadius:'1rem', cursor:'pointer', backgroundColor:'rgb(152 28 253 / 76%)', color:'white', y:changeFromBottom}}>
            
            <div class="card-body">
            <h5 class="card-title mx-auto text-center d-flex flex-row justify-content-center align-items-center titleSize">
            <Stack direction="row" spacing={2}>
            <Avatar alt="Experience" src={contactIcon} />
            </Stack>&nbsp;
            My Contacts</h5>
            <p class="card-text" style={{fontSize:volatileFont}}><b>Mobile</b> : (+880)1856161055, (+880)1576545897<br></br><b>Gmail</b> : saminyeasararnob@gmail.com || arnobsamin95@gmail.com</p>
            
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
