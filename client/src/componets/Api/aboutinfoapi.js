



const BASE_URL = 'http://localhost:8008/hooks';

// 1.apis for login
export const addprofiledata = async (userName, birthdate, gender, aboutYourself, profileImage) => {
  try {
    const response = await fetch(`${BASE_URL}/login/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userName, birthdate, gender, aboutYourself, profileImage}),
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