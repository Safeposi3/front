import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo, updateUserInfo } from "@/redux/actions/user";
import Swal from "sweetalert2";
import { FaRegEdit } from "react-icons/fa";
import { isEqual } from "lodash";
function Account() {
  const [editMode, setEditMode] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const {
    loading: loadingUserInfo,
    data: userInfo,
    error: errorUserInfo,
  } = useSelector((state) => state.getUserInfo);
  const {
    loading: loadingUpdateUser,
    data: dataUpdateUserInfo,
    error: errorUpdateUserInfo,
  } = useSelector((state) => state.updateUserInfo);
  const [originalData, setOriginalData] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    birthdate: "",
    phonenumber: "",
    country: "",
    address: "",
    postal_code: "",
    city: "",
    dni: "",
  });
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  useEffect(() => {
    if (userInfo) {
      const formData = {
        first_name: userInfo?.user_info.first_name,
        last_name: userInfo?.user_info.last_name,
        email: userInfo?.user_info.email,
        birthdate: userInfo?.user_info.birthdate,
        phonenumber: userInfo?.user_info.phonenumber,
        country: userInfo?.user_info.country,
        address: userInfo?.user_info.address,
        postal_code: userInfo?.user_info.postal_code,
        city: userInfo?.user_info.city,
        dni: userInfo?.user_info.dni,
      };
      setFormData(formData);
      setOriginalData(formData);
    }
  }, [userInfo]);
  useEffect(() => {
    setIsValid(validate());
  }, [formData]);
  useEffect(() => {
    if (dataUpdateUserInfo) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Account updated",
        showConfirmButton: false,
        timer: 1500,
      });
      setEditMode(false);
    }
  }, []);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInfo(formData));
    setEditMode(false);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };
  const validate = () => {
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const phoneRegex = /^\d{8,15}$/;
    const postalCodeRegex = /^\d{5}$/; // adjust this based on your country
    const dniRegex = /^\d{7,8}$/; // adjust this based on your requirements

    let newErrors = {};

    if (!formData?.first_name?.match(nameRegex)) {
      newErrors.first_name = "First Name should only contain letters.";
    }
    if (!formData?.last_name?.match(nameRegex)) {
      newErrors.last_name = "Last Name should only contain letters.";
    }
    if (!formData?.email?.match(emailRegex)) {
      newErrors.email = "Email should be in the correct format.";
    }
    if (!formData?.birthdate?.match(dateRegex)) {
      newErrors.birthdate = "Birthdate should be in the format YYYY-MM-DD.";
    }
    if (!formData?.phonenumber?.match(phoneRegex)) {
      newErrors.phonenumber =
        "Phone number should only contain numbers and be between 10 to 15 digits.";
    }
    if (!formData?.country) {
      newErrors.country = "Country should not be empty.";
    }
    if (!formData?.city) {
      newErrors.city = "City should not be empty.";
    }
    if (!formData?.address) {
      newErrors.address = "Address should not be empty.";
    }
    if (!formData?.postal_code?.match(postalCodeRegex)) {
      newErrors.postal_code = "Postal Code should be 5 digits."; // adjust this based on your country
    }
    if (!formData?.dni?.match(dniRegex)) {
      newErrors.dni = "DNI should be 7 to 8 digits."; // adjust this based on your requirements
    }

    setErrors(newErrors);

    // If newErrors is empty, return true. Otherwise, false.
    return Object.keys(newErrors).length === 0;
  };

  if (loadingUserInfo) return "Loading...";
  if (errorUserInfo)
    return <div>Error:{errorUserInfo.response.statusText}</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="relative flex flex-col bg-white rounded-lg shadow-md p-6 w-1/2">
        <div className="absolute right-0 top-0 m-4">
          {!editMode && (
            <button
              onClick={handleEditClick}
              className="text-blue-500 hover:text-blue-700"
            >
              <FaRegEdit size={25} />
            </button>
          )}
        </div>
        <h1 className="text-2xl font-bold mb-4">Account</h1>
        <form onSubmit={handleSubmit}>
          {/* Repeat for each input field */}
          <label className="block mt-4">
            <span className="text-gray-700">First Name</span>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              disabled={!editMode}
            />
          </label>
          <label className="block mt-4">
            <span className="text-gray-700">Last Name</span>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              disabled={!editMode}
            />
          </label>
          <label className="block mt-4">
            <span className="text-gray-700">Email</span>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!editMode}
            />
          </label>
          <label className="block mt-4">
            <span className="text-gray-700">Birthdate</span>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              disabled={!editMode}
            />
          </label>
          <label className="block mt-4">
            <span className="text-gray-700">Phone Number</span>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="text"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              disabled={!editMode}
            />
          </label>
          <label className="block mt-4">
            <span className="text-gray-700">Country</span>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              disabled={!editMode}
            />
          </label>
          <label className="block mt-4">
            <span className="text-gray-700">Address</span>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              disabled={!editMode}
            />
          </label>
          <label className="block mt-4">
            <span className="text-gray-700">Postal Code</span>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="text"
              name="postal_code"
              value={formData.postal_code}
              onChange={handleChange}
              disabled={!editMode}
            />
          </label>
          <label className="block mt-4">
            <span className="text-gray-700">City</span>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              disabled={!editMode}
            />
          </label>
          <label className="block mt-4">
            <span className="text-gray-700">DNI</span>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="text"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              disabled={!editMode}
            />
          </label>

          {editMode && (
            <button
              className={`mt-4 font-bold py-2 px-4 rounded ${
                !isValid || isEqual(originalData, formData)
                  ? "bg-blue-200 text-white cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-700 text-white"
              }`}
              type="button"
              onClick={handleSubmit}
              disabled={!isValid || isEqual(originalData, formData)}
            >
              Save
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Account;
