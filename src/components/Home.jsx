import ProfilePic from "../images/profile-pic.jpg";
import { GrGithub } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
import Resume from "../files/apoorvgusain-resume.pdf";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Home = () => {
  return (
    <section
      id="home"
      className="w-full px-6 md:px-24 flex md:flex-row flex-col-reverse py-10"
    >
      <div className="w-full md:w-1/2 text-white py-10">
        <p>React Developer</p>
        <h1 className="md:text-6xl text-4xl font-bold py-4">
          Hello, I&apos;m <span className="text-accent">Apoorv Gusain</span>
        </h1>
        <p className="text-justify">
          I excel in building and managing websites. I enjoy adapting to new
          frameworks and technologies. I love enhancing my skills to deliver the
          best solutions.
        </p>
        <div className="link-btns py-4 flex">
          <a download="apoorvgusain.pdf" href={Resume}>
            <button className="flex rounded-3xl border-accent border-2 py-2 px-5 capitalize text-accent">
              Download CV
              <MdOutlineFileDownload className="text-xl ml-2" />
            </button>
          </a>
          <div className="flex px-4">
            <a
              href="https://www.linkedin.com/in/apoorvgusain/"
              target="new"
              className="rounded-full border-accent border-2 my-auto mx-1"
            >
              <GrLinkedinOption className="text-accent text-2xl p-1" />
            </a>
            <a
              href="https://github.com/apoorvgusain"
              target="new"
              className="rounded-full border-accent border-2 my-auto mx-1"
            >
              <GrGithub className="text-accent text-2xl p-1" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative flex justify-center items-center py-14">
        {/* Animated Circle */}
        <motion.svg
          className="w-9/12 md:w-9/12 lg:w-3/5  h-auto  absolute "
          fill="transparent"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <motion.circle
            cx="150"
            cy="150"
            r="140"
            stroke="#00ff99 "
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
        {/* Profile Picture */}
        <img
          src={ProfilePic}
          className="w-2/3 md:w-2/3 lg:w-1/2 rounded-full z-10 "
        />
      </div>
    </section>
  );
};

export default Home;
