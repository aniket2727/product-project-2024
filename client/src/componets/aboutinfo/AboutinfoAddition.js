import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addprofiledata } from '../Api/aboutinfoapi';
import './Aboutinfoprofile.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Resizer from 'react-image-file-resizer'; // Import the library

const AboutinfoAddition = () => {
  const [userName, setUserName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [aboutYourself, setAboutYourself] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user.email);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Resize and convert the image to base64
      Resizer.imageFileResizer(
        file,
        300, // Width
        300, // Height
        'JPEG', // Format
        100, // Quality
        0, // Rotation
        (base64Image) => {
          setProfileImage(base64Image);
        },
        'base64' // Output type
      );
    }
  };

  const handleSave = async () => {
    console.log(`name ${userName}, birthdate ${birthdate}, gender ${gender}, profileImage ${profileImage}, aboutYourself ${aboutYourself}`);
  
    try {
      // Additional debugging logs
      console.log('userEmail fetched from redux',userEmail)
      console.log('userName.trim():', userName.trim());
      console.log('birthdate:', birthdate);
      console.log('gender:', gender);
      console.log('profile image',profileImage);
      console.log('aboutYourself.trim():', aboutYourself.trim());
      
      // Validation check
      if (!userName.trim() || !birthdate || !gender || !aboutYourself.trim()) {
        throw new Error('Please fill in all required fields.');
      }
  
      // API request
      const aboutApiResult = await addprofiledata(userEmail, userName,birthdate, gender, profileImage, aboutYourself  );
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
