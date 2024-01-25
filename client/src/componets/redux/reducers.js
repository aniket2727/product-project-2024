




// userReducer.js

const initialState = {
    userData: null,
    token: null,
    email: null,
    error: null,
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER_SUCCESS':
        return {
          ...state,
          userData: action.payload,
          error: null,
        };
      case 'SET_TOKEN_AND_EMAIL':
        return {
          ...state,
          token: action.payload.token,
          email: action.payload.email,
        };
      case 'SET_USER_DATA':
        return {
          ...state,
          userData: action.payload,
        };
      case 'CLEAR_USER_DATA':
        return {
          ...state,
          userData: null,
          token: null,
          email: null,
        };
      case 'LOGIN_USER_FAILURE':
        return {
          ...state,
          userData: null,
          token: null,
          email: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
  