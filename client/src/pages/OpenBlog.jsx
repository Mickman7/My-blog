import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Blog from '../components/FullBlog'

const OpenBlog = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`/api/blogs/blogs/${id}`);
      const json = await response.json();

      if (response.ok) {
        setPostInfo(json);
        console.log(json);
      }
    };

    fetchBlog();
  }, [id]);

  if (!postInfo) {
    return (
      <div class='flex space-x-2 justify-center items-center bg-white h-screen'>
        <div class="border-gray-300 h-10 w-10 animate-spin rounded-full border-8 border-t-blue-600" />
      </div>

    );
  }

  return (
    <div className='p-5 flex justify-center items-center'>
      <Blog key={postInfo.id} blog={postInfo}/>
    </div>
  );
};

export default OpenBlog;