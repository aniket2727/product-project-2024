// Navigation.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdPerson, IoMdLogOut } from 'react-icons/io';
import { clearUserData } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const emailFromState = useSelector((state) => state.user.email);

    const handleLogout = () => {
        console.log('logout is pressed ');

        // Dispatch the action to clear user data
        dispatch(clearUserData());

        // Redirect to the login page
        navigate('/login');
    };

    return (
        <div className='main-navigate'>
            <div className='logo'>
                <p>HOOKS</p>
            </div>

            <div className='LoginAndLogout'>
                {emailFromState ? (
                    <>
                        <button onClick={() => handleLogout()}><IoMdLogOut /> LOGOUT</button>
                        <button onClick={() => navigate('/edituserprofile')}><IoMdPerson/> ACCOUNT</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => navigate('/login')}><IoMdPerson /> LOGIN</button>
                        <button onClick={() => navigate('/register')}><IoMdPerson /> NEW ACCOUNT</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navigation;
