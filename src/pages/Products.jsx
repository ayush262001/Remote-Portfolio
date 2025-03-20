import { useState } from "react";
import { getConfigData } from "../data/configReader";
import P1 from "../assets/aws.jpeg";
import P2 from "../assets/starkenn.jpg";

import Java from '../assets/java.png';
import React from '../assets/React.png';
import PS from '../assets/PS.png';
import SA from '../assets/SA.png';

export default function Home() {
  const configData = getConfigData();
  const experience = configData.experience;
  const certifications = configData.certifications;
  const [isHovered, setIsHovered] = useState(false);
      const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setIsHovered(true);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredIndex(-1);
  };

  return (
    <div className="px-2">
      <div className="flex flex-col bg-gray-100 rounded-lg px-5 py-5">
        <div className="flex items-center justify-between mb-5">
          <div className="font-medium text-lg flex items-center gap-x-2">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
            Experience
          </div>
        </div>
        <div className="flex flex-col">
          {experience.map((exp, index) => (
            <div key={index} className="mb-5">
              <a
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
                href={exp.link}
              >
                <div className="rounded-full overflow-hidden flex items-center justify-center border border-gray-200 hidden md:block">
                  <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={index === 0 ? P1 : P2}
                      alt="Company Logo"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="font-medium text-lg">{exp.company}</h1>
                  <p className="text-gray-500 text-md">{exp.role}</p>
                </div>
              </a>
              {hoveredIndex === index && (
                <div className="flex flex-col justify-center card bg-white rounded-lg px-5 py-3 mt-2">
                  <p>{exp.description}</p>
                </div>
              )}
</div>


          ))}
        </div>
        {/* certification */}
        <div className="mt-8">
          <div className="font-medium text-lg flex items-center gap-x-2 mb-5">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
            Certifications
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300"
              >
                <img src={index==0? Java : index==1? React : index==2? PS : SA} alt={cert.name} className="w-full h-48 object-cover" />
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold text-gray-700">{cert.name}</h2>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}