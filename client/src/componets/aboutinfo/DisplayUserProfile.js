import React from 'react';
import './DisplayUserProfile.css';

const DisplayUserProfile = () => {
  return (
    <div className='main-display-user-profile'>
      <div className='display-user-profile'>
        <div className='profileandname'>
          <div className='profile-image'></div>
          <div className='name-main'>
            <div className='user-name'>
              <h1>Aniket Vijay Kadam</h1>
            </div>
            <div className='user-about-info'>
              <p>I am a computer programmer</p>
              <button className='connect-class'>Connect</button>
              <button className='edit-class'>Edit User</button>
            </div>
          </div>
        </div>

        <div className='main-post-user'>
          {Array(10).fill().map((_, index) => (
            <div className='main-post-block' key={index}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayUserProfile;
