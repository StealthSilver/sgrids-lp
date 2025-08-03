"use client";


import React from "react";
import { World } from "../ui/Globe";// adjust path if needed

const Hero = () => {
  return (
    <section className="w-full bg-white min-h-screen flex items-center">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 mt-20">
        {/* Text Content */}
        <div className="ml-52">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900  mb-8">
            The Only Platform You Need For Renewable Intelligence
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 ">
            Optimise renewable assets, ensure compliance, and streamline grid access, all on one platform with — <strong>Solvyn</strong>
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300">
            Get a Demo
          </button>
        </div>

        {/* Globe Component */}
        <div className="h-[100px] md:h-[800px]">
          <World globeConfig={{
            pointSize: 1,
            globeColor: "#3b82f6",
            showAtmosphere: true,
            atmosphereColor: "#242424",
            atmosphereAltitude: 0.1,
            emissive: "#000000",
            emissiveIntensity: 0.8,
            shininess: 0.9,
            polygonColor: "rgba(255,255,255,0.7)",
            ambientLight: "#ffffff",
            directionalLeftLight: "#ffffff",
            directionalTopLight: "#ffffff",
            pointLight: "#ffffff",
            arcTime: 2000,
            arcLength: 0.9,
            rings: 1,
            maxRings: 3,
            autoRotate: true,
            autoRotateSpeed: 1.5,
          }} data={[]} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
