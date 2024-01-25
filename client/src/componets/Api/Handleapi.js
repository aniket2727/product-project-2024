



// api.js

const BASE_URL = 'http://localhost:6006/hooks';

// 1.apis for login
export const loginUser = async (email, pass) => {
  try {
    const response = await fetch(`${BASE_URL}/login/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, pass}),
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

// 2. apis for registration
export const registerUser = async (email,name, pass) => {
    try {
      const response = await fetch(`${BASE_URL}/register/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, pass }),
      });
  
      if (!response.ok) {
        throw new Error('Registration failed');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  };


  // 3.add about yourselfdata

  export const addInofabout=(birthdatedata,gender,aboutyourself,imagedata)=>{

  }