import React, { Fragment, useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {motion, useScroll, useTransform} from 'framer-motion'

import clock from '../Assets/Images/clock.png'
import sleep from '../Assets/Images/sleep.png'
import monitor from '../Assets/Images/web-analytics.png'
import error from '../Assets/Images/bug.png'
import revision from '../Assets/Images/read.png'
import protection from '../Assets/Images/shield.png'


function Services() {
    const [fontVolatile, setFontVolatile] = useState('')
    const {scrollY}=useScroll()
    const changeXPos=useTransform(scrollY, [3*window.innerHeight, 4*window.innerHeight, 5*window.innerHeight], [1000, 0, 1000])
    const changeXNeg=useTransform(scrollY, [3*window.innerHeight, 4*window.innerHeight, 5*window.innerHeight], [-1000, 0, -1000])

    useEffect(()=>{
        if(window.innerWidth>750 && window.innerWidth<1000){
            setFontVolatile('0.9rem')
        }else{
            setFontVolatile('0.8rem')
        }
    },[])
  return (
    <Fragment>
        <div className='sidePageSize' style={{overflowY:'hidden',overflowX:'hidden', zIndex:'200'}}>
            <div className='sidePageSizeService' style={{overflowY:'hidden',overflowX:'hidden', zIndex:'-200'}}>
            </div>

            <motion.h4 whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className='mx-auto fromTop' style={{color:'white', cursor:'pointer'}}>My Services</motion.h4>

            <div className='row row-cols-1 row-cols-md-2 rowPosition d-flex justify-content-center ps-3 pe-3'>

                <div className='col d-flex justify-content-end mb-2'>
                    <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card" style={{width: '18rem', cursor:'pointer', border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem', x:changeXNeg}}>
                   
                    <div className="card-body">
                    <p className="card-text d-flex flex-row align-items-center" style={{color:'rgb(152, 28, 253)', fontSize:fontVolatile}}>
                    <Stack direction="row" spacing={2}>
                    <Avatar alt="Express JS" src={sleep} />
                    </Stack> &nbsp; 24/7 Active Service.
                    </p>
                    </div>
                    </motion.div>
                </div>




                <div className='col d-flex justify-content-start mb-2'>
                    <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card" style={{width: '18rem', cursor:'pointer', border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem', x:changeXPos}}>
                   
                    <div className="card-body">
                    <p className="card-text d-flex flex-row align-items-center" style={{color:'rgb(152, 28, 253)', fontSize:fontVolatile}}>
                    <Stack direction="row" spacing={2}>
                    <Avatar alt="Express JS" src={clock} />
                    </Stack> &nbsp; Submitting Project Withing Time.
                    </p>
                    </div>
                    </motion.div>
                </div>



                <div className='col d-flex justify-content-end mb-2'>
                    <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card" style={{width: '18rem', cursor:'pointer', border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem', x:changeXNeg}}>
                   
                    <div className="card-body">
                    <p className="card-text d-flex flex-row align-items-center" style={{color:'rgb(152, 28, 253)', fontSize:fontVolatile}}>
                    <Stack direction="row" spacing={2}>
                    <Avatar alt="Express JS" src={monitor} />
                    </Stack> &nbsp; Responsive Frontend Designs.
                    </p>
                    </div>
                    </motion.div>
                </div>




                <div className='col d-flex justify-content-start mb-2'>
                    <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card" style={{width: '18rem', cursor:'pointer', border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem', x:changeXPos}}>
                   
                    <div className="card-body">
                    <p className="card-text d-flex flex-row align-items-center" style={{color:'rgb(152, 28, 253)', fontSize:fontVolatile}}>
                    <Stack direction="row" spacing={2}>
                    <Avatar alt="Express JS" src={error} />
                    </Stack> &nbsp; Any problem at future ? It's My &nbsp;&nbsp;Concern !!!
                    </p>
                    </div>
                    </motion.div>
                </div>




                <div className='col d-flex justify-content-end mb-2'>
                    <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card" style={{width: '18rem', cursor:'pointer', border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem', x:changeXNeg}}>
                   
                    <div className="card-body">
                    <p className="card-text d-flex flex-row align-items-center" style={{color:'rgb(152, 28, 253)', fontSize:fontVolatile}}>
                    <Stack direction="row" spacing={2}>
                    <Avatar alt="Express JS" src={revision} />
                    </Stack> &nbsp; Unlimited Revisions.
                    </p>
                    </div>
                    </motion.div>
                </div>




                <div className='col d-flex justify-content-start mb-2'>
                    <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card" style={{width: '18rem', cursor:'pointer', border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem', x:changeXPos}}>
                   
                    <div className="card-body">
                    <p className="card-text d-flex flex-row align-items-center" style={{color:'rgb(152, 28, 253)', fontSize:fontVolatile}}>
                    <Stack direction="row" spacing={2}>
                    <Avatar alt="Express JS" src={protection} />
                    </Stack> &nbsp; Backend Hashing & XSS Protection.
                    </p>
                    </div>
                    </motion.div>
                </div>




                


            </div>

        </div>
    </Fragment>
  )
}

export default Services

