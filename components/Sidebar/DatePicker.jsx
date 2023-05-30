import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";
const options = {
  title: "Select date",
  autoHide: true,
  todayBtn: false,
  clearBtn: false,
  weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  maxDate: new Date("2023-07-01"),
  minDate: new Date("2023-05-01"),
  theme: {
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    input: "",
    inputIcon: "",
    selected: "",
  },
  icons: {
    // () => ReactElement | JSX.Element
    prev: () => <span>Prev.</span>,
    next: () => <span>Next.</span>,
  },

  datepickerClassNames: "mt-[160%] lg:mt-[24%] lg:ms-3",
  defaultDate: new Date(),
  language: "en",
};

const DatePicker = ({ handleDateChange }) => {
  const [show, setShow] = useState(false);
  const handleChange = (selectedDate) => {
    handleDateChange(selectedDate);
  };
  const handleClose = (state) => {
    setShow(state);
  };

  return (
    <div className="shadow-md rounded-lg w-[100%]">
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
};

export default DatePicker;
