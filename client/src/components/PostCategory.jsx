import React, { useState, useEffect } from 'react'
import Blog from '../components/Blog'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PostCategory = () => {
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
    <div className='p-10 w-5/6 flex justify-center items-center'>
        <button><FontAwesomeIcon icon={faChevronLeft} /></button>
        <div className='px-4 grid gap-x-4 gap-y-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            
            {blogs && blogs.slice(0,3).map((blogs) => (
                <Blog className="w-[200px]" key={blogs.id} blogs={blogs}/>
            ))}
        </div>
        <button><FontAwesomeIcon icon={faChevronRight} /></button>
    </div>
  )
}

export default PostCategory