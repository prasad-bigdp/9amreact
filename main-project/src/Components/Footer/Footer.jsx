import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <>
    <div className='col-12 container px-5 social-medias'>
        <div className=" mx-5 px-4 ">
        <ul className='d-flex justify-content-evenly col-3 text-white'>
            <i className="fa-brands  fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
            </ul>
        </div>
        </div>
    <div className='Footer-area d-flex justify-content-center '>
        
      <div className="col-2  text-white pt-3">
            <ul className='text-white'>
                <p>Audio Description</p>
                <p>Investor Relations</p>
                <p>Legal Notices</p>
            </ul>
      </div>
      <div className="col-2 "><ul className='text-white'>
                <p>Audio Description</p>
                <p>Investor Relations</p>
                <p>Legal Notices</p>
            </ul></div>
      <div className="col-2 "><ul className='text-white'>
                <p>Audio Description</p>
                <p>Investor Relations</p>
                <p>Legal Notices</p>
            </ul></div>
      <div className="col-2 "><ul className='text-white'>
                <p>Audio Description</p>
                <p>Investor Relations</p>
                <p>Legal Notices</p>
            </ul></div>
    </div>
    <div className='col-12 container px-5 '>
        <div className=" mx-5 px-5 ">
    <p className='copyright pt-3 px-4 '>By <a href="https://arshadakl.in/">arshad</a></p>
        </div>
        </div>
    </>
  )
}

export default Footer
