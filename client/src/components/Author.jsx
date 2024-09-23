import React from 'react'
import ProfileImg from '../images/veschwab.png'

const Author = ({name}) => {
  return (
    <div className='p-2 my-4 mx-2 w-[700px] flex justify-center items-center border-2'>
        <img className='w-32 h-32 rounded-full' src={ProfileImg} alt="profile" />
        <div className='ml-4 flex flex-col'>
            <h2 className='text-lg font-bold'>{name}</h2>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Odio, alias fugit! Ut sint, voluptas modi rem odio perspiciatis iusto autem!</p>

            <div className='m-4 w-96 h-12 flex items-center'>
                <a className='w-20 text-base font-semibold text-center hover:underline underline-offset-4' href="#">Website</a>
                <a className='w-20 text-base font-semibold text-center border-l-2 border-r-2 text-center hover:underline underline-offset-4' href="#">Twitter</a>
                <a className='w-20 text-base font-semibold text-center hover:underline underline-offset-4'href="#">More</a>
            </div>

        </div>
    </div>
  )
}

export default Author