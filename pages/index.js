import React from "react";
import Nav from "../components/Nav";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Nav />
      <div className="w-full bg-[url('/image-header.jpg')] bg-center bg-no-repeat bg-cover sm:h-screen">
        <div className="max-w-[1240px] w-full h-full mx-auto grid grid-cols-1 gap-4 items-center sm:grid-cols-2 sm:pt-40 sm:pb-20">
          <div className="bg-white p-5 pt-32 sm:pt-5 lg:p-20">
            <h1 className="font-bold text-4xl">
              Book your buoy in the comfort of your own home
            </h1>
            <p className="my-6">
              Go ahead! What are you waiting for? Book your buoy right now to
              have a fantastic day at sea while helping preserve the marine
              ecosystem, Don't think twice!
            </p>
            <Link href="/dashboard">
              <button className="bg-black text-white text-lg px-5 py-3 my-6 rounded-lg">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* about section */}
      <div id="about" className="w-full md:h-screen flex items-center py-28">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-24">
          <div className="p-5">
            <p className="uppercase text-3xl tracking-widest text-[#5651e5]">
              About Us
            </p>
            <p className="py-2 text-gray-600">
              Ocean Blue Reef is a company that arises from the problem of the
              seabed destruction and the overcrowding of coves and bays by
              recreational boats. At Ocean Blue Reef, we offer a smart mooring
              service for boats, with the aim of putting an end to the
              deforestation of the marine floor, thus helping sailors to easily
              moor their boats and, above all, to aid the environment. Our
              objective is to prevent overcrowding and disputes among sailors
              and preserve the marine wildlife by providing a safe, economical,
              and green alternative, saving time, effort, and money.
            </p>
            <p className="uppercase text-xl tracking-widest text-[#5651e5]"></p>
            <h2 className="font-bold text-3xl py-4">Objective</h2>
            <p className="py-2 text-gray-600">
              Our goal is clear and simple: to protect the Oceanic posidonia,
              which is home to thousands of marine animal and plant species,
              while also helping to manage anchorage points for boats in coves
              and bays.
            </p>
          </div>
          <div className="w-full h-auto m-auto flex justify-center items-center p-4 hover:scale-105 ease-in duration-300">
            <Image src="/image-about.jpeg" alt="/" width={698} height={465} />
          </div>
        </div>
      </div>

      {/* prices section */}
      <div
        id="prices"
        className="w-full flex flex-wrap-reverse items-center pt-20"
      >
        <div className="m-auto md:grid grid-cols-2">
          <div className="bg-[url('/image-prices.JPG')] bg-center bg-no-repeat bg-cover h-60 sm:h-72 md:h-auto"></div>

          <div className="bg-[#cee4ea] p-5 lg:p-16">
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">
              Prices
            </p>
            <h2 className="font-bold text-3xl py-4">Price per hours</h2>
            <p className="py-2 text-gray-600">
              We have a wide range of prices for boats it depends on the type of
              size of the boat and the season.
            </p>
            <p className="pb-10 text-gray-600">Temporada baja</p>
            <div className="grid grid-cols-2 text-center">
              <div className="border-t-2 flex justify-start items-center py-2">
                Less than 12 meters
              </div>
              <div className="border-t-2 flex justify-end items-center py-2 text-2xl font-bold">
                0,38$/hour
              </div>
              <div className="border-t-2 flex justify-start items-center py-2">
                Between 12 and 15 meters
              </div>
              <div className="border-t-2 flex justify-end items-center py-2 text-2xl font-bold">
                0,61$/hour
              </div>
              <div className="border-y-2 flex justify-start items-center py-2">
                Between 15 and 20 meters
              </div>
              <div className="border-y-2 flex justify-end items-center py-2 text-2xl font-bold">
                1,06$/hour
              </div>
              <div className="border-y-2 flex justify-start items-center py-2">
                More than 20 meters
              </div>
              <div className="border-y-2 flex justify-end items-center py-2 text-2xl font-bold">
                3,26$/hour
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step section */}
      <div
        id="steps"
        className="w-full lg:h-screen flex items-center py-28 hidden"
      >
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-20 p-5">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/../public/coche.png"
              alt="/"
              width={150}
              height={150}
            />
            <h2 className="font-bold text-3xl py-4">
              empieza a conducir tu WiBLE en Madrid
            </h2>
            <p className="py-2 text-gray-600">
              Empezar a conducir los coches híbridos enchufables WiBLE es muy
              fácil, completa estos pasos y ve más allá.
            </p>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <Image
                  src="/../public/01.png"
                  alt="/"
                  width={90}
                  height={115}
                />
                <p className="py-2 text-gray-600 font-bold">
                  Descárgate la app de WiBLE
                </p>
                <p className="py-2 text-gray-600">
                  Todos los servicios de WiBLE en tu movil. Encuentra tu WiBLE
                  más cercano.
                </p>
              </div>
              <div className="flex flex-col">
                <Image
                  src="/../public/01.png"
                  alt="/"
                  width={90}
                  height={115}
                />
                <p className="py-2 text-gray-600 font-bold">
                  Descárgate la app de WiBLE
                </p>
                <p className="py-2 text-gray-600">
                  Todos los servicios de WiBLE en tu movil. Encuentra tu WiBLE
                  más cercano.
                </p>
              </div>
              <div className="flex flex-col">
                <Image
                  src="/../public/01.png"
                  alt="/"
                  width={90}
                  height={115}
                />
                <p className="py-2 text-gray-600 font-bold">
                  Descárgate la app de WiBLE
                </p>
                <p className="py-2 text-gray-600">
                  Todos los servicios de WiBLE en tu movil. Encuentra tu WiBLE
                  más cercano.
                </p>
              </div>
              <div className="flex flex-col">
                <Image
                  src="/../public/01.png"
                  alt="/"
                  width={90}
                  height={115}
                />
                <p className="py-2 text-gray-600 font-bold">
                  Descárgate la app de WiBLE
                </p>
                <p className="py-2 text-gray-600">
                  Todos los servicios de WiBLE en tu movil. Encuentra tu WiBLE
                  más cercano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
