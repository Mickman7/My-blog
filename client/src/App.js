import './App.css';
import { useState, useEffect } from 'react';
import Login from './components/Login';

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
      <Login/>
    </div>
  );
}

export default App;
