import React, { useState } from 'react'


function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        console.log({email,password})
    }


  return (
    <div className="text-center">
        <form onSubmit={handleSubmit}>
            <label className='text-sky-400' htmlFor='email'>Email</label>
            <input type="email" placeholder='Enter Email' onChange={(e) => {setEmail(e.target.value)}}/>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter Password' onChange={(e) => {setPassword(e.target.value)}} />
            <button>Login</button>
            <a href="#">Register</a>
        </form>
    </div>
  )
}

export default Login