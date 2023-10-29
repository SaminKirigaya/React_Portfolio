import React, { Suspense, Fragment , useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {motion, useScroll, useTransform} from 'framer-motion'


import html from '../Assets/Images/html.png'
import bs from '../Assets/Images/b5.png'
import css from '../Assets/Images/css.png'
import js from '../Assets/Images/js.png'
import node from '../Assets/Images/node.png'
import express from '../Assets/Images/express.png'
import react from '../Assets/Images/react.png'
import sql from '../Assets/Images/sql.jpg'
import mongo from '../Assets/Images/mongo.png'
import redux from '../Assets/Images/redux.jpg'

function Experience() {

    const {scrollY} = useScroll()
    const [widthVol, setWidthVol] = useState('')
    const [heightVol, setHeightVol] = useState('')
    const [fontVol, setFontVol] = useState('')

    const sendRes= ()=>{
        if(window.innerWidth<1000){
          return [window.innerHeight, 2*window.innerHeight+(window.innerHeight/14.2)+(((window.innerHeight/14.2)/10)), 3*window.innerHeight]
        }else{
          return [window.innerHeight, 2*window.innerHeight, 3*window.innerHeight]
        }
      }

    const fromUp = useTransform(scrollY, sendRes(), [-500, 0, -500])
    const fromDown = useTransform(scrollY, sendRes(), [500, 0, 500])

    useEffect(()=>{
        if(window.innerWidth<540){
            setWidthVol('7rem')
            setHeightVol('5.5rem')
            setFontVol('0.65rem')
        }else if(window.innerWidth>539 && window.innerWidth<700){
            setWidthVol('8rem')
            setHeightVol('6rem')
            setFontVol('0.7rem')
        }else if(window.innerWidth>699 && window.innerWidth<900){
            setWidthVol('7rem')
            setHeightVol('6rem')
            setFontVol('0.8rem')
        }else if(window.innerWidth>899 && window.innerWidth<1000){
            setWidthVol('8.7rem')
            setHeightVol('6rem')
            setFontVol('0.9rem')
        }
        else{
            setWidthVol('10rem')
            setFontVol('0.85rem')
        }
    },[])
  return (

    <Fragment>
    <div className='sidePageSize' style={{overflowY:'hidden',overflowX:'hidden'}}>
    
    <div className='upperCut' style={{zIndex:'-200'}}>
    </div>
    
    <motion.h4 whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className='mx-auto giveMargin' style={{color:'rgb(152, 28, 253)', cursor:'pointer'}}>Experienced In</motion.h4>

    <div className='row row-cols-2 row-cols-md-5 d-flex justify-content-center mx-auto' style={{marginTop:'1rem'}}>

    <div className='col mb-1 mb-md-2'>
        <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card d-flex justify-content-center align-items-center flex-column mx-auto" style={{width: widthVol, cursor:'pointer', height: heightVol, border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem', y:fromUp}}>
        
        <div className="card-body d-flex justify-content-center flex-column align-items-center">
        <p className='card-text'><Stack direction="row" spacing={2}>
        <Avatar alt="Html" src={html} />
        </Stack></p>
        <p className="card-text" style={{fontWeight:'bold', fontSize: fontVol, color:'rgb(152, 28, 253)'}}>HTML</p>
        
        </div>
        </motion.div>
    </div>



    <div className='col mb-1 mb-md-2'>
        <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card d-flex justify-content-center align-items-center flex-column mx-auto" style={{width: widthVol, cursor:'pointer', height: heightVol, border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem', y:fromUp}}>
        
        <div className="card-body d-flex justify-content-center flex-column align-items-center">
        <p className='card-text'><Stack direction="row" spacing={2}>
        <Avatar alt="Bootstrap" src={bs} />
        </Stack></p>
        <p className="card-text" style={{fontWeight:'bold', fontSize: fontVol, color:'rgb(152, 28, 253)'}}>BOOTSTRAP</p>
        
        </div>
        </motion.div>
    </div>






    <div className='col mb-1 mb-md-2'>
        <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card d-flex justify-content-center align-items-center flex-column mx-auto" style={{width: widthVol, cursor:'pointer', height: heightVol, border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem', y:fromUp}}>
        
        <div className="card-body d-flex justify-content-center flex-column align-items-center">
        <p className='card-text'><Stack direction="row" spacing={2}>
        <Avatar alt="Css" src={css} />
        </Stack></p>
        <p className="card-text" style={{fontWeight:'bold', fontSize: fontVol, color:'rgb(152, 28, 253)'}}>CSS</p>
        
        </div>
        </motion.div>
    </div>





    <div className='col mb-1 mb-md-2'>
        <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card d-flex justify-content-center align-items-center flex-column mx-auto" style={{width: widthVol, cursor:'pointer', height: heightVol, border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem',y:fromUp}}>
        
        <div className="card-body d-flex justify-content-center flex-column align-items-center">
        <p className='card-text'><Stack direction="row" spacing={2}>
        <Avatar alt="Js" src={js} />
        </Stack></p>
        <p className="card-text" style={{fontWeight:'bold', fontSize: fontVol, color:'rgb(152, 28, 253)'}}>JAVASCRIPT</p>
        
        </div>
        </motion.div>
    </div>







    <div className='col mb-1 mb-md-2'>
        <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card d-flex justify-content-center align-items-center flex-column mx-auto" style={{width: widthVol, cursor:'pointer', height: heightVol, border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem', y:fromUp}}>
        
        <div className="card-body d-flex justify-content-center flex-column align-items-center">
        <p className='card-text'><Stack direction="row" spacing={2}>
        <Avatar alt="Node Js" src={node} />
        </Stack></p>
        <p className="card-text" style={{fontWeight:'bold', fontSize: fontVol, color:'rgb(152, 28, 253)'}}>NODE JS</p>
        
        </div>
        </motion.div>
    </div>






    <div className='col mb-1 mb-md-2'>
        <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card d-flex justify-content-center align-items-center flex-column mx-auto" style={{width: widthVol, cursor:'pointer', height: heightVol, border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem',y:fromDown}}>
        
        <div className="card-body d-flex justify-content-center flex-column align-items-center">
        <p className='card-text'><Stack direction="row" spacing={2}>
        <Avatar alt="Express JS" src={express} />
        </Stack></p>
        <p className="card-text" style={{fontWeight:'bold', fontSize: fontVol, color:'rgb(152, 28, 253)'}}>EXPRESS JS</p>
        
        </div>
        </motion.div>
    </div>








    <div className='col mb-1 mb-md-2'>
        <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card d-flex justify-content-center align-items-center flex-column mx-auto" style={{width: widthVol, cursor:'pointer', height: heightVol, border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem', y:fromDown}}>
        
        <div className="card-body d-flex justify-content-center flex-column align-items-center">
        <p className='card-text'><Stack direction="row" spacing={2}>
        <Avatar alt="React Js" src={react} />
        </Stack></p>
        <p className="card-text" style={{fontWeight:'bold', fontSize: fontVol, color:'rgb(152, 28, 253)'}}>REACT</p>
        
        </div>
        </motion.div>
    </div>




    


    <div className='col mb-1 mb-md-2'>
        <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card d-flex justify-content-center align-items-center flex-column mx-auto" style={{width: widthVol, cursor:'pointer', height: heightVol, border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem', y:fromDown}}>
        
        <div className="card-body d-flex justify-content-center flex-column align-items-center">
        <p className='card-text'><Stack direction="row" spacing={2}>
        <Avatar alt="Redux" src={redux} />
        </Stack></p>
        <p className="card-text" style={{fontWeight:'bold', fontSize: fontVol, color:'rgb(152, 28, 253)'}}>REDUX</p>
        
        </div>
        </motion.div>
    </div>





    <div className='col mb-1 mb-md-2'>
        <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card d-flex justify-content-center align-items-center flex-column mx-auto" style={{width: widthVol, cursor:'pointer', height: heightVol, border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem', y:fromDown}}>
        
        <div className="card-body d-flex justify-content-center flex-column align-items-center">
        <p className='card-text'><Stack direction="row" spacing={2}>
        <Avatar alt="MySql" src={sql} />
        </Stack></p>
        <p className="card-text" style={{fontWeight:'bold', fontSize: fontVol, color:'rgb(152, 28, 253)'}}>MYSQL</p>
        
        </div>
        </motion.div>
    </div>





    <div className='col mb-1 mb-md-2'>
        <motion.div whileHover={{scale: [1,1.1]}} transition={{duration: 1.3, type :'spring', stiffness: 350}} className="card d-flex justify-content-center align-items-center flex-column mx-auto" style={{width: widthVol, cursor:'pointer', height: heightVol, border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem', y:fromDown}}>
        
        <div className="card-body d-flex justify-content-center flex-column align-items-center">
        <p className='card-text'><Stack direction="row" spacing={2}>
        <Avatar alt="MongoDB" src={mongo} />
        </Stack></p>
        <p className="card-text" style={{fontWeight:'bold', fontSize: fontVol, color:'rgb(152, 28, 253)'}}>MONGO DB</p>
        
        </div>
        </motion.div>
    </div>






    </div>



    <div className='lowerCut' style={{zIndex:'-200'}}>
    </div>

    
    </div>
    </Fragment>
  )
}

export default Experience
