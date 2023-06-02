import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listShips, createShip, deleteShip } from "@/redux/actions/ships";
import Swal from "sweetalert2";
import Sidebar from "@/components/Dashboard/Sidebar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SailingIcon from "@mui/icons-material/Sailing";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "@/components/Dashboard/Header";

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
      <div className="bg-gray-100 min-h-screen">
        <Header title="My Ships" />
        <div className="p-4 flex flex-col gap-4">
          <div className="bg-white rounded-lg shadow-md p-4 w-full">
            <h2 className="text-xl font-bold text-blue-700 mb-3">
              Create a new ship
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-4">
                <TextField
                  name="ship_registration"
                  className="w-full"
                  id="outlined-basic"
                  label="Ship Registration"
                  variant="outlined"
                  value={formData.ship_registration}
                  onChange={handleChange}
                />
                <TextField
                  className="w-full"
                  id="outlined-basic"
                  label="Length"
                  variant="outlined"
                  name="length"
                  value={formData.length}
                  onChange={handleChange}
                />
                {/* <div className="w-full">
                  <label>
                    <span className="text-gray-700">Ship Title</span>
                    <input
                      className="w-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      type="file"
                      name="ship_title"
                      onChange={handleFileChange}
                    />
                  </label>
                </div> */}
                <Button
                  type="submit"
                  className="w-full"
                  style={{ fontSize: 20 }}
                  variant="contained"
                  startIcon={<SailingIcon style={{ fontSize: 20 }} />}
                >
                  Create Ship
                </Button>
              </div>
            </form>
          </div>

          {/* List */}
          <div className="rounded-lg w-full">
            <div className="overflow-auto rounded-lg shadow hidden md:block">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">
                      Ship
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">
                      Length
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">
                      Created at
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {ships?.length ? (
                    ships.map((ship, index) => (
                      <tr
                        key={ship.ship_registration}
                        className={`${
                          index % 2 === 0 ? "bg-gray-100" : "bg-white"
                        }`}
                      >
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                          {ship.ship_registration}
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                          {ship.length}
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                          {ship.created_at}
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                          <Button
                            variant="contained"
                            color="error"
                            startIcon={<DeleteIcon />}
                            onClick={() => handleDelete(ship.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>
                        <p className="text-red-500">No ships available.</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobil */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
              {ships?.length ? (
                ships.map((ship) => (
                  <div
                    key={ship.ship_registration}
                    className="bg-white p-4 rounded-lg shadow"
                  >
                    <div className="flex flex-col text-sm">
                      <div className="font-semibold text-blue-600">
                        {ship.ship_registration}
                      </div>
                      <div className="my-1">Length: {ship.length}</div>
                      <div className="my-1">Created at: {ship.created_at}</div>
                      <Button
                        variant="contained"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={() => handleDelete(ship.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-red-500">No ships available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default Ships;
