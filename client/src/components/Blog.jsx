import React from 'react'


const Blog = ({blogs}) => {

  
  const handleClick = () => {
    
  }

  return (
    <div className='p-2 m-2 w-64 h-80 border-2 rounded flex flex-col justify-center'>
        <h2 className='my-4 font-bold text-center'>{blogs.title}</h2>
        <h4>{blogs.author}</h4>
        <img src={blogs.image} alt="blog image" />
        <p className='my-2 font-semibold'>{blogs.body}</p>
        <button className='relative bottom-0 border-2 border-sky-500 rounded-full bg-sky-200 hover:bg-sky-500' type="submit">Read more</button>
    </div>
  )
}

export default Blog