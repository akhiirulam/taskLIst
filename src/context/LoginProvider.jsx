import React, { use, useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <LoginContext.Provider value={{ formData, handleChange }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
