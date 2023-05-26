import { useEffect, useState } from "react";
import PointInfo from "./UI/PointInfo";
import { useSelector, useDispatch } from "react-redux";
import { listShips } from "@/redux/actions/ships";
import { Button } from "@mui/material";
import Link from "next/link";
export default function Sidebar({ selectedPoint, onRangeAvailableChange }) {
  const dispatch = useDispatch();
  const {
    loading: loadingListShips,
    data: dataListShips,
    error: errorListShips,
  } = useSelector((state) => state.listShips);

  useEffect(() => {
    dispatch(listShips());
  }, []);
  return (
    <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl bg-gray-200 p-4">
      <div className="bg-gray-100 rounded-md shadow-md w-[80%] mx-auto space-y-4 p-6 md:p-8 lg:w-[80%]">
        <h2 className="font-bold text-xl mb-4 text-center">
          Ships availables:
        </h2>
        {dataListShips && dataListShips.length > 0 ? (
          <ul className="space-y-4">
            {dataListShips.map((ship) => (
              <li
                key={ship.id}
                className="border p-4 rounded-md shadow-sm bg-white"
              >
                <div className="font-bold text-lg mb-2">
                  {ship.ship_registration}
                </div>
                <div className="text-sm mb-1">{ship.length}</div>
                <div className="text-sm text-gray-500">{ship.owner}</div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-red-500 font-bold text-center">
            <h3>No ships available</h3>
            <Link href="/add-ship">
              <Button variant="contained">Add a new ship</Button>
            </Link>
          </div>
        )}
      </div>
      <div className="my-6 md:my-8">
        <PointInfo
          point={selectedPoint}
          onRangeAvailableChange={onRangeAvailableChange}
        />
      </div>
    </div>
  );
}
