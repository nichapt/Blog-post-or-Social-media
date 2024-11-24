import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      alert('Login successful!');
      console.log('Logged in with:', { username, password });
      navigate('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className= 'All'
      >
      <h1 className='Head'>🤍Welcome🤍</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className = 'login1'
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className = 'login2'
          />
          <button
            onClick={handleLogin}
            className='Buttom'
          >
          Log in
          </button>
        </div>
      </header>
    </div>
  );
}

function Dashboard() {
  return  <h1
  style={{
    color: '#DB7093',  
    textAlign: 'Center',
    fontSize: '36px',
    fontFamily: 'Arial, sans-serif', 
    paddingTop: '20px',
  }}
>
  อันยองฮะ
</h1>

}
export default function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* หน้า Login */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* หน้า Dashboard */}
      </Routes>
    </Router>
  );
}