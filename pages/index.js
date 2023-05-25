import React, { useState, useEffect } from "react";

import Nav from "../components/Nav";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Main />
      <div>
        <p>Aquí va toda la info de Landing</p>
      </div>
    </div>
  );
}
