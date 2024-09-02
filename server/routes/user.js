const express = require('express')

const { loginUser, signupUser } = require('../controllers/userController')

const server = express.Router()

// login route
server.post('/login', loginUser)

// signup route
server.post('/signup', signupUser)

module.exports = server;