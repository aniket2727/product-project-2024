// ContextApi.js

import React, { createContext, useContext, useState } from 'react';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const setApiError = (message) => {
    setError(message);
  };

  const setApiSuccess = (message) => {
    setSuccess(message);
  };

  const clearApiMessages = () => {
    setError(null);
    setSuccess(null);
  };

  return (
    <ApiContext.Provider value={{ error, success, setApiError, setApiSuccess, clearApiMessages }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApidata = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};
