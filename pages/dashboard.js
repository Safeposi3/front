import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import MapPanel from "../components/Sidebar/MapPanel";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Stripe from "../components/Payment/Stripe";
const { useRouter } = require("next/router");
import Sidebar from "@/components/Dashboard/Sidebar";
import Header from "@/components/Dashboard/Header";

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
    <Sidebar>
      <main className="bg-gray-100 min-h-screen">
        <Header />
        <div className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-4">
          <div className="w-full md:col-span-1 relative h-full border rounded-lg bg-white">
            <MapPanel
              selectedPoint={selectedPoint}
              setOpenStripe={setOpenStripe}
              setAmount={handleAmountChange}
              onShipSelect={handleShipSelect}
              selectedShip={selectedShip}
            />
          </div>
          <div className="w-full col-span-3 h-[85vh] m-auto p-4 border rounded-lg bg-white mt-3 lg:mt-0">
            {openStripe[0] && (
              <Stripe
                amount={amount}
                reservationId={openStripe[1]}
                openStripe={openStripe}
              />
            )}
            <MyMap
              onPointClick={handlePointClick}
              selectedShip={selectedShip}
            />
          </div>
        </div>
      </main>
    </Sidebar>
  );
}
