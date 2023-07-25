import React, { useState } from 'react';
import CustomButton from './CustomButton';
import AIPicker from './AIPicker';
import ColorPicker from './ColorPicker';
import FilePicker from './FilePicker';
import Tab from './Tab';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleLogin = async () => {
    try {
      // Perform API call to authenticate user
      const response = await fetch('https://api.example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      if (response.ok) {
        // Successful login, call the callback function provided in onLogin prop
        onLogin();
      } else {
        // Failed login, show error message
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Failed to login. Please try again later.');
    }
  };
  
  return (
    <div className="login-page-container">
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      {error && <p className="error">{error}</p>}
      <CustomButton
        type="button"
        label="Login"
        onClick={handleLogin}
      />
    </div>
  );
};

export default LoginPage;




































