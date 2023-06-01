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
          <div className="px-5 my-2 w-full">
            {dataListShips.map((ship) => (
              <div
                key={ship.id}
                className="flex items-center w-full cursor-pointer"
              >
                <label className="flex w-full items-center space-x-4 cursor-pointer">
                  <input
                    type="radio"
                    name="ship"
                    value={ship.id}
                    onChange={handleShipChange(ship)}
                    className="rounded-full border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="flex justify-between items-center w-full">
                    <div className="font-bold text-md">
                      {ship.ship_registration}
                    </div>
                    <div className="text-md">{ship.length} m</div>
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
          <Link href="/my-ships" className="mx-auto">
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
