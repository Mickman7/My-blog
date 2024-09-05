import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useSignout } from '../hooks/useSignout'



const Navbar = () => {
  const { user } = useAuthContext();
  const { signOut } = useSignout();

  const handleClick = () => {
    signOut();
  }

  return (
    <>
    <nav className='p-1 mb-5 border-b-2 flex items-center'>
        <img className='w-12 h-12 mr-8' src="https://static.vecteezy.com/system/resources/previews/004/853/320/non_2x/book-read-library-study-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg" alt="nav logo" />
        <div className='relative flex justify-around items-center gap-2'>
            <NavLink className='p-1 m-2 rounded hover:bg-gray-200' to="/">Home</NavLink>
            <NavLink className='p-1 m-2 rounded hover:bg-gray-200' to="/blogs">Blogs</NavLink>
        </div>
            {user ? (
              <div className='absolute right-0 mr-5'>
                <span>{user.username}</span>
                <NavLink className='rounded-full px-4 py-1 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300' to="/signin" onClick={handleClick}>Log out</NavLink>
              </div>
            ): (
              <div className='absolute right-0 mr-5 flex gap-[5px]'>
                <NavLink className='rounded-full px-4 py-1 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300' to="/signup">Signup</NavLink>
                <NavLink className='rounded-full px-4 py-1 border-[1px] border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300' to="/signin">Signin</NavLink>
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
