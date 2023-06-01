import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "@/context/UserContext";
const Header = ({ title }) => {
  const router = useRouter();
  const { user, token } = useContext(UserContext);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(user);
  }, [user]);
  useEffect(() => {
    if (token == "") {
      router.push("/login");
    }
  }, [token]);

  return (
    <div className="flex justify-between px-4 pt-4">
      <h2>{title}</h2>

      <h2>Welcome Back, {userData.first_name}</h2>
    </div>
  );
};

export default Header;
