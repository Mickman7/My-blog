const express = require('express')
const upload = require('../controllers/multerConfig')
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
router.post('/blogs', upload.single('image'), createBlog)








module.exports = router