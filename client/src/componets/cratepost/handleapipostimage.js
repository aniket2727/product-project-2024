


const BASE_URL = 'http://localhost:8008/hooks';

// 1.apis for login
export const savepost= async (email,postedImage,imageCaption) => {
  try {
    const response = await fetch(`${BASE_URL}/login/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email,postedImage,imageCaption}),
    });

    if (!response.ok) {
      throw new Error('Error ');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};
