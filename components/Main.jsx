import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import PointInfo from "./UI/PointInfo";
import { useState } from "react";
const MyMap = dynamic(() => import("../components/Map"), {
  ssr: false,
});
export default function Main() {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const handlePointClick = (point) => {
    setSelectedPoint(point);
  };
  return (
    <div className="flex flex-col h-[650px] lg:rounded-r-full">
      <div className="flex flex-col items-center gap-[300px] lg:gap-[50px] mt-[30px] lg:mt-[50px]">
        <MyMap onPointClick={handlePointClick} />
        <PointInfo point={selectedPoint} />
      </div>
    </div>
  );
}
