import React, { useState, useEffect } from "react";

import Nav from "../components/Nav";
import SideBar from "@/components/SideBar";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Main />
    </div>
  );
}
