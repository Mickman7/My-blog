import React from 'react'
import aboutImg from '../images/books.jpg'

const About = () => {
  return (
    <div className='bg-about'>
        <h1 className='py-8 text-4xl font-bold text-center'>About our blog</h1>
        <section className='p-10 my-2 flex'> 
            <img className='h-full w-full sm:text-sm' src={aboutImg} alt="about section" />
            <div className='ml-4'>
                <h3 className='mb-2 font-semibold text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, aperiam.</h3>
                <p className='text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, 
                    architecto quibusdam repudiandae libero accusantium odit repellat rerum beatae eligendi minus nesciunt id. Sequi 
                    repudiandae cupiditate possimus. Blanditiis placeat fuga error voluptates aperiam vel qui provident optio? 
                    Cupiditate harum quisquam vitae.

                    <br/> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, 
                    architecto quibusdam repudiandae libero accusantium odit repellat rerum beatae eligendi minus nesciunt id. Sequi 
                    repudiandae cupiditate possimus.
                </p>
            </div>
        </section>
    </div>
  )
}

export default About