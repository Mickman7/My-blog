import React from 'react'



export const useGetBlog = () => {

    const getBlog = async (formData) => {
        const response = await fetch('http://localhost:5000/api/blogs/blogs/:id', {
            method: 'POST',
            body: formData
          })
          const json = await response.json()

          if(!response.ok){
            throw new Error(json.error || 'Failed to add blog')
          }

          if (response.ok) {
            // save the blog to local storage
            localStorage.setItem('blog', JSON.stringify(json))
          }

    }
    return { getBlog }
}