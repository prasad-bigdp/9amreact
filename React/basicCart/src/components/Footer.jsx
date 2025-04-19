import React from 'react'

function Footer ()
{
  const dt = new Date()
  const year = dt.getFullYear();
  return (
    <footer className='bg-gray-500 text-center text-white text-2xl py-4'>
         This site belongs to XYZ &copy; {year}
    </footer>
  )
}

export default Footer
