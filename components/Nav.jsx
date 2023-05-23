import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className=" flex flex-row w-full p-3 px-4 lg:px-10 justify-between sm:justify-between h-[70px] mb-3">
      <Link href="/" className="flex items-center">
        <img src="/logo.png" className="ms-3 h-16 w-full" alt="Logo" />
      </Link>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className=" font-medium xl:text-2xl lg:text-2xl gap-5 h-full items-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link
              href="/"
              className="block py-2 pl-3 pr-4 text-white bg-blue-700
              rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white
              md:dark:text-blue-500"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/nosotros"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded
              hover:bg-gray-100 md:hover:bg-transparent md:border-0
              md:hover:text-blue-700 md:p-0 dark:text-white
              md:dark:hover:text-blue-500 dark:hover:bg-gray-700
              dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              className="block py-2 pl-3 pr-4 text-gray-900 
              hover:bg-gray-100 md:hover:bg-transparent md:border-0
              md:hover:text-blue-700 md:p-0 dark:text-white
              md:dark:hover:text-blue-500 dark:hover:bg-gray-700
              dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Contactanos
            </Link>
          </li>
        </ul>
      </div>
      <div className="justify-end sm:pr-16 sm:flex flex lg:pr-0">
        <Link
          href="/login"
          className="text-dark hover:text-primary py-3 px-7 lg:text-xl text-base font-medium"
        >
          Ingresar
        </Link>
        <Link
          href="/"
          className="bg-[#3056D3] rounded-lg py-3.5 px-3 text-sm lg:py-3 lg:px-7 lg:text-xl font-medium text-white hover:bg-opacity-90"
        >
          Registrarse
        </Link>
      </div>
    </nav>
  );
}
