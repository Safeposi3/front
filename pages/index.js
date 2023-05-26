import React from "react";
import Nav from "../components/Nav";

import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Footer from "@/components/Footer";
import { useSelector } from "react-redux";


export default function Home() {
  return (
    <div>
      <Nav />
      <div className="w-full h-screen bg-[url('../public/mainBg.webp')] bg-right-top bg-no-repeat bg-cover">
        <div className="max-w-[1240px] w-full h-full mx-auto pt-40 pb-20 grid grid-cols-2 gap-4 items-center">
          <div className="bg-white p-20">
            <h1>Penatibus cras elit montes habitasse</h1>
            <p className="my-6">
              empus nibh mattis duis vestibulum semper proin massa nam congue
              dis gravida. Nam; mattis platea ipsum. Mi sociis molestie suscipit
              turpis.
            </p>
            <button className="bg-black text-white text-lg px-5 py-3 my-6 rounded-lg">
              Dictumst cursus vitae
            </button>
            <p className="my-6">
              Habitasse porttitor hendrerit turpis laoreet.
            </p>
          </div>
        </div>
      </div>

      {/* about section */}
      <div id="about" className="w-full md:h-screen flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-24">
          <div>
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">
              About
            </p>
            <h2 className="py-4">Business</h2>
            <p className="py-2 text-gray-600">
              I specialize in building mobile responsive front-end UI
              applications that connect with API’s and other backend
              technologies. I’m passionate about learning new technologies and
              understand there is more than one way to accomplish a task. Though
              I am most proficient in building front-end applications using
              HTML, CSS, Javascript, and React, I am a quick learner and can
              pick up new tech stacks as needed. I believe that being a great
              developer is not using one specific language, but choosing the
              best tool for the job.
            </p>
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my lastest projects.
            </p>
          </div>
          <div className="w-full h-auto m-auto flex justify-center items-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src="/../public/aboutUS.webp"
              alt="/"
              width={698}
              height={465}
            />
          </div>
        </div>
      </div>

      {/* prices section */}
      <div id="about" className="w-full flex items-center">
        <div className="m-auto md:grid grid-cols-2">
          <div className="bg-[url('../public/prices.webp')] bg-center bg-no-repeat bg-cover"></div>

          <div className="bg-blue-400 p-24">
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">
              Precios
            </p>
            <h2 className="py-4">¿Cuanto pagas?</h2>
            <p className="py-2 text-gray-600">
              Date de alta en nuestra app y empieza a disfrutar de un servicio
              de coches con tarifa flexible por minutos, horas y días.
            </p>
            <p className="pb-10 text-gray-600">
              Ve más allá con los coches WiBLE.
            </p>
            <div className="grid grid-cols-2 text-center">
              <div className="border-t-2 flex justify-start items-center py-2">
                precio por minuto
              </div>
              <div className="border-t-2 flex justify-end items-center py-2 text-2xl font-bold">
                0,18€ - 0,36€*
              </div>
              <div className="border-t-2 flex justify-start items-center py-2">
                segunda hora y consecutivas
              </div>
              <div className="border-t-2 flex justify-end items-center py-2 text-2xl font-bold">
                9€*
              </div>
              <div className="border-y-2 flex justify-start items-center py-2">
                precio por día
              </div>
              <div className="border-y-2 flex justify-end items-center py-2 text-2xl font-bold">
                60€*
              </div>
            </div>
            <p className="py-10 text-gray-600">
              *100km incluídos, precio por km extra 0,28€
            </p>
          </div>
        </div>
      </div>

      {/* about section */}
      <div id="about" className="w-full md:h-screen flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-4 bg-red-400">
          <div className="bg-blue-500">
            <Image
              src="/../public/coche.png"
              alt="/"
              width={150}
              height={150}
            />
            <h2 className="py-4">empieza a conducir tu WiBLE en Madrid</h2>
            <p className="py-2 text-gray-600">
              Empezar a conducir los coches híbridos enchufables WiBLE es muy
              fácil, completa estos pasos y ve más allá.
            </p>
          </div>
          <div className="col-span-2 bg-yellow-500">
            <div className="grid grid-cols-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
