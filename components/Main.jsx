import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import PointInfo from "./UI/PointInfo";
import { useState } from "react";
import Sidebar from "./Sidebar";
const MyMap = dynamic(() => import("../components/Map"), {
  ssr: false,
});
export default function Main() {
  const [selectedPoint, setSelectedPoint] = useState(null);

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
