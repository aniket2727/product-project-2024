import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApiProvider } from './componets/contextApifolder/ContextApi';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignOut from "./componets/AuthandRegister/SignOut";
import SignIn from './componets/AuthandRegister/SignIn';
import FirstPage from './componets/Home/FirstPage';
import Navigation from './componets/header/Navigation';
import AboutinfoAddition from './componets/aboutinfo/AboutinfoAddition';
import DisplayUserProfile from './componets/aboutinfo/DisplayUserProfile';

function App() {
  return (
    <div>
      <ApiProvider>
        <BrowserRouter>
          <Navigation/>
          <Routes>
            <Route path="/" element={<FirstPage/>} />
            <Route path="/register" element={<SignOut />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/edituserprofile" element={<AboutinfoAddition />} />
            <Route path="/displayuserprofile" element={<DisplayUserProfile/>} />
          </Routes>
        </BrowserRouter>
      </ApiProvider>
      <ToastContainer />
    </div>
  );
}

export default App;