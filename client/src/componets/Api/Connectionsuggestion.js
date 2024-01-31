




const BASE_URL = 'http://localhost:8008/hooks';

// 1.apis for gettings all users accounts
export const getalluseraccounts = async (email, pass) => {
  try {
    const response = await fetch(`${BASE_URL}/getuseraccounts/getuseraccounts`)

    if (!response.ok) {
      throw new Error('failed access data and posts');
    }
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};
