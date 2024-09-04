require('dotenv').config({path: '../.env'});


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const userRoutes = require('./routes/user')

const User = require('./Schema/User');
const { loginUser, signupUser } = require('./controllers/userController')

const port = 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/user', userRoutes)




mongoose.connect(process.env.DB_LOCATION, {
  autoIndex: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Connection error', error));



app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
