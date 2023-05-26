import { useEffect, useState } from "react";
import PointInfo from "./UI/PointInfo";
import { useSelector, useDispatch } from "react-redux";
import { listShips } from "@/redux/actions/ships";
export default function Sidebar({ selectedPoint }) {
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
    <div className="w-[100%] bg-gray-200 p-4">
      <div className="w-[80%] mx-auto space-y-4">
        <h2>Ships availables:</h2>
        {
          <ul>
            {dataListShips?.map((ship) => (
              <>
                <li key={ship.id}>{ship.ship_registration}</li>
                <h3>{ship.length}</h3>
                <p>{ship.owner}</p>
              </>
            ))}
          </ul>
        }
      </div>

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
