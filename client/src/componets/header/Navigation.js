// Navigation.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdPerson, IoMdLogOut } from 'react-icons/io';
import { clearUserData } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch();
    var emailFromState = useSelector((state) => state.user.email);

    const handleLogout = () => {
        dispatch(clearUserData());
        emailFromState = null
    };

    return (
        <div className='main-navigate'>
            <div className='logo'>
                <p>HOOKS</p>
            </div>

            <div className='LoginAndLogout'>
                {emailFromState ? (
                    <>
                        <button onClick={()=>handleLogout}><IoMdLogOut /> LOGOUT</button>
                        <button onClick={()=>navigate('/aboutadd')}><IoMdPerson/> ACCOUNT</button>
                    </>
                ) : (
                    <>
                        <button onClick={()=>navigate('/login')}><IoMdPerson /> LOGIN</button>
                        <button  onClick={()=>navigate('/register')}><IoMdPerson /> NEW ACCOUNT</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navigation;
