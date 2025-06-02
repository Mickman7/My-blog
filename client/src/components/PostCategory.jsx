import React, { useState, useEffect } from 'react'
import Blog from '../components/Blog'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PostCategory = () => {
    const [blogs, setBlogs] = useState();
    const [currentPage, setCurrentPage] = useState(0);
    const blogsPerPage = 3;

    const fetchBlogs = async () => {
        const response = await fetch('http://localhost:5001/api/blogs/blogs');
        const json = await response.json();
        console.log(json)

        if (response.ok) {
            setBlogs(json);
        }
    }

    useEffect(() =>{
        fetchBlogs();
    },[])

    const handleNext = () => {
        if (blogs && (currentPage + 1) * blogsPerPage < blogs.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

  return (
    <div className='p-10 w-5/6 flex justify-center items-center'>
        <button onClick={handlePrevious} disabled={currentPage === 0}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className='px-4 grid gap-x-4 gap-y-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {blogs && blogs.slice(currentPage * blogsPerPage, (currentPage + 1) * blogsPerPage).map((blog) => (
                <Blog className="w-[200px]" key={blog.id} blogs={blog} />
            ))}
        </div>
        <button onClick={handleNext} disabled={blogs && (currentPage + 1) * blogsPerPage >= blogs.length}>
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    </div>
  )
}

export default PostCategory