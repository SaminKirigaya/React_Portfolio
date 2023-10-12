import React, { Suspense, Fragment, useState, useEffect } from 'react'


const Nav = React.lazy(()=>import('../Common/Nav'))
const Introduction = React.lazy(()=>import('../Components/Introduction'))


function Header() {
  return (
    <Fragment>
    </Fragment>
  )
}

export default Header
