import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import Sidebar from "../components/Sidebar/Sidebar";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Stripe from "../components/Payment/Stripe";
const { useRouter } = require("next/router");

const MyMap = dynamic(() => import("../components/Map"), {
  ssr: false,
});
export default function Dashboard() {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [amount, setAmount] = useState(0);
  const useAuth = useContext(UserContext);
  const router = useRouter();
  const [openStripe, setOpenStripe] = useState([false, null]);
  const [selectedShip, setSelectedShip] = useState(null);

  const handleShipSelect = (shipId) => {
    setSelectedShip(shipId);
  };

  const handlePointClick = (point) => {
    setSelectedPoint(point);
  };
  const handleAmountChange = (amount) => {
    setAmount(amount);
  };
  return (
    <div className="flex flex-row lg:rounded-r-full">
      <div className="w-[30%] bg-gray-200">
        <Sidebar
          selectedPoint={selectedPoint}
          setOpenStripe={setOpenStripe}
          setAmount={handleAmountChange}
          onShipSelect={handleShipSelect}
          selectedShip={selectedShip}
        />
      </div>
      <div className="w-[70%]">
        {openStripe[0] && (
          <Stripe
            amount={amount}
            reservationId={openStripe[1]}
            openStripe={openStripe}
          />
        )}
        <MyMap onPointClick={handlePointClick} selectedShip={selectedShip} />
      </div>
    </div>
  );
}
