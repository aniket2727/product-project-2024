






// SignIn.js

import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { loginUser } from '../Api/Handleapi';
import 'react-toastify/dist/ReactToastify.css';
import './signin.css';
import { useNavigate } from 'react-router-dom';
import { loginUserSuccess, loginUserFailure, setTokenAndEmail } from '../redux/action';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // Access user data from Redux state
  const userData = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.token);
  const emailFromState = useSelector((state) => state.user.email);
  const tokenFromState = useSelector((state) => state.user.token);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await loginUser(email, password);
      dispatch(loginUserSuccess(userData));
      dispatch(setTokenAndEmail(userData.token, userData.email));
      console.log('User Data:', userData);
      toast.success('Login successful!');
      navigate('/');
    } catch (error) {
      console.error('Login Error:', error.message);
      dispatch(loginUserFailure(error.message));
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
