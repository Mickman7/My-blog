import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Blog from '../components/Blog'
import { useAuthContext } from '../hooks/useAuthContext'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Blogs = () => {
    const { user } = useAuthContext();
    const [blogs, setBlogs] = useState();
    const navigate = useNavigate();


    const fetchBlogs = async () => {
        const response = await fetch('/api/blogs/blogs');
        const json = await response.json();
        console.log(json)

        if (response.ok) {
            setBlogs(json);
        }
    }


    const handleClick = () => {
        navigate('/add');
      }

    useEffect(() =>{
        fetchBlogs();
    },[])

    if (!blogs) {
        return (
          <div class='flex space-x-2 justify-center items-center bg-white h-screen'>
            <div class="border-gray-300 h-10 w-10 animate-spin rounded-full border-8 border-t-blue-600" />
          </div>
    
        );
      }

  return (
    <div>
        <div className='text-center'>
            {user && (
                <div className='absolute right-0 mr-12 flex justify-center items-center text-center'>
                    <h4 className='mr-2'>Add Blog: </h4>
                    <button className='m-0 rounded hover:bg-gray-200' onClick={handleClick}><FontAwesomeIcon className='w-[25px] h-[25px]' icon={faSquarePlus} /></button>
                </div>
            )}

            <h1 className='font-bold mb-[20px]'>Discover More Blogs</h1>
            <div className='p-20 grid gap-x-4 gap-y-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                {blogs && blogs.map((blogs) => (
                    <Blog key={blogs.id} blogs={blogs}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Blogs