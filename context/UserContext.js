import React, { createContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const { loading, data, error } = useSelector((state) => state.login);
  const {
    loading: loadingRegister,
    data: dataRegister,
    error: errorRegister,
  } = useSelector((state) => state.register);
  const [loggedIn, setLoggedIn] = useState({
    token: "",
    user: {},
  });

  // Load the user data from localStorage when the component first mounts
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setLoggedIn({
        token,
        user: JSON.parse(sessionStorage.getItem("user")),
      });
    }
  }, [data, dataRegister]);

  return (
    <UserContext.Provider value={loggedIn}>{children}</UserContext.Provider>
  );
};
