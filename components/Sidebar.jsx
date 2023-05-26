import { useState } from "react";
import PointInfo from "./UI/PointInfo";

export default function Sidebar({ selectedPoint }) {
  return (
    <div className="w-[100%] bg-gray-200 p-4">
      {!selectedPoint ? (
        <div className="text-center">
          <h2 className="text-lg font-semibold">Select a Point</h2>
          <p>Select a point on the map to view zone information.</p>
        </div>
      ) : (
        <PointInfo point={selectedPoint} />
      )}
    </div>
  );
}
