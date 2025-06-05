import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext';
import image from '../images/inspire-img.jpg'

const InspireSection = () => {
      const { user } = useAuthContext();
    
  return (
    <div className='px-4 py-8 flex justify-evenly items-center bg-[#D9D9D9]'>
        <div>
            <div className='flex flex-col gap-2 justify-center mb-10'> 
                <p className='font-md text-xl'>Inspire</p>
                <h2 className='font-semibold'>Discover the Benefits of <br />Our Blog</h2>
                <p className='text-base'>Stay updated with fresh content that informs and engages. <br />Our expert insights empower you to navigate your interests with confidence.
                </p>
            </div>
            <div className='flex '>
                <div className='w-64 mr-6'>
                    <p className='font-semibold text-lg'>Expert Insights</p>
                    <p className='text-base'>Gain knowledge from industry leaders and passionate writers sharing their expertise.</p>
                </div>
                <div className='w-64'>
                    <p className='font-semibold text-lg'>Vibrant Community</p>
                    <p className='text-base'>Join a community of like-minded individuals who share your passion for learning.</p>
                </div>
            </div>
            <div className='pt-20 flex flex-row  items-center gap-2'>
                <button className='px-8 py-3 text-base text-black rounded-sm border-2 border-black hover:bg-black hover:text-white'>Learn More</button>
                {!user ? (
                    <button className='px-8 py-3 text-base hover:underline'>{`Sign Up >`}</button>
                ) : 
                " "}
            </div>
        </div>
        <div>
            <img src={image} alt="ideas coming from book" className='w-[500px] h-96'/>
        </div>
    </div>
  )
}

export default InspireSection