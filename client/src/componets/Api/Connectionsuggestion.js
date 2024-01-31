// Api/Connectionsuggestion.js

const BASE_URL = 'http://localhost:8008/hooks';

// api for getting all user accounts
export const getalluseraccounts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/getuseraccounts/getuseraccounts`);

        if (!response.ok) {
            throw new Error('Failed to access data and posts');
        }

        // Parse JSON here
        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error(`Error: ${error.message}`);
    }
};
