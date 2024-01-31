import React, { useEffect, useState } from 'react';
import { getalluseraccounts } from '../Api/Connectionsuggestion';

const Suggestion = () => {
  const [alluserprofiledata, setalluserprofiledata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming getalluseraccounts() returns a Promise
        const result = await getalluseraccounts();
        setalluserprofiledata(result); // Assuming the data structure returned has a "data" property
      } catch (error) {
        console.error('Error fetching user accounts:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Render your UI with the fetched data */}
      {alluserprofiledata.map((user) => (
        <div key={user.id}>{/* Render user data here */}</div>
      ))}
    </div>
  );
};

export default Suggestion;
