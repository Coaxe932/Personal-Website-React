import React, { useState } from 'react';
import '..//CSS/Login.css'; 

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Hardcoded check (for demonstration only, not secure)
        if(username === 'admin' && password === 'admin') {
            onLogin(true);
        } else {
            alert('Incorrect Username or Password!');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="login-input" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="login-input" />
            <button type="submit" className="login-button">Login</button>
        </form>
    );
};

export default Login;
