import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Search from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
  const handleSubmit = () => {};

  return (
    <div className="flex flex-row  bg-[white] py-2 px-3 rounded-full items-center">
      <Search />
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
