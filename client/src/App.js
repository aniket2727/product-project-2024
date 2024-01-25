import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApiProvider } from './componets/contextApifolder/ContextApi';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignOut from "./componets/AuthandRegister/SignOut";
import SignIn from './componets/AuthandRegister/SignIn';
import FirstPage from './componets/Home/FirstPage';

function App() {
  return (
    <div>
      <ApiProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FirstPage/>} />
            <Route path="/register" element={<SignOut />} />
            <Route path="/login" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </ApiProvider>
      <ToastContainer />
    </div>
  );
}

export default App;