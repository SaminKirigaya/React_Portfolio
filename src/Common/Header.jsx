import React, { Suspense, Fragment, useState, useEffect } from 'react'


const Nav = React.lazy(()=>import('../Common/Nav'))
const Introduction = React.lazy(()=>import('../Components/Introduction'))



function loadingEffect(){
  return  <div className='container-fluid loader d-flex justify-content-center align-items-center'>
      <div className="spinner-border desLoad" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
      
      
  </div>
}

function Header() {

  return (
    <Fragment>
      <Nav/>

      <Suspense fallback={loadingEffect()}>
        <Introduction />
      </Suspense>
      
      

    </Fragment>
  )
}

export default Header
