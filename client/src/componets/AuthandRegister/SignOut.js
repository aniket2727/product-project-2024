import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signout.css';
import { registerUser } from '../Api/Handleapi';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Invalid Email')
      return;
    }

    if (!password || password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return;
    }

    if (!name || name.length < 4) {
      toast.error('Name must be at least 4 characters')
      return;
    }

    try {
      const userData = await registerUser( email,name, password);
      console.log('User Data:', userData);
      toast.success('Registration successful!');
      setEmail('');
      setPassword('');
      setName('');
      navigate('/login')
    } catch (error) {
      console.error('Registration Error:', error.message);
      toast.error('Registration failed. Please try again.');
    }



  };


  return (
    <div className='main-register'>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit" className='register-button'>Register</button>
      </form>
    </div>
  );
}

export default SignOut;
