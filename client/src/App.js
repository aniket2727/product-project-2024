import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApiProvider } from './componets/contextApifolder/ContextApi';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignOut from "./componets/AuthandRegister/SignOut";

function App() {
  return (
    <div>
      <ApiProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<SignOut />} />
          </Routes>
        </BrowserRouter>
      </ApiProvider>
      <ToastContainer />
    </div>
  );
}

export default App;