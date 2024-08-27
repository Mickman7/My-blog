require('dotenv').config();

console.log(process.env.DB_LOCATION);

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('./Schema/User.js');

const port = 5000;

const app = express();
app.use(express.json());

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password


mongoose.connect(process.env.DB_LOCATION, {
  autoIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Connection error', error));

app.post('/login', (req, res) => {
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
      return res.status(200).json({user: u});
    })
    .catch(err => {
      return res.status(500).json({"error" : err.message});
    })

  })

  
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
