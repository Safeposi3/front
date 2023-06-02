import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo, updateUserInfo } from "@/redux/actions/user";
import Swal from "sweetalert2";
import { FaRegEdit } from "react-icons/fa";
import { isEqual } from "lodash";
import Sidebar from "@/components/Dashboard/Sidebar";
import Header from "@/components/Dashboard/Header";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import CakeIcon from "@mui/icons-material/Cake";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PublicIcon from "@mui/icons-material/Public";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HomeIcon from "@mui/icons-material/Home";
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";

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

  // if (loadingUserInfo) return "Loading...";
  if (errorUserInfo)
    return <div>Error:{errorUserInfo.response.statusText}</div>;

  return (
    <Sidebar>
      <div className="bg-gray-100 min-h-screen">
        <Header title="My Account" />
        <div className="p-4">
          <div className="bg-white rounded-lg shadow-md p-4 w-full">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Data</h1>
              {!editMode && (
                <button
                  onClick={handleEditClick}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaRegEdit size={25} />
                </button>
              )}
              {editMode && (
                <button
                  className={`font-bold py-2 px-4 rounded ${
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
            </div>
            <form onSubmit={handleSubmit}>
              {/* Repeat for each input field */}
              <div className="flex flex-col sm:flex-row gap-4">
                <FormControl className="w-full" variant="standard">
                  <InputLabel htmlFor="first_name">First Name</InputLabel>
                  <Input
                    id="first_name"
                    name="first_name"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                    value={formData.first_name}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </FormControl>
                <FormControl className="w-full" variant="standard">
                  <InputLabel htmlFor="last_name">Last Name</InputLabel>
                  <Input
                    id="last_name"
                    name="last_name"
                    startAdornment={
                      <InputAdornment position="start">
                        <SupervisedUserCircleIcon />
                      </InputAdornment>
                    }
                    value={formData.last_name}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </FormControl>
                <FormControl className="w-full" variant="standard">
                  <InputLabel htmlFor="birthdate">Birthdate</InputLabel>
                  <Input
                    id="birthdate"
                    name="birthdate"
                    type="date"
                    startAdornment={
                      <InputAdornment position="start">
                        <CakeIcon />
                      </InputAdornment>
                    }
                    value={formData.birthdate}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </FormControl>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 my-14">
                <FormControl className="w-full" variant="standard">
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input
                    id="email"
                    name="email"
                    startAdornment={
                      <InputAdornment position="start">
                        <MailIcon />
                      </InputAdornment>
                    }
                    value={formData.email}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </FormControl>
                <FormControl className="w-full" variant="standard">
                  <InputLabel htmlFor="phonenumber">Phone Number</InputLabel>
                  <Input
                    id="phonenumber"
                    name="phonenumber"
                    startAdornment={
                      <InputAdornment position="start">
                        <PhoneIphoneIcon />
                      </InputAdornment>
                    }
                    value={formData.phonenumber}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </FormControl>
                <FormControl className="w-full" variant="standard">
                  <InputLabel htmlFor="dni">DNI</InputLabel>
                  <Input
                    id="dni"
                    name="dni"
                    startAdornment={
                      <InputAdornment position="start">
                        <AssignmentIndIcon />
                      </InputAdornment>
                    }
                    value={formData.dni}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </FormControl>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 my-14">
                <FormControl className="w-full" variant="standard">
                  <InputLabel htmlFor="country">Country</InputLabel>
                  <Input
                    id="country"
                    name="country"
                    startAdornment={
                      <InputAdornment position="start">
                        <PublicIcon />
                      </InputAdornment>
                    }
                    value={formData.country}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </FormControl>
                <FormControl className="w-full" variant="standard">
                  <InputLabel htmlFor="city">City</InputLabel>
                  <Input
                    id="city"
                    name="city"
                    startAdornment={
                      <InputAdornment position="start">
                        <LocationCityIcon />
                      </InputAdornment>
                    }
                    value={formData.city}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </FormControl>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <FormControl className="w-full" variant="standard">
                  <InputLabel htmlFor="address">Address</InputLabel>
                  <Input
                    id="address"
                    name="address"
                    startAdornment={
                      <InputAdornment position="start">
                        <HomeIcon />
                      </InputAdornment>
                    }
                    value={formData.address}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </FormControl>
                <FormControl className="w-full" variant="standard">
                  <InputLabel htmlFor="postal_code">Postal Code</InputLabel>
                  <Input
                    id="postal_code"
                    name="postal_code"
                    startAdornment={
                      <InputAdornment position="start">
                        <MarkunreadMailboxIcon />
                      </InputAdornment>
                    }
                    value={formData.postal_code}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </FormControl>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default Account;
