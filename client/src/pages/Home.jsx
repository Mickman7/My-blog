import React, { useEffect, useState } from 'react'

const Home = () => {
  const [blogs, setBlogs] = useState();

  const fetchBlogs = async () => {
    const response = fetch('/api/blogs')
  }

  useEffect(() =>{
    fetchBlogs();
  })
  
  return (
    <div className='text-4xl flex justify-center text-center'>
      <div className='inline-block'>
        <h1 className='overflow-hidden border-r-[0.15] border-r-sky-700 border-r-solid whitespace-nowrap  animate-typing'>This is the <strong>Home</strong> page</h1>
        <p>Go back to ep 14</p>
      </div>
    </div>
  )
}

export default Home
