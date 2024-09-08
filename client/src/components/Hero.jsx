import React from 'react'
import HeroImg from '../images/hero-image.jpg'


const Hero = () => {
  return (
    <div className='relative'>
      <img className="p-4 object-cover w-full h-full" src={HeroImg} alt="Hero section" />
      <div className='absolute inset-0 flex flex-col justify-center items-center text-center'>
        <h1 className='overflow-hidden border-r-[0.15rem] border-r-sky-700 border-r-solid whitespace-nowrap animate-typing'>
          This is the <strong>Home</strong> page
        </h1>
        <p>Go back to ep 14</p>
      </div>
    </div>
  )
}

export default Hero