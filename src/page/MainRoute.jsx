import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';

function MainRoute({ currentUser, onLogin }) {
  return (
    <Routes>
      <Route path="/" element={<Login onLogin={onLogin} />} />
      <Route path="/homepage" element={<HomePage currentUser={currentUser} />} />
    </Routes>
  );
}

export default MainRoute;
