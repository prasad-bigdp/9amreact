import React from 'react'
import logo from '../assets/logo.png'
function Header() {
  return (
    <header className=' bg-linear-120 flex justify-center bg-blue-400 py-4 text-center'>
       <img src={logo} alt="pokemon" className=' h-20'/>
    </header>
  )
}

export default Header
