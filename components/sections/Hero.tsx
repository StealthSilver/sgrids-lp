"use client";


import React from "react";
import { World } from "../ui/Globe";

const Hero = () => {
  return (
    <section className="w-full bg-white min-h-screen flex items-center dark:bg-black">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 mt-20">
    
        <div className=" mx-auto md:ml-52">
          <h1 className="text-2xl md:text-6xl font-bold text-gray-900 mb-8 dark:text-slate-400">
            The Only Platform You Need For Renewable Intelligence
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 dark:text-slate-500">
            Optimise renewable assets, ensure compliance, and streamline grid access, all on one platform with — <strong>Solvyn</strong>
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300">
            Get a Demo
          </button>
        </div>

        {/* Globe Component */}
        <div className="h-[600px] md:h-[900px]">
          <World globeConfig={{
            pointSize: 1,
            globeColor: "#3b82f6",
            showAtmosphere: true,
            atmosphereColor: "#242424",
            atmosphereAltitude: 0.1,
            emissive: "#000000",
            emissiveIntensity: 0.8,
            shininess: 0.2,
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
