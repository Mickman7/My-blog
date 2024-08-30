import './App.css';
import { useState, useEffect } from 'react';
import UserAuthForm from './components/UserAuthForm';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route path='/signup' element={<UserAuthForm type="sign-up" />}/>
          <Route path='/signin' element={<UserAuthForm type="sign-in" />}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
