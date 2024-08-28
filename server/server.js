require('dotenv').config({path: '../.env'});


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('./Schema/User.js');

const port = 5000;

const app = express();
app.use(express.json());
app.use(cors());

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password


mongoose.connect(process.env.DB_LOCATION, {
  autoIndex: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Connection error', error));

const formatDatatoSend = (user) => {
  const access_token = jwt.sign({id: user._id}, process.env.SECRET_ACCESS_KEY);

  return{
    access_token,
    profile_img: user.personal_info.profile_img,
    username: user.personal_info.username,
  }
}


app.post('/signup', (req, res) => {
  let {username, email,password} = req.body;
  if(!username || username.length < 3){
    return res.status(403).json({"error": "username is invalid"});
  }
  if(!email.length){
    return res.status(403).json({"error": "Enter an email"});
  }
  if(!emailRegex.test(email)){
    return res.status(403).json({"error": "Email is invalid"});
  }
  if(!password || password.length < 6){
    return res.status(403).json({"error": "Password must be more than 5 characters long"});
  }
  if(!passwordRegex.test(password)){
    return res.status(403).json({"error": "Password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 upercase letter"});
  }

  bcrypt.hash(password, 10, (err, hashed_password) => {
    const user = new User({
      personal_info: {email,
        password: hashed_password, username}
    }) 

    user.save().then((u) => {
      return res.status(200).json(formatDatatoSend(u));
    })
    .catch(err => {
      if(err.code == 1100){
        return res.status(500).json({"error": "Email already exists"});
      }
      return res.status(500).json({"error" : err.message});
    })

  })

  
});

app.post('/login', (req,res) => {
  let {email,password} = req.body;

  User.findOne({"personal_info.email": email})
  .then((user) => {
    if(!user){
      return res.status(403).json({"error": "Email not found"});
    }
  
    bcrypt.compare(password, user.personal_info.password, (err, result) => {
      if(err){
        return res.status(403).json({"error": "Error occured while loggin in please try again"});
      }
      if(!result){
        return res.status(403).json({"error": "incorrect password"});
      }
      else{
        return res.status(200).json(formatDatatoSend(user));

      }
    })
  })
  .catch(err => {
    console.log(err.message)
    return res.status(500).json({"error": err.message});
  })
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
