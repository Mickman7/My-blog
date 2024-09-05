const Blog = require('../Schema/Blog')
const mongoose = require('mongoose')


// get all blogs
const getBlogs = async (req, res) => {
    const blogs = await Blog.find({}).sort({createdAt: -1})
  
    res.status(200).json(blogs)
}

// get a single blog
const getBlog = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: `Blog doesn't exist`})
    }
  
    const blog = await Blog.findById(id)
  
    if (!blog) {
      return res.status(404).json({error: 'No such blog'})
    }
  
    res.status(200).json(workout)
  }

// create a new workout
const createBlog = async (req, res) => {
    const {title, author, body} = req.body

    // add to the database
    try {
        const blog = await Blog.create({ title, author, body })
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



module.exports = {
    getBlogs,
    getBlog,
    createBlog,
  }