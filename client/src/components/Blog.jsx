import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const Blog = ({blogs}) => {
  const imageUrl = `http://localhost:5000/uploads/${blogs.image}`
  // const navigate = useNavigate();



  // useEffect(() =>{
  //     fetchBlog();
  // },[])
  
  // const handleClick = () => {
  //   navigate('/blogs/${blogs._id}');    
  // }

  return (
    <div className='m-2 w-full h-full border-[1px] rounded shadow hover:shadow-xl flex flex-col justify-between'>
        <img className='w-50 h-32' src={imageUrl} alt="blog image" />
        <h2 className='mx-2 font-bold text-start'>{blogs.title}</h2>
        <h4 className='mx-2 text-start' >{blogs.author}</h4>
        <p className='mx-2 my-2 font-semibold text-start'>{blogs.description}</p>
        <NavLink to={`/blogs/${blogs._id}`} className='m-2 text-sky-500 hover:underline underline-offset-4' type="submit">Read more</NavLink>
    </div>
  )
}

export default Blog