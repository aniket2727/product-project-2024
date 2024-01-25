import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addInofabout } from '../Api/Handleapi';
import Displayaboutuser from './Displayaboutuser';

const AboutinfoAddition = () => {
    const [birthdate, setBirthdate] = useState('');
    const [gender, setGender] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [aboutYourself, setAboutYourself] = useState('');

    const handleSave = async () => {
        // Validation check
        if (!birthdate || !gender || !profileImage || !aboutYourself) {
            toast.error('Please fill in all required fields.');
            return;
        }

        try {
            const aboutApiResult = await addInofabout(birthdate, gender, aboutYourself, profileImage);
             toast.success(aboutApiResult)
            toast.success('Information saved successfully!');
        } catch (error) {
            
            console.error('Error saving information:', error);
            toast.error('Failed to save information. Please try again.');
        }

    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProfileImage(file);
    };

    return (
        <div className='main-about'>

            <div>
                 <Displayaboutuser/>
            </div>

            <div className='fillaboutdata'>
                <div>
                    <h2>About Info</h2>
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

                    <button onClick={handleSave}>Save</button>
                </div>

            </div>

        </div>
    );
};

export default AboutinfoAddition;
