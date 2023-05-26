import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null);

  // Load the user data from localStorage when the component first mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(token);
    }
  }, []);

  return (
    <UserContext.Provider value={loggedIn}>{children}</UserContext.Provider>
  );
};
