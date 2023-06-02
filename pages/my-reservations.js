import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listReservations } from "@/redux/actions/reservations";
import { useRouter } from "next/router";
import Sidebar from "@/components/Dashboard/Sidebar";
import Header from "@/components/Dashboard/Header";

export default function MyReservationS() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(
    (state) => state.listReservations
  );
  useEffect(() => {
    dispatch(listReservations());
  }, []);
  if (error) return <div>Failed to load reservation</div>;
  // if (loading) return <div>Loading...</div>;

  return (
    <Sidebar>
      <div className="bg-gray-100 min-h-screen">
        <Header title="My Reservations" />
        <div className="p-4">
          <div className="overflow-auto rounded-lg shadow hidden md:block">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  {/* <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Reservation ID
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Buoy ID
                  </th> */}
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    ID
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Status
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Buoy Latitude
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Buoy Longitude
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Buoy Size
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Start Time
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    End Time
                  </th>
                  {/* <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Created At
                  </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data?.map((reservation, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    {/* <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {reservation.id}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {reservation.buoy.id}
                    </td> */}
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <span
                        className={`p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg bg-opacity-50 ${
                          reservation.status === "PAID"
                            ? "text-green-800 bg-green-200"
                            : "text-red-800 bg-red-200"
                        }`}
                      >
                        {reservation.status}
                      </span>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {reservation.buoy.latitude}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {reservation.buoy.longitude}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {reservation.buoy.size}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {reservation.start_time}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {reservation.end_time}
                    </td>
                    {/* <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {reservation.created_at}
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobil */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            {data?.map((reservation, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <div>
                  <div className="flex justify-between items-center space-x-2 text-sm bg-gray-100 border-b-2 border-gray-200 px-2 rounded-lg mb-1">
                    <div className="text-sm font-semibold tracking-wide">
                      ID
                    </div>
                    <div className="text-sm font-semibold tracking-wide">
                      Buoy Size
                    </div>
                    <div className="text-sm font-semibold tracking-wide">
                      Status
                    </div>
                  </div>
                  <div className="flex justify-between items-center space-x-2 text-sm px-2">
                    <div>{index + 1}</div>
                    <div>{reservation.buoy.size}</div>
                    <div>
                      <span
                        className={`p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg bg-opacity-50 ${
                          reservation.status === "PAID"
                            ? "text-green-800 bg-green-200"
                            : "text-red-800 bg-red-200"
                        }`}
                      >
                        {reservation.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="my-5">
                  <div className="flex justify-between items-center bg-gray-100 border-b-2 border-gray-200 px-2 rounded-lg mb-1">
                    <div className="text-sm font-semibold tracking-wide">
                      Buoy Latitude
                    </div>
                    <div className="text-sm font-semibold tracking-wide">
                      Buoy Longitude
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm px-2">
                    <div>{reservation.buoy.latitude}</div>
                    <div>{reservation.buoy.longitude}</div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center bg-gray-100 border-b-2 border-gray-200 px-2 rounded-lg mb-1">
                    <div className="text-sm font-semibold tracking-wide">
                      Start Time
                    </div>
                    <div className="text-sm font-semibold tracking-wide">
                      End Time
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm px-2">
                    <div>{reservation.start_time}</div>
                    <div>{reservation.end_time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
