import React from 'react'

const Blog = ({blogs}) => {
  
  return (
    <div className='p-2 m-2 w-64 h-auto border-2 rounded flex flex-col justify-center'>
        <h2 className='my-4 font-bold text-center'>{blogs.title}</h2>
        <h4>{blogs.author}</h4>
        <p className='my-2 font-semibold'>{blogs.body}</p>
        <button className='border-2 border-sky-500 rounded-full bg-sky-200 hover:bg-sky-500' type="submit">Read more</button>
    </div>
  )
}

export default Blog