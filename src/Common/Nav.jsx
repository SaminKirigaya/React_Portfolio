import React, { Fragment,Suspense, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import cornerImg from '../Assets/Images/cornerTop.jpg'


import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HomeRepairServiceRoundedIcon from '@mui/icons-material/HomeRepairServiceRounded';


import {motion} from 'framer-motion'

function Nav() {

  const FirstPage = (e)=>{
    window.scrollTo(0,0)
  }


  const SecondPage = (e)=>{
    if(window.innerWidth<1000){
      let height = window.innerHeight+(window.innerHeight/14.4)
      window.scrollTo(0,height)
    }else{
      let height = window.innerHeight
      window.scrollTo(0,height)
    }
    
  }


  const ThirdPage = (e)=>{
    let height = window.innerHeight
    window.scrollTo(0,2*height)
  }


  const FourthPage = (e)=>{
    let height = window.innerHeight
    window.scrollTo(0,3*height)
  }


  const FifthPage = (e)=>{
    let height = window.innerHeight
    window.scrollTo(0,4*height)
  }


  const SixthPage = (e)=>{
    let height = window.innerHeight
    window.scrollTo(0,5*height)
  }


  const SeventhPage = (e)=>{
    let height = window.innerHeight
    window.scrollTo(0,6*height)
  }


  useEffect(()=>{
    window.$('[data-bs-toggle="tooltip"]').tooltip();

    return ()=>{
      window.$('[data-bs-toggle="tooltip"]').tooltip('dispose');
    }
  },[])

  return (
    <Fragment>
      <div className='mainRect align-items-center'>
      <div style={{marginTop:'1rem'}}>
        <Stack direction="row" spacing={2}>
        <Avatar
        alt="Samin Arnob"
        src={cornerImg}
        sx={{ width: 40, height: 40 }}
        />
        </Stack>
      </div>

      <motion.div onClick={(e)=>FirstPage(e)} whileHover={{scale:[1,1.3]}} transition={{ type:'spring', stiffness:400 }} style={{color:'#7bf7ff',marginTop:'3rem'}} data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip" data-bs-title="HOME" data-bs-placement="right">
        <HomeRoundedIcon fontSize='large'/>
      </motion.div>

      <motion.div onClick={(e)=>SecondPage(e)} whileHover={{scale:[1,1.3]}} transition={{ type:'spring', stiffness:400 }} style={{color:'#7bf7ff',marginTop:'1rem'}} data-bs-toggle="tooltip" data-bs-title="ABOUT ME" data-bs-placement="right">
        <EmojiEmotionsIcon fontSize='large'/>
      </motion.div>
      
      <motion.div onClick={(e)=>ThirdPage(e)} whileHover={{scale:[1,1.3]}} transition={{ type:'spring', stiffness:400 }} style={{color:'#7bf7ff',marginTop:'1rem'}} data-bs-toggle="tooltip" data-bs-title="MY EXPERIENCE" data-bs-placement="right">
        <SettingsAccessibilityIcon fontSize='large'/>
      </motion.div>

      <motion.div onClick={(e)=>FourthPage(e)} whileHover={{scale:[1,1.3]}} transition={{ type:'spring', stiffness:400 }} style={{color:'#7bf7ff',marginTop:'1rem'}} data-bs-toggle="tooltip" data-bs-title="MY CERTIFICATES" data-bs-placement="right">
        <WorkspacePremiumIcon fontSize='large'/>
      </motion.div>

      <motion.div onClick={(e)=>FifthPage(e)} whileHover={{scale:[1,1.3]}} transition={{ type:'spring', stiffness:400 }} style={{color:'#7bf7ff',marginTop:'1rem'}} data-bs-toggle="tooltip" data-bs-title="MY SERVICES" data-bs-placement="right">
        <HomeRepairServiceRoundedIcon fontSize='large'/>
      </motion.div>

      <motion.div onClick={(e)=>SixthPage(e)} whileHover={{scale:[1,1.3]}} transition={{ type:'spring', stiffness:400 }} style={{color:'#7bf7ff',marginTop:'1rem'}} data-bs-toggle="tooltip" data-bs-title="PREVIOUS PROJECTS" data-bs-placement="right">
        <ReceiptLongIcon fontSize='large'/>
      </motion.div>

      <motion.div onClick={(e)=>SeventhPage(e)} whileHover={{scale:[1,1.3]}} transition={{ type:'spring', stiffness:400 }} style={{color:'#7bf7ff',marginTop:'1rem'}} data-bs-toggle="tooltip" data-bs-title="CONTACT ME" data-bs-placement="right">
        <ContactSupportIcon fontSize='large'/>
      </motion.div>


      </div>
    </Fragment>
  )
}

export default Nav
