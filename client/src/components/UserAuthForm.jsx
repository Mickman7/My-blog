import React, { useRef, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useSignup } from "../hooks/useSignup";
import { useSignin } from '../hooks/useSignin';
import { useAuthContext } from '../hooks/useAuthContext'



const UserAuthForm = ({type})  =>{
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {signup, error, isLoading} = useSignup();
    const {signin} = useSignin();



    const authForm = useRef();

    
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if(type === "signup"){
        await signup(username, email, password);
      }
      else{
        await signin(email, password);
      }
    }



  return (
    <div className="flex justify-center items-center">
        <form ref={authForm} className='w-96 h-auto p-8 border rounded flex flex-col justify-center items-center' onSubmit={handleSubmit}>
          <h1 className='mb-4 font-bold text-4xl'>{type == "sign-up" ? "Sign up" : "Sign in"}</h1>
          {
            type != "sign-in" ? (

            <div className='m-2 relative w-[100%] flex flex-col'>
              <label className='' htmlFor='username'>Username</label>
              <input className='p-1 border-[1px] rounded' type="text" name='username' placeholder='Enter Username' onChange={(e) => {setUsername(e.target.value)}}/>
            </div>

            ) : ""
          }

          <div className='m-2 relative w-[100%] flex flex-col'>
            <label className='' htmlFor='email'>Email</label>
            <input className='p-1 border-[1px] rounded' type="email" name='email' placeholder='Enter Email' onChange={(e) => {setEmail(e.target.value)}}/>
          </div>

          <div className='m-2 relative w-[100%] flex flex-col'>
            <label htmlFor="password">Password</label>
            <input className='p-1 border-[1px] rounded' type="password" name='password' placeholder='Enter Password' onChange={(e) => {setPassword(e.target.value)}} />
          </div>

            <button className='w-48 h-8 mt-8 bg-sky-500 rounded-2xl hover:bg-sky-600'>{type == "sign-up" ? "Sign-up" : "Sign-in"}</button>
            {type == "sign-in" ? <NavLink className="mt-2 hover:text-violet-800" to="/signup">Register</NavLink> : ""}
            {error && <div className='p-2 mt-2 border-2 rounded'>{error}</div>}
            
        </form>
    </div>
  )
}

export default UserAuthForm