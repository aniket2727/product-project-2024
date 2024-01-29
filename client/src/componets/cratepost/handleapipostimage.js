


const BASE_URL = 'http://localhost:8008/hooks';


export const savepost = async ( email,postimage, postcaption ) => {
  console.log("seende data",email,postimage,postcaption)
  try {
    const response = await fetch(`${BASE_URL}/addpost/addpost`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, postimage, postcaption}),
    });

    if (!response.ok) {
      throw new Error('Error creating post');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};