import React from 'react';
import { useSelector } from 'react-redux';

const Displayaboutuser = () => {
    const userData = useSelector((state) => state.user.userData);

    // Check if userData is defined before attempting to destructure
    if (!userData) {
        return <div>Loading...</div>; // or any other fallback UI
    }

    // Destructure properties from userData
    const { birthdate, gender, profileImage, aboutYourself } = userData;

    return (
        <div>
            <h1>About User</h1>
            <p>Birthdate: {birthdate}</p>
            <p>Gender: {gender}</p>
            {/* Display other user information */}
        </div>
    );
};

export default Displayaboutuser;
