import React from 'react'





export const useAddBlog = () => {

    const addBlog = async (title, author, description, body) => {
        const response = await fetch('http://localhost:5000/api/blogs/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ title, author, description, body })
          })
          const json = await response.json()

          if (response.ok) {
            // save the blog to local storage
            localStorage.setItem('blog', JSON.stringify(json))
          }

    }
    return { addBlog }
}
