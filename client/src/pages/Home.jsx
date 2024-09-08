import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hero from '../components/Hero';
import PostCategory from '../components/PostCategory';
import Category from '../components/Category';


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
      <PostCategory />
      <Category name="Popular"/>
      <PostCategory />
    </div>
  )
}

export default Home
