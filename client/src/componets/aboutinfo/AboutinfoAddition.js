import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addInofabout } from '../Api/Handleapi';
import './Aboutinfoprofile.css';

const AboutinfoAddition = () => {
  const [userName, setUserName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [aboutYourself, setAboutYourself] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const handleSave = async () => {
    try {
      // Validation check
      if (!userName || !birthdate || !gender || !profileImage || !aboutYourself) {
        throw new Error('Please fill in all required fields.');
      }

      // API request
      const aboutApiResult = await addInofabout(userName, birthdate, gender, aboutYourself, profileImage);
      toast.success(aboutApiResult);
      toast.success('Information saved successfully!');
    } catch (error) {
      console.error('Error saving information:', error);
      toast.error(error.message || 'Failed to save information. Please try again.');
    }
  };

  return (
    <div className='main-about'>
      <div className='fillaboutdata'>
        <div className='edit-data'>
          <h2>About Info</h2>
          <form>
            <label>
              User Name:
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>

            <label>
              Birthdate:
              <input
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </label>

            <label>
              Gender:
              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label>
              Profile Image:
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </label>

            <label>
              About Yourself:
              <textarea
                value={aboutYourself}
                onChange={(e) => setAboutYourself(e.target.value)}
              />
            </label>

            <button type="button" onClick={handleSave}>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutinfoAddition;
