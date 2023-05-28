import { useState, useEffect } from "react";
export default function HourRangeSelector({
  onRangeAvailableChange,
  setForm,
  form,
}) {
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const handleStartHourChange = (event) => {
    setStartHour(event.target.value);
    const dateTime = new Date(form.date);
    const [hours, minutes] = event.target.value.split(":");
    dateTime.setHours(hours);
    dateTime.setMinutes(minutes);
    setForm((prevForm) => ({
      ...prevForm,
      start_time: dateTime.toISOString(),
    }));
  };

  const handleEndHourChange = (event) => {
    setEndHour(event.target.value);
    const dateTime = new Date(form.date);
    const [hours, minutes] = event.target.value.split(":");
    dateTime.setHours(hours);
    dateTime.setMinutes(minutes);
    setForm((prevForm) => ({
      ...prevForm,
      end_time: dateTime.toISOString(),
    }));
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

    // Compare the start and end hours
    return startHour < endHour;
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
        <p className="text-red-500 mt-2 text-sm">
          The range of time you selected is not valid. Please select a different
          time range.
        </p>
      )}
    </div>
  );
}
