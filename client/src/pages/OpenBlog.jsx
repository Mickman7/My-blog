import React, { useEffect, useState } from 'react'


const OpenBlog = async () => {
    const imageUrl = `http://localhost:5000/uploads/${postInfo.cover}`
    cconst [postInfo,setPostInfo] = useState(null);

    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
        .then(response => {
            response.json().then(postInfo => {
            setBlog(postInfo);
            });
        });
    }, []);


  return (
    <div>
        <img className='' src={imageUrl} alt="blog image" />
        <h2 className='mx-2 font-bold text-start'>{postInfo.title}</h2>
        <h4 className='mx-2 text-start' >{postInfo.author}</h4>
        <p className='mx-2 my-2 font-semibold text-start'>{postInfo.description}</p>
    </div>
  )
}

export default OpenBlog