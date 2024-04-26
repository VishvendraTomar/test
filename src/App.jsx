import React, { useState } from 'react';
import './App.css';
import MainRoute from './page/MainRoute';

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const handleLogin = (user) => {
       setCurrentUser(user);
    };

    return (
        <MainRoute currentUser={currentUser} onLogin={handleLogin} />
    );
}

export default App;
