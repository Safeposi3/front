import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listReservations } from "@/redux/actions/reservations";
import { useRouter } from "next/router";
import Sidebar from "@/components/Dashboard/Sidebar";
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
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">My Reservations</h1>
        {data?.map((reservation, index) => (
          <div
            className={`p-4 border rounded mb-4 ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            <h1 className="font-semibold text-lg">
              Reservation ID: {reservation.id}
            </h1>
            <p className="mt-1">Buoy: {reservation.buoy}</p>
            <p>Start Time: {reservation.start_time}</p>
            <p>End Time: {reservation.end_time}</p>
            <p>Status: {reservation.status}</p>
            <p>Created At: {reservation.created_at}</p>
          </div>
        ))}
      </div>
    </Sidebar>
  );
}
