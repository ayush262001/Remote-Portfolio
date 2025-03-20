import Profile from "../components/Profile";
import Projects from "../components/Projects";

import aws from '../assets/aws.jpeg';
import css from '../assets/Skills/css.png';
import github from '../assets/Skills/github.png';
import html from '../assets/Skills/html.png';
import java from '../assets/Skills/java.png';
import js from '../assets/Skills/js.png';
import mongo from '../assets/Skills/mongo.png';
import node from '../assets/Skills/node.png';
import react from '../assets/Skills/react.png';
import sql from '../assets/Skills/sql.png';
export default function Home() {
  return (
    <>
   <Profile />
   <Projects />
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-semibold">Let's work together.</h1>
        <p className="text-md font-normal text-gray-500 text-center px-3">
          Creating user experience and responsive web applications
        </p>
      </div>

      {/* Skills */}
      <div className="px-2">
        <div className="flex flex-col bg-gray-100 rounded-lg px-5 py-5 ">
      <div className="mt-8">
          <div className="font-medium text-lg flex items-center gap-x-2 mb-5">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
            Skills
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5">
            <img src={html} className="w-[50px] object-contain" alt="HTML" />
            <img src={css} className="w-[50px] object-contain" alt="CSS" />
            <img src={js} className="w-[50px] object-contain" alt="JavaScript" />
            <img src={react} className="w-[50px] object-contain" alt="React" />
            <img src={node} className="w-[50px] object-contain" alt="Node.js" />
            <img src={aws} className="w-[50px] object-contain" alt="AWS" />
            <img src={java} className="w-[50px] object-contain" alt="Java" />
            <img src={mongo} className="w-[50px] object-contain" alt="MongoDB" />
            <img src={sql} className="w-[50px] object-contain" alt="SQL" />
            <img src={github} className="w-[50px] object-contain" alt="GitHub" />
          </div>
        </div>

        </div>
        </div>
    </>
  );
}
