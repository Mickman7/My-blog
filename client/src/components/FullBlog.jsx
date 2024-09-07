import React from 'react'

const FullBlog = ({blog}) => {
  const imageUrl = `http://localhost:5000/uploads/${blog.image}`

  return (
    <div className='p-5 flex flex-col items-center'>
      <h2 className='mx-2 text-4xl font-bold text-center'>{blog.title}</h2>
      <h4 className='mx-2'>Author: {blog.author}</h4>
      <img className='w-full h-96 my-8' src={imageUrl} alt="full blog" />

      <div className='w-full text-start'>
        <p className='mx-2 my-2 font-semibold'>{blog.body}</p>
      </div>
    </div>
  )
}

export default FullBlog