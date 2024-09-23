import React from 'react'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-[100%]'>
        <div className='flex justify-around p-10 bg-footer'>
          {/* Contact section */}
          <div>
            <p className='text-base font-semibold underline'>Contact</p>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Incidunt, unde.</p>
            <p className='text-sm'>+44: 7547 669870</p>
            <p className='text-sm'>example@gmail.com</p>
          </div>

          {/* Follow section */}
          <div className='flex flex-col'>
            <p className='text-base font-semibold underline '>Follow</p>
            <div className='py-2 flex justify-evenly items-center text-center'>
              <FontAwesomeIcon className='w-[25px] h-[25px]' icon={faInstagram} />
              <p className='text-sm'>@Something</p>
            </div>

            <div className='py-2 flex justify-center items-center text-center'>
              <FontAwesomeIcon className='w-[25px] h-[25px]' icon={faTwitter} />
              <p className='text-sm'>@Something723</p>
            </div>

            <div className='py-2 flex justify-center items-center text-center'>
              <FontAwesomeIcon className='w-[25px] h-[25px]' icon={faFacebook} />
              <p className='text-sm'>@Something</p>
            </div>
        </div>

          {/* Subscribe section */}
          <div className='flex flex-col'>
            <p className='text-base font-semibold underline'>Subscribe</p>
            <p className='text-sm'>Join us today</p>
            <p className='text-sm'>Express your mind</p>
            <NavLink className='my-2 p-[2px] w-auto bg-sky-500 rounded-full text-sm text-white font-bold text-center' to='signup'>Join us</NavLink>
          </div>
          
        </div>

        <hr className='flex-grow border-t border-black'/>
        <hr className='flex-grow border-t border-black'/>
    </div>
  )
}

export default Footer