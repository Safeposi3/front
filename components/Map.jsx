import { MapContainer, Marker, TileLayer, Circle } from "react-leaflet";
import { useEffect, useState } from "react";
import { Icon } from "leaflet";
import { useDispatch, useSelector } from "react-redux";
import { listBuoys } from "@/redux/actions/buoys";
export default function Map({ onPointClick }) {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.listBuoys);
  const [selectedBuoy, setSelectedBuoy] = useState(null);
  const [tabarcaCoords, setTabarcaCoords] = useState([
    38.16631881567097,
    -0.4794345305520023,
  ]);

  useEffect(() => {
    dispatch(listBuoys());
  }, []);
  const selectedIcon = new Icon({
    iconUrl: "/blue-dot.png",
    iconSize: [15, 15],
  });
  const greenIcon = new Icon({
    iconUrl: "/green-dot.png",
    iconSize: [12, 12],
  });

  const redIcon = new Icon({
    iconUrl: "/red-dot.png",
    iconSize: [12, 12],
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
        {data?.map((item) => (
          <>
            <Marker
              key={item.id}
              position={{ lat: item.latitude, lng: item.longitude }}
              icon={
                selectedBuoy?.id === item.id
                  ? selectedIcon
                  : item.size === "S"
                  ? redIcon
                  : greenIcon
              }
              eventHandlers={{
                click: () => {
                  setSelectedBuoy(item);
                  onPointClick(item);
                },
              }}
            ></Marker>
          </>
        ))}
      </MapContainer>
    </div>
  );
}
