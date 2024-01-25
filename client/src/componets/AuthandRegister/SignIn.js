






// SignIn.js

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { loginUser } from '../Api/Handleapi';
import 'react-toastify/dist/ReactToastify.css';
import './signin.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const userData = await loginUser(email, password);
      console.log('User Data:', userData);
      toast.success('Login successful!');
    } catch (error) {
      console.error('Login Error:', error.message);
      toast.error('Login failed. Please try again.');
    }

  };

  return (
    <div className="main-login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
