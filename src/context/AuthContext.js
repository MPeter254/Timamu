import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user data (null if not logged in)

  const login = (userData) => {
    setUser(userData); // Update user state on login
  };

  const logout = () => {
    setUser(null); // Clear user data on logout
  };

  const register = (userData) => {
    setUser(userData); // Set user data after registration
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
