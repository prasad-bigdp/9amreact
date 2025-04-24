import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
		<div>
			<h2>Header</h2>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/services'>Services</Link>
				<Link to='/contact'>contact</Link>
			</nav>
		</div>
	)
}

export default Header
