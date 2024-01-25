






// SignIn.js

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signin.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder for authentication logic
    // For demonstration purposes, assume login fails
    const loginSuccess = false;

    if (!loginSuccess) {
      // Display error toast
      toast.error('Invalid email or password. Please try again.');
      return;
    }

    // Continue with successful login logic
    console.log('Email:', email);
    console.log('Password:', password);
    toast.success('Login successful!');
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
