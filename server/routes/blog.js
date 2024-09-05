const express = require('express')
const {
  getBlogs, 
  getBlog, 
  createBlog, 
  deleteBlog, 
  updateBlog
} = require('../controllers/blogController')



const router = express.Router()

// GET all Blogs
router.get('/blogs', getBlogs)

// GET a single Blog
router.get('/blogs/:id', getBlog)

// POST a new Blog
router.post('/blogs', createBlog)








module.exports = router