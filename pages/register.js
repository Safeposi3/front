import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/auth";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Swal from "sweetalert2";
export default function Register() {
  const useAuth = useContext(UserContext);

  const router = useRouter();
  const dispatch = useDispatch();
  const {
    loading: loadingRegister,
    data: dataRegister,
    error: errorRegister,
  } = useSelector((state) => state.register);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    birthdate: "",
    phoneNumber: "",
    country: "",
    address: "",
    postalCode: "",
    city: "",
    dni: "",
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNext();
    }
  };
  const validateForm = () => {
    let isValid = true;
    let errors = {};

    // Step 1: Email
    if (step === 1) {
      if (!form.email) {
        errors.email = "Email is required";
        isValid = false;
      } else if (!form.email.includes("@")) {
        errors.email = "Please enter a valid email";
        isValid = false;
      }
    }

    // Step 2: Password and Confirm Password
    if (step === 2) {
      if (!form.password) {
        errors.password = "Password is required";
        isValid = false;
      }
      if (form.password !== form.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
        isValid = false;
      }
    }

    // Step 3: Basic Information
    if (step === 3) {
      if (!form.fullName) {
        errors.fullName = "Full name is required";
        isValid = false;
      }
      if (!form.birthdate) {
        errors.birthdate = "Birthdate is required";
        isValid = false;
      }
      // Add validations for other fields in Step 3
    }

    // Step 4: Location
    if (step === 4) {
      if (!form.country) {
        errors.country = "Country is required";
        isValid = false;
      }
      if (!form.address) {
        errors.address = "Address is required";
        isValid = false;
      }
      // Add validations for other fields in Step 4
    }

    setErrors(errors); // Update the errors state

    return isValid;
  };
  const handleNext = () => {
    const isValid = validateForm();

    if (isValid) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (dataRegister) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Account created",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        dispatch({ type: "REGISTER_RESET" });
        router.push("/dashboard");
      });
    }
  }, [dataRegister]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (step === 4) {
        // Submit the form
        // Add your logic here

        dispatch(register(form));
      } else {
        setStep(step + 1);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill the form correctly",
      });
    }
  };

  const renderButtons = () => {
    if (step === 1) {
      return (
        <button
          type="button"
          className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleNext}
        >
          Next
        </button>
      );
    } else if (step === 4) {
      return (
        <>
          <button
            type="button"
            className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handlePrev}
          >
            Previous
          </button>
          <button
            type="submit"
            className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={
              !form.fullName ||
              !form.birthdate ||
              !form.phoneNumber ||
              !form.country ||
              !form.address ||
              !form.postalCode ||
              !form.city ||
              !form.dni
            }
            onClick={handleSubmit}
          >
            Submit
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            type="button"
            className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handlePrev}
          >
            Previous
          </button>
          <button
            type="button"
            className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleNext}
          >
            Next
          </button>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Image
            className="mx-auto"
            src="/logo.png"
            width={80}
            height={80}
            alt="Logo"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up for your account
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            {step === 1 && (
              <>
                <input
                  id="email"
                  name="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                {errors.email && (
                  <p className="mt-2 ms-2 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </>
            )}
            {step === 2 && (
              <>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
              </>
            )}
            {step === 3 && (
              <>
                <input
                  id="fullName"
                  name="fullName"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                <input
                  id="birthdate"
                  name="birthdate"
                  type="date"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Birthdate"
                  value={form.birthdate}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                <input
                  id="dni"
                  name="dni"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="DNI"
                  value={form.dni}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Phone Number"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
              </>
            )}

            {step === 4 && (
              <>
                <input
                  id="country"
                  name="country"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Country"
                  value={form.country}
                  onChange={handleChange}
                />
                <input
                  id="address"
                  name="address"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Address"
                  value={form.address}
                  onChange={handleChange}
                />
                <input
                  id="postalCode"
                  name="postalCode"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="ZIP Code"
                  value={form.postalCode}
                  onChange={handleChange}
                />
                <input
                  id="city"
                  name="city"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="City"
                  value={form.city}
                  onChange={handleChange}
                />
              </>
            )}
          </div>
          <div className="flex items-center justify-between">
            {renderButtons()}
          </div>
        </form>
        <div className="text-center">
          <Link
            href="/"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
