import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";
import { Icon } from "leaflet";
import { useDispatch, useSelector } from "react-redux";
import { listBuoys } from "@/redux/actions/buoys";

export default function Map({ onPointClick, selectedShip }) {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.listBuoys);

  const [selectedBuoy, setSelectedBuoy] = useState(null);
  const [tabarcaCoords, setTabarcaCoords] = useState([
    38.16631881567097, -0.4794345305520023,
  ]);

  useEffect(() => {
    dispatch(listBuoys());
  }, []);
  //Icon for buoy selected
  const selectedIcon = new Icon({
    iconUrl: "/blue-dot.png",
    iconSize: [15, 15],
  });
  //Icon for buoy availables
  const greenIcon = new Icon({
    iconUrl: "/green-dot.png",
    iconSize: [12, 12],
  });
  //Icon for buoy unavailable
  const redIcon = new Icon({
    iconUrl: "/red-dot.png",
    iconSize: [12, 12],
  });

  return (
    <div
      className="w-[73vw] h-[80vh] sm:w-[77.5vw] md:w-[81.5vw] lg:w-[63vw] xl:w-[67vw]"
      // style={{ height: "90vh", width: "70vw" }}
      //with this you can modify the size of the map vh is equal to % of viewport
    >
      <MapContainer
        center={tabarcaCoords}
        zoom={17}
        // style={{ height: "100%", width: "100%" }}
        className="w-[100%] h-[100%]"
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
