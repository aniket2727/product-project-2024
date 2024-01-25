


export const loginUserSuccess = (userData) => ({
    type: 'LOGIN_USER_SUCCESS',
    payload: userData,
  });
  
  export const setTokenAndEmail = (token, email) => ({
    type: 'SET_TOKEN_AND_EMAIL',
    payload: { token, email },
  });
  
  export const setUserData = (userData) => ({
    type: 'SET_USER_DATA',
    payload: userData,
  });
  
  export const clearUserData = () => ({
    type: 'CLEAR_USER_DATA',
  });
  
  export const loginUserFailure = (error) => ({
    type: 'LOGIN_USER_FAILURE',
    payload: error,
  });