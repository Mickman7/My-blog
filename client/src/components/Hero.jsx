import React from 'react'
import HeroImg from '../images/hero-image.jpg'


const Hero = () => {
  return (
    <div className='relative'>
      <img className="p-4 object-cover w-full h-full" src={HeroImg} alt="Hero section" />
      <div className='absolute inset-0 flex flex-col justify-center items-center text-center'>
        <h1 className='overflow-hidden font-bold text-6xl text-lime-950 border-r-[0.15rem] border-r-sky-700 border-r-solid whitespace-nowrap animate-typing'>
          Home
        </h1>
        <p className='text-left text-base text-white inset-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Esse sed iusto similique harum aut quia odio explicabo, <br/>
            culpa itaque, ab iste ducimus libero, expedita temporibus impedit 
            accusantium illum voluptates dolore! <br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eligendi.</p>
      </div>
    </div>
  )
}

export default Hero