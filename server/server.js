require('dotenv').config({path: '../.env'});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user');
const blogRoutes = require('./routes/blog');

const User = require('./Schema/User');
const Blog = require('./Schema/Blog')

const port = 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/user', userRoutes)
app.use('/api/blogs', blogRoutes)




mongoose.connect(process.env.DB_LOCATION, {
  autoIndex: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Connection error', error));



app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
