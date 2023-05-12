import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

export default function SideBar() {
  return (
    <div className="flex flex-col gap-[80px]">
      <div className="flex h-[200px] justify-center">
        <div className="h-[100px] mt-10">
          <img src="/logo.jpg" width={100} height={100} alt="logo" />
        </div>
      </div>
      <div className="flex flex-col gap-[100px]">
        <div className="flex justify-center items-center">
          <HomeIcon sx={{ fontSize: 50 }} />
        </div>
        <div className="flex justify-center items-center">
          <SignalCellularAltIcon sx={{ fontSize: 50 }} />
        </div>
        <div className="flex justify-center items-center">
          <FavoriteIcon sx={{ fontSize: 50 }} />
        </div>
        <div className="flex justify-center items-center">
          <PersonIcon sx={{ fontSize: 50 }} />
        </div>
      </div>
    </div>
  );
}
