import React from 'react'
import HeroImg from '../images/hero-image.jpg'


const Hero = () => {
  return (
    <div className='relative'>
      <img className="p-4 object-cover w-full h-full" src={HeroImg} alt="Hero section" />
      <div className='absolute inset-0 flex flex-col m-[15%] items-center text-center'>
        <h1 className='overflow-hidden font-bold text-6xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
          Share wants on your mind
        </h1>
        {/* <p className='text-left text-base text-lime-950 inset-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Esse sed iusto similique harum aut quia odio explicabo, <br/>
            culpa itaque, ab iste ducimus libero, expedita temporibus impedit 
            accusantium illum voluptates dolore! <br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eligendi.</p> */}
      </div>
    </div>
  )
}

export default Hero