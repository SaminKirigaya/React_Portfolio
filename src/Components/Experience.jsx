import React, { Suspense, Fragment , useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

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
    const [widthVol, setWidthVol] = useState('')
    const [heightVol, setHeightVol] = useState('')
    const [fontVol, setFontVol] = useState('')

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
            
        }
    },[])
  return (

    <Fragment>
    <div className='sidePageSize' style={{overflowY:'hidden',overflowX:'hidden', zIndex:'-200'}}>
    
    <div className='upperCut'>
    </div>
    
    <h4 className='mx-auto giveMargin' style={{color:'rgb(152, 28, 253)'}}>Experienced In</h4>

    <div className='row row-cols-2 row-cols-md-5 d-flex justify-content-center mx-auto' style={{marginTop:'1rem'}}>

    <div className='col mb-1 mb-md-2'>
        <div class="card d-flex justify-content-center align-items-center flex-column mx-auto" style={{width: widthVol, height: heightVol, border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem'}}>
        
        <div class="card-body d-flex justify-content-center flex-column align-items-center">
        <p className='card-text'><Stack direction="row" spacing={2}>
        <Avatar alt="Html" src={html} />
        </Stack></p>
        <p class="card-text" style={{fontWeight:'bold', fontSize: fontVol, color:'rgb(152, 28, 253)'}}>HTML</p>
        
        </div>
        </div>
    </div>



    <div className='col mb-1 mb-md-2'>
        <div class="card d-flex justify-content-center align-items-center flex-column mx-auto" style={{width: widthVol, height: heightVol, border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem'}}>
        
        <div class="card-body d-flex justify-content-center flex-column align-items-center">
        <p className='card-text'><Stack direction="row" spacing={2}>
        <Avatar alt="Bootstrap" src={bs} />
        </Stack></p>
        <p class="card-text" style={{fontWeight:'bold', fontSize: fontVol, color:'rgb(152, 28, 253)'}}>BOOTSTRAP</p>
        
        </div>
        </div>
    </div>






    <div className='col mb-1 mb-md-2'>
        <div class="card d-flex justify-content-center align-items-center flex-column mx-auto" style={{width: widthVol, height: heightVol, border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem'}}>
        
        <div class="card-body d-flex justify-content-center flex-column align-items-center">
        <p className='card-text'><Stack direction="row" spacing={2}>
        <Avatar alt="Css" src={css} />
        </Stack></p>
        <p class="card-text" style={{fontWeight:'bold', fontSize: fontVol, color:'rgb(152, 28, 253)'}}>CSS</p>
        
        </div>
        </div>
    </div>





    <div className='col mb-1 mb-md-2'>
        <div class="card d-flex justify-content-center align-items-center flex-column mx-auto" style={{width: widthVol, height: heightVol, border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem'}}>
        
        <div class="card-body d-flex justify-content-center flex-column align-items-center">
        <p className='card-text'><Stack direction="row" spacing={2}>
        <Avatar alt="Js" src={js} />
        </Stack></p>
        <p class="card-text" style={{fontWeight:'bold', fontSize: fontVol, color:'rgb(152, 28, 253)'}}>JAVASCRIPT</p>
        
        </div>
        </div>
    </div>







    <div className='col mb-1 mb-md-2'>
        <div class="card d-flex justify-content-center align-items-center flex-column mx-auto" style={{width: widthVol, height: heightVol, border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem'}}>
        
        <div class="card-body d-flex justify-content-center flex-column align-items-center">
        <p className='card-text'><Stack direction="row" spacing={2}>
        <Avatar alt="Node Js" src={node} />
        </Stack></p>
        <p class="card-text" style={{fontWeight:'bold', fontSize: fontVol, color:'rgb(152, 28, 253)'}}>NODE JS</p>
        
        </div>
        </div>
    </div>






    <div className='col mb-1 mb-md-2'>
        <div class="card d-flex justify-content-center align-items-center flex-column mx-auto" style={{width: widthVol, height: heightVol, border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem'}}>
        
        <div class="card-body d-flex justify-content-center flex-column align-items-center">
        <p className='card-text'><Stack direction="row" spacing={2}>
        <Avatar alt="Express JS" src={express} />
        </Stack></p>
        <p class="card-text" style={{fontWeight:'bold', fontSize: fontVol, color:'rgb(152, 28, 253)'}}>EXPRESS JS</p>
        
        </div>
        </div>
    </div>








    <div className='col mb-1 mb-md-2'>
        <div class="card d-flex justify-content-center align-items-center flex-column mx-auto" style={{width: widthVol, height: heightVol, border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem'}}>
        
        <div class="card-body d-flex justify-content-center flex-column align-items-center">
        <p className='card-text'><Stack direction="row" spacing={2}>
        <Avatar alt="React Js" src={react} />
        </Stack></p>
        <p class="card-text" style={{fontWeight:'bold', fontSize: fontVol, color:'rgb(152, 28, 253)'}}>REACT</p>
        
        </div>
        </div>
    </div>




    


    <div className='col mb-1 mb-md-2'>
        <div class="card d-flex justify-content-center align-items-center flex-column mx-auto" style={{width: widthVol, height: heightVol, border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem'}}>
        
        <div class="card-body d-flex justify-content-center flex-column align-items-center">
        <p className='card-text'><Stack direction="row" spacing={2}>
        <Avatar alt="Redux" src={redux} />
        </Stack></p>
        <p class="card-text" style={{fontWeight:'bold', fontSize: fontVol, color:'rgb(152, 28, 253)'}}>REDUX</p>
        
        </div>
        </div>
    </div>





    <div className='col mb-1 mb-md-2'>
        <div class="card d-flex justify-content-center align-items-center flex-column mx-auto" style={{width: widthVol, height: heightVol, border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem'}}>
        
        <div class="card-body d-flex justify-content-center flex-column align-items-center">
        <p className='card-text'><Stack direction="row" spacing={2}>
        <Avatar alt="MySql" src={sql} />
        </Stack></p>
        <p class="card-text" style={{fontWeight:'bold', fontSize: fontVol, color:'rgb(152, 28, 253)'}}>MYSQL</p>
        
        </div>
        </div>
    </div>





    <div className='col mb-1 mb-md-2'>
        <div class="card d-flex justify-content-center align-items-center flex-column mx-auto" style={{width: widthVol, height: heightVol, border:'0.15rem solid rgb(152, 28, 253)', backgroundColor:'#f5f5f6', borderRadius:'0.9rem'}}>
        
        <div class="card-body d-flex justify-content-center flex-column align-items-center">
        <p className='card-text'><Stack direction="row" spacing={2}>
        <Avatar alt="MongoDB" src={mongo} />
        </Stack></p>
        <p class="card-text" style={{fontWeight:'bold', fontSize: fontVol, color:'rgb(152, 28, 253)'}}>MONGO DB</p>
        
        </div>
        </div>
    </div>






    </div>



    <div className='lowerCut'>
    </div>

    
    </div>
    </Fragment>
  )
}

export default Experience
