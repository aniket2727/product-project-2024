



const BASE_URL = 'http://localhost:8008/hooks';

// 1.apis for login
export const addprofiledata = async (userEmail, userName,birthdate, gender, profileimage, aboutinfo ) => {

  const jsondata=JSON.stringify({userEmail,userName,birthdate,gender,profileimage,aboutinfo});
  console.log("this is json data",jsondata)
  try {
    const response = await fetch(`${BASE_URL}/addprofiledata/addprofiledata`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userEmail, userName,birthdate, gender, profileimage, aboutinfo }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};