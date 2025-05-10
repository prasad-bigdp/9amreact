import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className=' bg-green-100 py-5 px-10 flex flex-col md:flex-row justify-between items-center'>
          <div className=' text-3xl text-black'>
              Movie <span className=' text-blue-500'>Flix</span>
          </div>
          <nav>
              <ul className=' list-unstyled flex flex-col md:flex-row gap-5 items-center'>
                <li>
                    <Link to='/' className=' text-xl hover:text-blue-500'>Home</Link>
                </li>
                <li>
                    <Link to="/about" className=' text-xl hover:text-blue-500'>About</Link>
                </li>
                <li>
                    <Link to='/movies' className=' text-xl hover:text-blue-500'>Movies</Link>
                </li>
              </ul>
          </nav>
          <button className='p-4 rounded bg-blue-600 text-white text-2xl text-center'>Login</button>
    </header>
  )
}

export default Header
