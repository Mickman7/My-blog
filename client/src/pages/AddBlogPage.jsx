import React, { useState }from 'react'
import { useAddBlog } from '../hooks/useAddBlog'

const AddBlogPage = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null); // Ensure image is initialized
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const { addBlog } = useAddBlog();

  const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append('title', title);
      formData.append('author', author);
      formData.append('image', image); // Ensure image is used here
      formData.append('description', description);
      formData.append('body', body);

      try{
        console.log([...formData])
        await addBlog(formData);
      }catch(err){
        console.error(err.message)
      }
  };

  return (
    <div className='flex justify-center'>
        <form className='p-5 w-[50%] h-96 border-2 rounded flex flex-col justify-center' onSubmit={handleSubmit}>
            <input className='p-0.5 m-2 w-48  border-2 rounded' type="text" name="author" placeholder='Enter author name' onChange={(e) => {setAuthor(e.target.value)}}/>
            <input className='p-0.5 m-2 w-48  border-2 rounded' type="text" name="title" placeholder='Add title' onChange={(e) => {setTitle(e.target.value)}}/>

            <label className='mt-2 ml-2'>Add image</label>
            <input className='m-2 w-64 border-2 rounded' type="file" name="image" onChange={(e) => {setImage(e.target.files[0])}}/>
            <input className='p-0.5 m-2 w-48  border-2 rounded' type="text" name="description" placeholder='Add description' onChange={(e) => {setDescription(e.target.value)}}/>
            <textarea className='p-0.5 m-2 w-96  border-2 rounded' name="body" placeholder='Add your body' onChange={(e) => {setBody(e.target.value)}}></textarea>
            <button className='p-1 my-4 mx-2 w-20 bg-blue-500 text-white rounded ' type="submit">Add</button>
        </form>
    </div>
  )
}

export default AddBlogPage