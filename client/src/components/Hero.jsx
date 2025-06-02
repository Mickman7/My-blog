import React from 'react'
import HeroImg from '../images/hero-image-2.jpg'


const Hero = () => {
  return (
    <div className='relative'>
      <img className="p-4 object-cover w-full h-full" src={HeroImg} alt="Hero section" />
      <div className='absolute inset-0 flex flex-col m-[15%] items-center text-center self-center'>
        <h1 className='overflow-hidden font-bold text-6xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]'>
          Explore Your Passion, Share Your Story
        </h1>
        <p className='pt-5 text-white text-center text-base text-lime-950 inset-1'>Join a vibrant community of writers and readers. Discover articles that inspire, inform, <br />and ignite your creativity.
        </p>
        <div className='py-8 flex-row justify-between gap-4 self-center'>
          <button className='px-5 py-2 mr-5 bg-white text-base rounded-sm hover:opacity-90'>Join</button> 
          <button className='px-5 py-1.5 text-base text-white rounded-sm border-2 border-white text-white hover:bg-white hover:text-black'>Learn More</button> 
        </div>
      </div>
    </div>
  )
}

export default Hero