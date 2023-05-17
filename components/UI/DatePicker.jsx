import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";
const options = {
  title: "Selecciona la fecha",
  autoHide: true,
  todayBtn: false,
  clearBtn: false,
  weekDays: ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"],
  maxDate: new Date("2023-04-01"),
  minDate: new Date("2023-03-01"),
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
    prev: () => <span>Ante.</span>,
    next: () => <span>Sig.</span>,
  },
  datepickerClassNames: "mt-[160%] lg:mt-[33%]",
  defaultDate: new Date("2023-03-02"),
  language: "es",
};

const DatePicker = () => {
  const [show, setShow] = useState(false);
  const handleChange = (selectedDate) => {
    console.log(selectedDate);
  };
  const handleClose = (state) => {
    setShow(state);
  };

  return (
    <div>
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
