import React from 'react'
import './HeaderMain.modules.css'
import Topbar from '../Topbar/Topbar'
import Header from '../Header/Header'

const HeaderMain = () => {
  return (
    <div className='h_main'>
        <Topbar></Topbar>
        <Header></Header>
    </div>
  )
}

export default HeaderMain