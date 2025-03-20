
import { useState } from "react";
import { getConfigData } from "../data/configReader";
import P1 from '../assets/aws.jpeg';
import P2 from '../assets/starkenn.jpg';
import P3 from '../assets/profile.png';
export default function Home() {
    const configData = getConfigData();
      const projects = configData.projects;
    
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
    
      const svgClass = isHovered
        ? "w-6 h-6 text-gray-500 transition delay-150"
        : "w-6 h-6 text-gray-300";
    
      return (
        <>
          <div className="px-2">
            <div className="flex flex-col bg-gray-100 rounded-lg px-5 py-5 ">
              <div className="flex items-center justify-between mb-5">
                <div className="font-medium text-lg flex items-center gap-x-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  Projects
                </div>
                
              </div>
              <div className="flex flex-col">
                {projects.map((project, index) => (
                  <>
                  <a
                    key={index}
                    onMouseEnter={()=>handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
                    href={project.link}
                  >
                    <div className="rounded-full overflow-hidden flex items-center justify-center border border-gray-200 hidden md:block">
                      <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          src={index === 0 ? P3 : index === 1 ? P1 : P2}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h1 className="font-medium text-lg">
                        {project["project-name"]}
                      </h1>
                      <p className="text-gray-500 text-md">
                        {project["project-desc"]}
                      </p>
                      
                    </div>
                    
                  </a>
                  <div className="flex flex-col justify-center card bg-white rounded-lg px-5 py-3 mb-5">
                  {
                    hoveredIndex == index? (<p>{project.description}</p>):(<></>)
                  }
                </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </>
      );
    }
    