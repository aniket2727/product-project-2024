




const BASE_URL = 'http://localhost:8008/hooks';

// 1.apis for posts
export const getposts = async (email, pass) => {
  try {
    const response = await fetch(`${BASE_URL}/getpost/getpost`)

    if (!response.ok) {
      throw new Error('failed access data and posts');
    }
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};
