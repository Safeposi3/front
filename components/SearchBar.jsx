import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Search from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getRecipe } from "@/redux/actions/recipes";
import Datepicker from "tailwind-datepicker-react";
export default function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleChange = (selectedDate) => {
    console.log(selectedDate);
  };
  const handleClose = (state) => {
    setShow(state);
  };
  const handleSubmit = () => {
    console.log(search);
    dispatch(getRecipe(search, "peru"));
  };
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
  return (
    <div className="flex flex-row  bg-[white] py-2 px-3 rounded-full items-center">
      <Search />
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />

      <div>
        <button
          className="bg-[#3056D3] py-2 px-5 rounded-full"
          onClick={handleSubmit}
        >
          Search
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
}
