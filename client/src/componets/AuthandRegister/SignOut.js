import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signout.css';
import { useApidata } from '../contextApifolder/ContextApi';

const SignOut = () => {
  const { setApiError, setApiSuccess, clearApiMessages } = useApidata();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setApiError('Invalid email address');
      return;
    }
  
    if (!password || password.length < 6) {
      setApiError('Password must be at least 6 characters');
      return;
    }
  
    if (!name || name.length < 4) {
      setApiError('Name must be at least 2 characters');
      return;
    }
  
    setEmail('');
    setPassword('');
    setName('');
    clearApiMessages(); // This should clear error and success messages
  
    setApiSuccess('Registration successful');
    
    // Wait for state to update, then show success toast
    setTimeout(() => {
      toast.success('Registration successful');
    }, 0);
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
