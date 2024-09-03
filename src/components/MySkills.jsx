import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaPhp,
} from "react-icons/fa";
import { SiJavascript, SiRedux, SiTailwindcss } from "react-icons/si";

const MySkills = () => {
  return (
    <div className="bg-primary-color  py-10 text-white font-jetbrainsmono">
      <div className="text-center mb-6">
        <h3 className="text-4xl font-bold mb-2">My Skills</h3>
      </div>

      {/* Skill Icons Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-6 max-w-xl mx-auto py-5">
        <div className="flex items-center justify-center h-24 w-24 bg-accent-dark opacity-90 rounded-md">
          <FaHtml5 className="text-4xl text-white" />
        </div>
        <div className="flex items-center justify-center h-24 w-24 bg-accent-dark opacity-90 rounded-md">
          <FaCss3Alt className="text-4xl text-white" />
        </div>
        <div className="flex items-center justify-center h-24 w-24 bg-accent-dark opacity-90 rounded-md">
          <SiJavascript className="text-4xl text-white" />
        </div>
        <div className="flex items-center justify-center h-24 w-24 bg-accent-dark opacity-90 rounded-md">
          <FaReact className="text-4xl text-white" />
        </div>
        <div className="flex items-center justify-center h-24 w-24 bg-accent-dark opacity-90 rounded-md">
          <SiRedux className="text-4xl text-white" />
        </div>
        <div className="flex items-center justify-center h-24 w-24 bg-accent-dark opacity-90 rounded-md">
          <FaPhp className="text-4xl text-white" />
        </div>
        <div className="flex items-center justify-center h-24 w-24 bg-accent-dark opacity-90 rounded-md">
          <SiTailwindcss className="text-4xl text-white" />
        </div>
        <div className="flex items-center justify-center h-24 w-24 bg-accent-dark opacity-90 rounded-md">
          <FaBootstrap className="text-4xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default MySkills;
