import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useState } from "react";
import { Icon } from "leaflet";

export default function Map({ onPointClick }) {
  const [tabarcaCoords, setTabarcaCoords] = useState([
    38.16631881567097,
    -0.4794345305520023,
  ]);
  const playasTarbarca = [
    {
      id: 1,
      location: [38.1669, -0.479],
      size: "small",
      timesAvailables: ["09:00", "10:00", "11:00"],
    },
    {
      id: 2,
      location: [38.1669, -0.4793],
      size: "small",
      timesAvailables: ["12:00", "13:00", "14:00"],
    },
    {
      id: 3,
      location: [38.1669, -0.4796],
      size: "big",
      timesAvailables: ["15:00", "16:00", "17:00"],
    },
    {
      id: 4,
      location: [38.1669, -0.4799],
      size: "big",
      timesAvailables: ["18:00", "19:00", "20:00"],
    },
    {
      id: 5,
      location: [38.1666, -0.479],
      size: "small",
      timesAvailables: ["21:00", "22:00", "23:00"],
    },
    {
      id: 6,
      location: [38.1666, -0.4793],
      size: "small",
      timesAvailables: ["09:00", "10:00", "11:00"],
    },
    {
      id: 7,
      location: [38.1666, -0.4796],
      size: "big",
      timesAvailables: ["12:00", "13:00", "14:00"],
    },
    {
      id: 8,
      location: [38.1666, -0.4799],
      size: "big",
      timesAvailables: ["15:00", "16:00", "17:00"],
    },
    {
      id: 9,
      location: [38.1663, -0.479],
      size: "small",
      timesAvailables: ["18:00", "19:00", "20:00"],
    },
    {
      id: 10,
      location: [38.1663, -0.4793],
      size: "small",
      timesAvailables: ["21:00", "22:00", "23:00"],
    },
    {
      id: 11,
      location: [38.1663, -0.4796],
      size: "big",
      timesAvailables: ["09:00", "10:00", "11:00"],
    },
    {
      id: 12,
      location: [38.1663, -0.4799],
      size: "big",
      timesAvailables: ["12:00", "13:00", "14:00"],
    },
    {
      id: 13,
      location: [38.166, -0.479],
      size: "small",
      timesAvailables: ["15:00", "16:00", "17:00"],
    },
    {
      id: 14,
      location: [38.166, -0.4793],
      size: "small",
      timesAvailables: ["18:00", "19:00", "20:00"],
    },
    {
      id: 15,
      location: [38.166, -0.4796],
      size: "big",
      timesAvailables: ["21:00", "22:00", "23:00"],
    },
    {
      id: 16,
      location: [38.166, -0.4799],
      size: "big",
      timesAvailables: ["09:00", "10:00", "12:00"],
    },
  ];

  const greenIcon = new Icon({
    iconUrl: "/green-dot.png",
    iconSize: [10, 10],
  });

  const redIcon = new Icon({
    iconUrl: "/red-dot.png",
    iconSize: [9, 9],
  });

  return (
    <div
      className="border border-gray-300 rounded-md"
      style={{ height: "90vh", width: "70vw" }}
    >
      <MapContainer
        center={tabarcaCoords}
        zoom={16}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {playasTarbarca.map((item) => (
          <Marker
            key={item.id}
            position={item.location}
            icon={item.size === "big" ? greenIcon : redIcon}
            eventHandlers={{
              click: () => onPointClick(item),
            }}
          ></Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export async function getServerSideProps() {
  // Realiza la llamada a la API para obtener los datos del array
  const res = await fetch("https://www.boyas.com/all");
  const data = await res.json();

  return {
    props: {
      playasTarbarca: data,
    },
  };
}
