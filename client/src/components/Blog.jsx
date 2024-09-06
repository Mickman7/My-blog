import React from 'react'


const Blog = ({blogs}) => {
  const imageUrl = `http://localhost:5000/uploads/${blogs.image}`
  
  const handleClick = () => {
    
  }

  return (
    <div className='p-2 m-2 w-full h-full border-2 rounded flex flex-col justify-center'>
        <h2 className='my-4 font-bold text-center'>{blogs.title}</h2>
        <img src={imageUrl} alt="blog image" />
        <h4>{blogs.author}</h4>
        <p className='my-2 font-semibold'>{blogs.description}</p>
        <button className='relative bottom-0 border-2 border-sky-500 rounded-full bg-sky-200 hover:bg-sky-500' type="submit">Read more</button>
    </div>
  )
}

export default Blog