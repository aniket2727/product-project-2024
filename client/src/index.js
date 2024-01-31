import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './componets/redux/store';
import App from './App';

const root = document.getElementById('root');

// Import createRoot from "react-dom/client"
const rootElement = ReactDOM.createRoot(root);
rootElement.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
