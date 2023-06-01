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

export default function MapPanel({
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
    <div className="p-4 flex justify-center gap-4 flex-col md:flex-row lg:block">
      <div className="bg-gray-100 rounded-lg shadow-md px-0 py-3 w-full">
        <h2 className="font-bold text-xl text-center">Ships availables:</h2>
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
                    checked={selectedShip?.id === ship.id}
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
          <div className="text-red-500 font-bold text-center my-2">
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

      <div className=" mt-0 lg:mt-4 w-full">
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
