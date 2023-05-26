import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useState } from "react";
import { Icon } from "leaflet";
import { playasTarbarca } from "../utils/data";
export default function Map({ onPointClick }) {
  const [tabarcaCoords, setTabarcaCoords] = useState([
    38.16631881567097,
    -0.4794345305520023,
  ]);

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
        zoom={17}
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
