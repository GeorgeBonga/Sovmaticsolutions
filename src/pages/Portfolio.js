import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import { useDocTitle } from "../Components/CustomHooks";
import mpesaapi from "../images/MPESAAPI.png";
import derivcal  from "../images/calcu.png";
import coco  from "../images/coco.png";

const Portfolio = (props) => {
  useDocTitle("SovMatic |  Solutions - Portfolio");

  const projects = [
    {
      title: "InstaPesa Web app",
      description: "InstaPesa's Donate web app receives funds using the InstaPesa API, streamlining seamless monetary transactions and effortlessly bridging payments between banks and M-Pesa, thereby simplifying the process for our users.",
      imageUrl: mpesaapi, 
      link: "https://intasentmpesa.web.app/", 
    },
    {
      title: "DerivRiskCalculator",
      description: "Deriv Risk management Calculator",
      imageUrl: derivcal, 
      link: "https://www.amazon.com/dp/B0CHMTVRNZ/ref=apps_sf_sta", 
    },
    {
      title: "Management Dashboard",
      description: "Coco staff Management dashboard in partnership with MutabeTek{Staff ID:Bonga123,Password:secret}",
      imageUrl: coco, 
      link: "https://staff.coco-aviation.com/login", 
    },
   
    // Add more projects as needed
  ];


  return (
    <>
      <div >
        <Navbar />
      </div>
      <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h2 className="text-3xl font-extrabold text-gray-900"></h2>
        <div className="mt-8 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={project.imageUrl}
                  alt={project.title}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </p>
                  <a href={project.link} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {project.description}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
 

      <Footer />
    </>
  );
};

export default Portfolio;

