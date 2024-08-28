import React, { useRef, useState } from 'react'
import axios from 'axios';


function Login() {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const authForm = useRef();

    const userAuthToServer = (serverRoute,formData) => {
      axios.post(import.meta.env.VITE_SERVER_DOMAIN + serverRoute, formData)
      .then(({data}) => {
        console.log(data);
      })
      .catch(({response}) => {
        console.error(response.data.error);
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      let serverRoute = type == "login" ? "/login" : "/signup";

      let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
      let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password
      
      let form = new FormData(authForm.current);
      let formData = {};

      for(let [key, value] of form.entries()){
        formData[key] = value;
      }

      // form validation
      let {username, email, password} = formData;


      if(!username || username.length < 3){
        return console.log({"error": "username is invalid"});
      }
      if(!email.length){
        return console.log({"error": "Enter an email"});
      }
      if(!emailRegex.test(email)){
        return console.log({"error": "Email is invalid"});
      }
      if(!password || password.length < 6){
        return console.log({"error": "Password must be more than 5 characters long"});
      }
      if(!passwordRegex.test(password)){
        return console.log({"error": "Password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 upercase letter"});
      }

      console.log("Form submitted successfully", formData);
      userAuthToServer(serverRoute, formData);
      // before finishing do the ui alert at timestamp 3:08:22
    }



  return (
    <div className="flex justify-center items-center">
        <form ref={authForm} className='w-auto h-auto p-8 border rounded flex flex-col justify-center items-center' onSubmit={handleSubmit}>
          <h1 className='font-bold text-2xl'>Login</h1>

          <div className='m-2 flex flex-col'>
            <label className='' htmlFor='username'>Username</label>
            <input className='border-2 rounded' type="text" name='username' placeholder='Enter Username' onChange={(e) => {setUsername(e.target.value)}}/>
          </div>

          <div className='m-2 flex flex-col'>
            <label className='' htmlFor='email'>Email</label>
            <input className='border-2 rounded' type="email" name='email' placeholder='Enter Email' onChange={(e) => {setEmail(e.target.value)}}/>
          </div>

          <div className='m-2 flex flex-col'>
            <label htmlFor="password">Password</label>
            <input className='border-2 rounded' type="password" name='password' placeholder='Enter Password' onChange={(e) => {setPassword(e.target.value)}} />
          </div>

            <button className='w-48 h-8 mt-8 bg-sky-500 rounded-2xl '>Login</button>
            <a href="#">Register</a>
        </form>
    </div>
  )
}

export default Login