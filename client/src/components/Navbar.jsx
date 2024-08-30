import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='m-4 border-b-2 flex items-center'>
        <img className='w-10 h-10 mr-8' src="https://static.vecteezy.com/system/resources/previews/004/853/320/non_2x/book-read-library-study-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg" alt="nav logo" />
        <div className='flex justify-around items-center'>
            <NavLink className='m-2' to="/">Home</NavLink>
            <NavLink className='m-2' to="/signup">Signup</NavLink>
            <NavLink className='m-2' to="/signin">Signin</NavLink>
            {/* <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/more">More</NavLink> */}
        </div>
    </nav>

    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default Navbar
