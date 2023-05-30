import { useEffect, useState } from "react";
import PointInfo from "./PointInfo";
import { useSelector, useDispatch } from "react-redux";
import { listShips } from "@/redux/actions/ships";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import Link from "next/link";
export default function Sidebar({
  selectedPoint,
  onRangeAvailableChange,
  setOpenStripe,
  setAmount,
  onShipSelect,
  selectedShip,
}) {
  const dispatch = useDispatch();
  const {
    loading: loadingListShips,
    data: dataListShips,
    error: errorListShips,
  } = useSelector((state) => state.listShips);

  useEffect(() => {
    dispatch(listShips());
  }, []);

  const handleShipChange = (ship) => {
    onShipSelect(ship);
  };

  return (
    <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl bg-gray-200 p-4">
      <div className="bg-gray-100 rounded-md shadow-md w-[80%] mx-auto space-y-4 p-6 md:p-8 lg:w-[80%]">
        <h2 className="font-bold text-xl mb-4 text-center">
          Ships availables:
        </h2>
        {dataListShips && dataListShips.length > 0 ? (
          <div className="space-y-4">
            {dataListShips.map((ship) => (
              <div className="flex items-center space-x-4 cursor-pointer">
                <label
                  key={ship.id}
                  className="flex items-center space-x-4 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="ship"
                    value={ship.id}
                    checked={selectedShip.id === ship.id}
                    onChange={handleShipChange(ship)}
                    className="rounded-full border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div>
                    <div className="font-bold text-lg mb-2">
                      {ship.ship_registration}
                    </div>
                    <div className="text-sm mb-1">{ship.length}</div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-red-500 font-bold text-center">
            <h3>No ships available</h3>
          </div>
        )}
        <div className="flex justify-center">
          <Link href="/add-ship" className="mx-auto">
            <Button
              variant="contained"
              disabled={loadingListShips}
              className="bg-blue-600"
            >
              Add a new ship
            </Button>
          </Link>
        </div>
      </div>
      <div className="my-6 md:my-8">
        <PointInfo
          point={selectedPoint}
          onRangeAvailableChange={onRangeAvailableChange}
          setOpenStripe={setOpenStripe}
          setAmount={setAmount}
        />
      </div>
    </div>
  );
}
