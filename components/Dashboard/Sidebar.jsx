import Link from "next/link";
import React from "react";
import { RxDashboard, RxPerson } from "react-icons/rx";
import { FaRegCalendarCheck } from "react-icons/fa";
import { RiShip2Line } from "react-icons/ri";
import Image from "next/image";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/dashboard">
            <Image
              className="cursor-pointer"
              src="/../public/logo.png"
              alt="/"
              width={35}
              height={70}
            />
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href="/dashboard">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/dashboard">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RiShip2Line size={20} />
            </div>
          </Link>
          <Link href="/dashboard">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FaRegCalendarCheck size={20} />
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <Link href="/dashboard">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg inline-block">
              <RxPerson size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
