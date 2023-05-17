import { useState } from "react";
import DatePicker from "./DatePicker";

export default function PointInfo({ point }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  if (!point) {
    return null;
  }

  return (
    <div>
      <h2>Información del punto:</h2>
      <p>ID: {point.id}</p>
      <p>Ubicación: {point.location.join(", ")}</p>

      <h2>Selecciona una fecha:</h2>
      <DatePicker />

      <h2>Selecciona un horario:</h2>
      <select className="border border-gray-300 px-4 py-2 mt-2">
        {point.timesAvailables.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
    </div>
  );
}
