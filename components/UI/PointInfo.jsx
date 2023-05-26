import { useState } from "react";
import DatePicker from "./DatePicker";
import RangeHour from "./RangeHour";
export default function PointInfo({ point }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  if (!point) {
    return null;
  }

  return (
    <div className="bg-gray-100 p-4 rounded-md mx-auto shadow-md w-[80%]">
      <h2 className="text-center">Información del punto:</h2>
      <p>ID: {point.id}</p>
      <p>Ubicación: {point.location.join(", ")}</p>

      <h2 className="text-center">Selecciona una fecha:</h2>
      <DatePicker />

      <h2 className="text-center">Selecciona un horario:</h2>
      <RangeHour timesAvailables={point.timesAvailables} />
    </div>
  );
}
