import './App.css';
import { useState, useEffect } from 'react';
import UserAuthForm from './components/UserAuthForm';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/blogs' element={<h1>This is the <strong>Blogs</strong> page</h1>}/>
          <Route path='/signup' element={<UserAuthForm type="sign-up" />}/>
          <Route path='/signin' element={<UserAuthForm type="sign-in" />}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
