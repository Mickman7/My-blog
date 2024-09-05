import React, { useEffect, useState } from 'react'
import Blog from '../components/Blog'



const Blogs = () => {

  const [blogs, setBlogs] = useState();

  const fetchBlogs = async () => {
    const response = await fetch('/api/blogs/blogs');
    const json = await response.json();
    console.log(json)

      if (response.ok) {
        setBlogs(json);
      }
  }

  useEffect(() =>{
    fetchBlogs();
  },[])

  return (
    <div>
        <div className='text-center'>
            <h1 className='font-bold mb-[20px]'>Discover More Blogs</h1>
            <div className='p-5 flex justify-center items-center'>
                {blogs && blogs.map((blogs) => (
                    <Blog key={blogs.id} blogs={blogs}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Blogs