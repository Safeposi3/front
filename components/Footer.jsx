import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-black w-full text-white py-6">
      <div className="max-w-[1240px] m-auto flex flex-col justify-between items-center md:flex-row">
        <p className="my-1">© 2023 Ocean Reef Blue</p>
        <div className="flex my-1">
          <Link href="https://www.linkedin.com/company/ocean-blue-reef/">
            <div className="rounded-full mx-3 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaLinkedinIn size={20} />
            </div>
          </Link>
          <Link href="mailto:atencionobr@gmail.com">
            <div className="rounded-full mx-3 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiOutlineMail size={20} />
            </div>
          </Link>
          <Link href={"https://www.instagram.com/oceanbluereef_official/"}>
            <div className="rounded-full mx-3 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaInstagram size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
