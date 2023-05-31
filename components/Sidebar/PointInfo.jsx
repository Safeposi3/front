import { useEffect, useState } from "react";
import DatePicker from "./DatePicker";
import HourRangeSelector from "./HourRangeSelector";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { createReservation } from "@/redux/actions/reservations";
export default function PointInfo({ point, setOpenStripe, setAmount }) {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const { loading, data, error } = useSelector(
    (state) => state.createReservation
  );
  const [form, setForm] = useState({
    date: new Date().toISOString(),
    start_time: null,
    end_time: null,
    buoy: null,
  });
  const [onRangeAvailable, setOnRangeAvailable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReservation(form));
  };
  const handleDateChange = (date) => {
    setForm((prevForm) => ({
      ...prevForm,
      date: date.toISOString(),
    }));
  };
  useEffect(() => {
    if (point) {
      setForm((prevForm) => ({
        ...prevForm,
        buoy: point.id,
      }));
    }
  }, [point]);
  const handleRangeAvailableChange = (available) => {
    setOnRangeAvailable(available);
  };
  useEffect(() => {
    if (data) {
      setOpenStripe([true, data?.id]);
    }
  }, [data]);

  const handleAmountChange = (totalHours) => {
    setAmount((totalHours * point.price1).toFixed(2) * 100);
    setTotalPrice((totalHours * point.price1).toFixed(2));
  };
  return (
    <div className="bg-gray-100 p-4 rounded-md mx-auto shadow-md w-[80%]">
      {!point ? (
        <div className="text-center mt-4">
          <h2 className="text-lg font-semibold">Select a buoy</h2>
          <p>Select a point on the map to view zone information.</p>
        </div>
      ) : (
        <div className=" px-5">
          <h2 className="text-center text-lg">Buoy Information:</h2>
          <p>Location: {point.latitude + ", " + point.longitude}</p>
          <p>Size: {point.size == "S" ? "4-9 m." : "10-20 m."}</p>
          <p>Price per hour: €{point.price1}</p>
          <h2 className="text-center text-lg mt-1">Select date:</h2>
          <DatePicker handleDateChange={handleDateChange} />
          <h2 className="text-center text-lg mt-1">Select time:</h2>
          <HourRangeSelector
            onRangeAvailableChange={handleRangeAvailableChange}
            setForm={setForm}
            form={form}
            setTotalHours={handleAmountChange}
          />
          {totalPrice > 0 && (
            <p className="text-center text-lg mt-1">
              Total price: €{totalPrice}
            </p>
          )}
          <div className="flex justify-center mt-3">
            <Button
              className=" bg-blue-600"
              variant="contained"
              disabled={!onRangeAvailable}
              onClick={handleSubmit}
            >
              Pay Now
            </Button>
          </div>
          {error && (
            <p className="text-red-500 mt-2 text-sm">{error?.response.data}</p>
          )}
        </div>
      )}
    </div>
  );
}
