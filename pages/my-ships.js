import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listShips, createShip } from "@/redux/actions/ships";
import Swal from "sweetalert2";
import { FaRegEdit, FaPlusCircle } from "react-icons/fa";
import Sidebar from "@/components/Dashboard/Sidebar";

function Ships() {
  const dispatch = useDispatch();
  const {
    loading: loadingShips,
    data: ships,
    error: errorShips,
  } = useSelector((state) => state.listShips);
  const {
    loading: loadingCreateShip,
    data: dataCreateShip,
    error: errorCreateShip,
  } = useSelector((state) => state.createShip);

  const [formData, setFormData] = useState({
    ship_registration: "",
    length: "",
    ship_title: null,
  });

  useEffect(() => {
    dispatch(listShips());
  }, []);

  useEffect(() => {
    if (dataCreateShip) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Ship created",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(listShips());
    }
  }, [dataCreateShip]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createShip(formData));
  };

  // if (loadingShips) return "Loading...";
  if (errorShips) return <div>Error:{errorShips.response.statusText}</div>;

  return (
    <Sidebar>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="relative flex flex-col bg-white rounded-lg shadow-md p-6 w-1/2">
          <h1 className="text-2xl font-bold mb-4">Ships</h1>
          {ships?.length ? (
            ships.map((ship) => (
              <div key={ship.ship_registration}>
                <h2>{ship.ship_registration}</h2>
                <p>Length: {ship.length}</p>
                <p>Created at: {ship.created_at}</p>
              </div>
            ))
          ) : (
            <p>No ships available.</p>
          )}
          <h2 className="mt-4 text-xl font-bold">Create a new ship</h2>
          <form onSubmit={handleSubmit}>
            <label className="block mt-4">
              <span className="text-gray-700">Ship Registration</span>
              <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="text"
                name="ship_registration"
                value={formData.ship_registration}
                onChange={handleChange}
              />
            </label>
            <label className="block mt-4">
              <span className="text-gray-700">Length</span>
              <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="text"
                name="length"
                value={formData.length}
                onChange={handleChange}
              />
            </label>
            <label className="block mt-4">
              <span className="text-gray-700">Ship Title</span>
              <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="file"
                name="ship_title"
                onChange={handleFileChange}
              />
            </label>
            <button
              className="mt-4 font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 text-white"
              type="submit"
            >
              <FaPlusCircle /> Create Ship
            </button>
          </form>
        </div>
      </div>
    </Sidebar>
  );
}

export default Ships;
