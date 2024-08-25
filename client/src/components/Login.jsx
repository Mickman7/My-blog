import React, { useState } from 'react'


function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        console.log({email,password})
    }


  return (
    <div className="flex justify-center items-center">
        <form className='w-auto h-auto p-8 border rounded flex flex-col justify-center items-center' onSubmit={handleSubmit}>
          <h1 className='font-bold text-2xl'>Login</h1>

          <div className='m-2 flex flex-col'>
            <label className='' htmlFor='email'>Email</label>
            <input className='border-2 rounded' type="email" placeholder='Enter Email' onChange={(e) => {setEmail(e.target.value)}}/>
          </div>

          <div className='m-2 flex flex-col'>
            <label htmlFor="password">Password</label>
            <input className='border-2 rounded' type="password" placeholder='Enter Password' onChange={(e) => {setPassword(e.target.value)}} />
          </div>

            <button className='w-48 h-8 mt-8 bg-sky-500 rounded-2xl '>Login</button>
            <a href="#">Register</a>
        </form>
    </div>
  )
}

export default Login