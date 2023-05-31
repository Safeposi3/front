import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-black w-full text-white py-6">
      <div className="max-w-[1240px] m-auto flex flex-col justify-between items-center md:flex-row">
        <p className="my-1">© 2023 Empresa, Inc.</p>
        <div className="flex my-1">
          <div className="rounded-full mx-3 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <FaLinkedinIn size={20} />
          </div>
          <div className="rounded-full mx-3 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <FaGithub size={20} />
          </div>
          <div className="rounded-full mx-3 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <AiOutlineMail size={20} />
          </div>
          <div className="rounded-full mx-3 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <BsFillPersonLinesFill size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
