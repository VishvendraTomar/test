import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Change import

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Correct usage of useNavigate

  const handlelogin = () => {
    if (username === 'Vikas' && password === 'Vikas') {
      onLogin('Vikas');
      navigate('/homepage');
    } else if (username === 'Akash' && password === 'Akash') {
      onLogin('Akash');
      navigate('/homepage');
    } else {
      alert('wrong username or password');
    }
  };

  return (
    <div>
      <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handlelogin}>submit</button>
    </div>
  );
}

export default Login;
