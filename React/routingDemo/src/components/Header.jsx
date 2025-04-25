import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
		<header className=' bg-gray-400 text-white text-2xl flex flex-col lg:flex-row justify-center lg:justify-between items-center px-10 py-4'>
			<h2>My<span className=' text-blue-700'>Site</span></h2>
			<nav className=' flex flex-col text-xl lg:text-2xl lg:flex-row gap-2 lg:gap-4'>
				<Link to='/' className=' hover:text-blue-500'>Home</Link>
				<Link to='/about' className=' hover:text-blue-500'>About</Link>
				<Link to='/services' className=' hover:text-blue-500'>Services</Link>
				<Link to='/contact' className=' hover:text-blue-500'>contact</Link>
			</nav>
		</header>
	)
}

export default Header
