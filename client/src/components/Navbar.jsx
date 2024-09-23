import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useSignout } from '../hooks/useSignout'
import blogLogo from '../images/blog-logo.jpg'



const Navbar = () => {
  const { user } = useAuthContext();
  const { signOut } = useSignout();

  const handleClick = () => {
    signOut();
  }

  return (
    <>
    <nav className='p-1 border-b-2 flex items-center'>
        <img className='w-12 h-12 mr-8' src={blogLogo} alt="nav logo" />
        <div className='relative flex justify-around items-center gap-2'>
            <NavLink className='p-1 m-2 rounded hover:bg-gray-200' to="/">Home</NavLink>
            <NavLink className='p-1 m-2 rounded hover:bg-gray-200' to="/blogs">Blogs</NavLink>
        </div>
            {user ? (
              <div className='absolute right-0 mr-5'>
                <span>{user.username}</span>
                <NavLink className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' to="/" onClick={handleClick}>Log out</NavLink>
              </div>
            ): (
              <div className='absolute right-0 mr-5 flex justify-center items-center gap-[5px]'>
                <NavLink className='rounded-full px-4 py-1 font-semibold hover:underline underline-offset-4 text-indigo-500 duration-300' to="/signin">Signin</NavLink>
                <NavLink className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' to="/signup">Signup</NavLink>
              </div>
            )}
        
    </nav>

    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default Navbar
