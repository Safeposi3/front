import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import Sidebar from "../components/Sidebar";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const { useRouter } = require("next/router");

const MyMap = dynamic(() => import("../components/Map"), {
  ssr: false,
});
export default function Dashboard() {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const useAuth = useContext(UserContext);
  const router = useRouter();

  const handlePointClick = (point) => {
    setSelectedPoint(point);
  };

  return (
    <div className="flex flex-row lg:rounded-r-full">
      <div className="w-[30%] bg-gray-200">
        <Sidebar selectedPoint={selectedPoint} />
      </div>
      <div className="w-[70%]">
        <MyMap onPointClick={handlePointClick} />
      </div>
    </div>
  );
}
