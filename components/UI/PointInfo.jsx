import { useState } from "react";
import DatePicker from "./DatePicker";
import HourRangeSelector from "./HourRangeSelector";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { createReservation } from "@/redux/actions/reservations";
export default function PointInfo({ point, onRangeAvailableChange }) {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null);
  const [form, setForm] = useState({
    date: null,
    start_time: null,
    end_time: null,
  });
  const [onRangeAvailable, setOnRangeAvailable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReservation());
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleRangeAvailableChange = (available) => {
    setOnRangeAvailable(available);
  };
  return (
    <div className="bg-gray-100 p-4 rounded-md mx-auto shadow-md w-[80%]">
      {!point ? (
        <div className="text-center mt-4">
          <h2 className="text-lg font-semibold">Select a Point</h2>
          <p>Select a point on the map to view zone information.</p>
        </div>
      ) : (
        <div className=" px-10">
          <h2 className="text-center">Buoy Information:</h2>
          <p>ID: {point.id}</p>
          <p>Location: {point.location.join(", ")}</p>
          <p>Size (m): {point.size == "big" ? "10-20" : "4-10"}</p>
          <h2 className="text-center text-lg mt-1">Select a date:</h2>
          <DatePicker />
          <h2 className="text-center text-lg mt-1">Select the time:</h2>
          <HourRangeSelector
            timesAvailables={point.timesAvailables}
            onRangeAvailableChange={handleRangeAvailableChange}
          />
          <div className="flex justify-center mt-4">
            <Button
              className="mt-4"
              variant="contained"
              disabled={!onRangeAvailable}
            >
              Confirm
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
