import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "@/context/UserContext";
const Header = () => {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const { token } = useContext(UserContext);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(user);
  }, [user]);
  if (!token) {
    router.push("/login");
  }

  return (
    <div className="flex justify-between px-4 pt-4">
      <h2>Dashboard</h2>

      <h2>Welcome Back, {userData.first_name}</h2>
    </div>
  );
};

export default Header;
