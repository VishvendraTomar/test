import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Change import
import MainRoute from './page/MainRoute';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  return (
    <Router> {/* Wrap your routes with Router */}
      <MainRoute />
    </Router>
  );
}

export default App;
