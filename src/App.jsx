import React from "react";
import LoginProvider from "./context/LoginProvider";
import LoginForm from "./components/LoginForm";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AdminLoginForm } from "./components/AdminLoginForm";

const App = () => {
  return (
    <Router>
      <LoginProvider>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/admin" element={<AdminLoginForm />} />
        </Routes>
      </LoginProvider>
    </Router>
  );
};

export default App;
