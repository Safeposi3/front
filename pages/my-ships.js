import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listShips, createShip, deleteShip } from "@/redux/actions/ships";
import Swal from "sweetalert2";
import { FaRegEdit, FaPlusCircle } from "react-icons/fa";
import Sidebar from "@/components/Dashboard/Sidebar";
import { Button } from "@mui/material";

function Ships() {
  const dispatch = useDispatch();
  const { loading: loadingShips, data: ships, error: errorShips } = useSelector(
    (state) => state.listShips
  );
  const {
    loading: loadingCreateShip,
    data: dataCreateShip,
    error: errorCreateShip,
  } = useSelector((state) => state.createShip);
  const {
    loading: loadingDeleteShip,
    data: dataDeleteShip,
    error: errorDeleteShip,
  } = useSelector((state) => state.deleteShip);
  const [formData, setFormData] = useState({
    ship_registration: "",
    length: "",
    ship_title: null,
  });
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteShip(id));
      }
    });
  };
  useEffect(() => {
    dispatch(listShips());
  }, []);

  useEffect(() => {
    if (dataCreateShip) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Ship created",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch({ type: "CREATE_SHIP_RESET" });
      dispatch(listShips());
    }
  }, [dataCreateShip]);

  useEffect(() => {
    if (dataDeleteShip) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Ship deleted",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch({ type: "DELETE_SHIP_RESET" });
      dispatch(listShips());
    }
  }, [dataDeleteShip]);
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
      <div className="lg:flex lg:justify-center lg:items-start min-h-screen p-2 md:p-4 lg:p-6 ml-8 w-full">
        <div className="flex-grow lg:max-w-xl lg:mr-6 bg-white rounded-lg shadow-md p-6 space-y-4">
          <h1 className="text-2xl font-bold mb-4 text-blue-700">My Ships</h1>
          {ships?.length ? (
            ships.map((ship) => (
              <div
                key={ship.ship_registration}
                className="bg-blue-100 p-4 rounded-lg space-y-2"
              >
                <h2 className="font-semibold text-blue-600">
                  {ship.ship_registration}
                </h2>
                <p className="text-sm text-gray-700">Length: {ship.length}</p>
                <p className="text-sm text-gray-700">
                  Created at: {ship.created_at}
                </p>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(ship.id)}
                >
                  Delete
                </Button>
              </div>
            ))
          ) : (
            <p className="text-red-500">No ships available.</p>
          )}
        </div>
        <div className="mt-6 lg:mt-0 lg:max-w-xl bg-white rounded-lg shadow-md p-6 space-y-4">
          <h2 className="mt-4 text-xl font-bold text-blue-700">
            Create a new ship
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-group">
              <label className="block">
                <span className="text-gray-700">Ship Registration</span>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  name="ship_registration"
                  value={formData.ship_registration}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label className="block">
                <span className="text-gray-700">Length</span>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  name="length"
                  value={formData.length}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label className="block">
                <span className="text-gray-700">Ship Title</span>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="file"
                  name="ship_title"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <div className="form-group">
              <button
                className="mt-4 font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 text-white"
                type="submit"
              >
                <FaPlusCircle /> Create Ship
              </button>
            </div>
          </form>
        </div>
      </div>
    </Sidebar>
  );
}

export default Ships;
