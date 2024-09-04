const User = require('../Schema/User')
const jwt = require('jsonwebtoken')

// const createToken = (_id) => {
//   return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
// }

// login a user
const loginUser = async (req, res) => {
  res.json({mssg: 'login user'})
}

// signup a user
const signupUser = async (req, res) => {
  const {username, email, password} = req.body

  try {
    const user = await User.signup(username, email, password)

    // create a token
    // const token = createToken(user._id)

    res.status(200).json({email})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupUser, loginUser }