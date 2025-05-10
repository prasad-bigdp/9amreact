import React from 'react'
import './NavBar.css'

function NavBar({scrolled}) {
    return (
        <div className='col-12 d-flex justify-content-center navBar' id={scrolled ? "nonetransp" : "transp" }>
            <div className='col-11  text-white d-flex align-items-center'>
                <a href="" className='col-1 text-center'><img className='logoImg' src="/logo.png" alt="" /></a>
                <ul className='d-flex m-0 p-0 col-5 align-items-center justify-content-evenly' >
                    <li >Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>

                </ul>
                <ul className='d-flex m-0 p-0 col-6 align-items-center justify-content-end nav-left-items'>
                    <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="MagnifyingGlass" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z" fill="white"></path></svg></li>
                    <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Bell" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z" fill="currentColor"></path></svg></li>
                    {/* <li><img className='avatar-icon' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" /></li> */}
                    <div className="dropdown">
                        <img className='avatar-icon dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />

                        <div className="dropdown-menu bg-dark text-white d-felx justify-content-center text-center ">
                            <div className=' d-flex col-12 px-3 mb-1 align-items-center'>
                                <img className='avatar-icon-sub col-6' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                                <h6 className='col-5'>PRASAD</h6>
                            </div>
                        </div>
                    </div>

                </ul>

            </div>
        </div>
    )
}

export default NavBar
