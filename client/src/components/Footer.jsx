import React from 'react'
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-[100%] p-8 bg-footer'>
        <div className='flex justify-around p-4 border border-black items-center'>

           {/* Subscribe section */}
           <div className='flex flex-col'>
            <p className='text-xl font-semibold'>Subscribe</p>
            <p className='text-sm font-semibold'>Join us today</p>
            <p className='text-sm'>Let your mind be seen:</p>
            <div className='flex flex-row justify-evenly gap-2 mt-3'>
              <input type="text"  placeholder='Enter Your Email' className="w-40 h-8 p-2 border border-black bg-transparent text-black placeholder-black placeholder:text-sm placeholder:leading-10 text-base focus:text-lg not-placeholder-shown:text-lg outline-none"/>
              <NavLink className='px-4 py-2 h-8 bg-black text-sm text-white text-center rounded-sm hover:opacity-80' to='signup'>Join us</NavLink>
            </div>
          </div>

          {/* Follow section */}
          <div className='flex flex-col justify-start'>
            <p className='text-xl font-semibold'>Follow</p>
            <div className='flex flex-col justify-start'>
              <div className='py-2 flex items-center text-center'>
                <FontAwesomeIcon className='w-[25px] h-[25px] mr-2' icon={faInstagram} />
                <p className='text-sm'>@Thinkpod</p>
              </div>

              <div className='py-2 flex  items-center text-center'>
                <FontAwesomeIcon className='w-[25px] h-[25px] mr-2' icon={faTwitter} />
                <p className='text-sm'>@Thinkpod723</p>
              </div>

              <div className='py-2 flex items-center text-center'>
                <FontAwesomeIcon className='w-[25px] h-[25px] mr-2' icon={faFacebook} />
                <p className='text-sm'>@Thinkpod</p>
              </div>

              <div className='py-2 flex items-center text-center'>
                <FontAwesomeIcon className='w-[25px] h-[25px] mr-2' icon={faLinkedin} />
                <p className='text-sm'>Thinkpod</p>
              </div>
            </div>
        </div>

        {/* Contact section */}
        <div>
            <p className='text-xl font-semibold'>Contact</p>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Incidunt, unde.</p>
            <p className='text-sm'>+44: 7547 669870</p>
            <p className='text-sm'>Thinkpod@gmail.com</p>
          </div>
        </div>

        <div className='flex flex-row justify-between my-1'>
          <p className='text-sm'>© 2025 Thinkpod. All rights reserved.</p>
          <div className='flex flex-row justify-evenly gap-3'>
            <a href='#' className='text-sm underline'>Privacy Policy</a>
            <a href='#' className='text-sm underline'>Terms of Service</a>
            <a href='#' className='text-sm underline'>Cookies Settings</a>
          </div>
        </div>
    </div>
  )
}

export default Footer