import React from 'react'
import BlogImage from '../images/blog-logo.jpg'

const ExploreSection = () => {
  return (
    <div className='py-8 text-center justify-center items-center' >
        <div className='pt-5 pb-10 justify-center items-center'> 
            <h3 className='text-2xl'>Explore</h3>
            <h2 className='py-2 font-bold text-[40px]'>Discover Our Latest Blog Posts <br />Across Categories</h2>
            <p className='py-5 text-sm justify-center'>Stay updated with our latest insights and stories. Our blog covers a variety of topics to inspire <br />and inform.</p>
        </div>
        <div className='py-10 flex flex-row justify-evenly'>
            <div className='flex flex-col items-center text-center'>
                <img src={BlogImage} alt="couch image" className='h-20 w-20'/>
                <h3 className='py-2 font-bold text-xl'>Lifestyle: Embrace the Art <br />of Living Well</h3>
                <p className='text-sm'>Explore tips and trends to enhance your lifestyle.</p>
            </div>
            <div className='flex flex-col items-center text-center'>
                <img src={BlogImage}alt="world image" className='h-20 w-20'/>
                <h3 className='py-2 font-bold text-xl'>Travel: Your Next <br />Adventure Awaits</h3>
                <p className='text-sm'>Uncover hidden gems and travel guides for your <br />journey.</p>
            </div>
            <div className='flex flex-col items-center text-center'>
                <img src={BlogImage} alt="heart image" className='h-20 w-20'/>
                <h3 className='py-2 font-bold text-xl'>Health: Prioritize Your <br />Well-Being Today</h3>
                <p className='text-sm'>Find valuable health tips and wellness advice.</p>
            </div>
        </div>
        <div className='pt-20 flex flex-row justify-center items-center gap-2'>
            <button className='px-8 py-3 text-base text-black rounded-sm border-2 border-black hover:bg-black hover:text-white'>Read</button>
            <button className='px-8 py-3 text-base hover:underline'>{`Join >`}</button>
        </div>
    </div>
  )
}

export default ExploreSection