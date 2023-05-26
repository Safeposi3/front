import { useState, useEffect } from "react";
export default function HourRangeSelector({
  timesAvailables,
  onRangeAvailableChange,
}) {
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");

  const handleStartHourChange = (event) => {
    setStartHour(event.target.value);
  };

  const handleEndHourChange = (event) => {
    setEndHour(event.target.value);
  };
  useEffect(() => {
    onRangeAvailableChange(isRangeAvailable());
  }, [startHour, endHour]);
  const generateHourOptions = () => {
    const options = [];

    for (let hour = 0; hour < 24; hour++) {
      const formattedHour = hour.toString().padStart(2, "0") + ":00";
      options.push(
        <option key={formattedHour} value={formattedHour}>
          {formattedHour}
        </option>
      );
    }
    return options;
  };
  const isRangeAvailable = () => {
    if (!startHour || !endHour || startHour === "Start" || endHour === "End") {
      return true;
    }
    if (startHour && endHour && startHour !== endHour) {
      const start = startHour;
      const end = endHour;

      if (start <= end) {
        const startIdx = timesAvailables.indexOf(start);
        const endIdx = timesAvailables.indexOf(end);

        if (startIdx !== -1 && endIdx !== -1) {
          const rangeHours = timesAvailables.slice(startIdx, endIdx + 1);
          const rangeMatch = rangeHours.length === endIdx - startIdx + 1;

          return rangeMatch;
        }
      }
    }
    return false;
  };

  return (
    <div>
      <select
        value={startHour}
        onChange={handleStartHourChange}
        className="border border-gray-300 px-4 py-2 mt-2 shadow-md w-[50%]"
      >
        <option value="Start">Start</option>
        {generateHourOptions()}
      </select>

      <select
        value={endHour}
        onChange={handleEndHourChange}
        className="border border-gray-300 px-4 py-2 mt-2 shadow-md w-[50%]"
      >
        <option value="End">End</option>
        {generateHourOptions()}
      </select>

      {!isRangeAvailable() && (
        <p className="text-red-500 mt-2">
          El rango de horas seleccionado no está disponible, por favor
          seleccione otro rango de horas.
        </p>
      )}
    </div>
  );
}
