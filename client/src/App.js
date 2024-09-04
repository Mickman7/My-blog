import './App.css';
import { useState, useEffect } from 'react';
import UserAuthForm from './components/UserAuthForm';
import { Routes,Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { useAuthContext } from './hooks/useAuthContext'


function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/blogs' element={<h1>This is the <strong>Blogs</strong> page</h1>}/>
          <Route path='/signup' element={!user ? <UserAuthForm type="sign-up" /> : <Navigate to='/'/>}/>
          <Route path='/signin' element={!user ? <UserAuthForm type="sign-in" /> : <Navigate to='/'/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
