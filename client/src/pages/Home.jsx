import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hero from '../components/Hero';
import PostCategory from '../components/PostCategory';
import Category from '../components/Category';
import About from './About'
import Author from '../components/Author'
import Footer from '../components/Footer';


const Home = () => {
  const [blogs, setBlogs] = useState();

  const fetchBlogs = async () => {
    const response = fetch('/api/blogs')
  }

  useEffect(() =>{
    fetchBlogs();
  })
  
  return (
    <div className='block text-4xl overflow-hidden'>
      <Hero/>

      <Category name="Latest"/>
      <div className='flex flex-col justify-center items-center'>
        <PostCategory />
      </div>

      <Category name="Popular"/>
      <div className='flex flex-col justify-center items-center'>
        <PostCategory />
      </div>


      <About/>
      <Author name="VE Schwab"/>
      <Footer/>
    </div>
  )
}

export default Home
