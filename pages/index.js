import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Inter } from "next/font/google";
import Nav from "../components/Nav";
import SideBar from "@/components/SideBar";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import TopDishes from "@/components/TopDishes";

export default function Home() {
  return (
    <div>
      <Nav />
      <Main />
    </div>
  );
}
