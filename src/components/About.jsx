import AboutProfilePic from "../images/profile-pic-two.png";
import { PiMedalFill } from "react-icons/pi";
import { PiGraduationCapFill } from "react-icons/pi";

import MySkills from "./MySkills";
const About = () => {
  return (
    <section id="about" className="w-full px-6  md:px-24 md:py-16">
      <div className="headings text-center">
        <p className="text-accent text-sm py-4">Get To Know More</p>
        <h2 className="text-4xl font-bold text-white">About Me</h2>
      </div>
      <div className="about-content  pt-20 pb-15 w-full flex  md:justify-evenly md:flex-row flex-col ">
        <div className="md:w-2/5  w-full  ">
          <img
            src={AboutProfilePic}
            className="  border rounded-xl bg-accent  opacity-80 md:w-4/5 w-5/6"
          />
        </div>
        <div className="md:w-3/5 w-full  py-10 md:py-0 ">
          <div className="flex md:justify-between flex-col md:flex-row gap-5">
            <div className="border-2 border-accent rounded-3xl md:px-16 py-10 text-white text-center ">
              <PiMedalFill className="md:text-4xl text-accent mx-auto text-2xl" />
              <p className="font-bold text-accent md:text-2xl text-lg">
                Experience
              </p>
              <p>3 Years</p>
              <p>React Developer</p>
            </div>
            <div className="border-2 border-accent rounded-3xl md:px-16 py-10 text-white text-center ">
              <PiGraduationCapFill className="md:text-4xl text-accent mx-auto text-2xl" />
              <p className="font-bold text-accent md:text-2xl text-lg">
                Education
              </p>
              <p>BCA (2016)</p>
              <p>MCA (2021)</p>
            </div>
          </div>

          <div>
            <p className="text-white py-10 md:text-justify">
              I am a React Developer with specialized experience in React,
              Redux, Javascript ES6 and PHP. My expertise includes building
              large-scale web applications, crafting responsive user interfaces,
              and overcoming design constraints across cross-browser platforms.
              I possess a strong command of modern web technologies and have a
              proven track record in developing high-performance, scalable
              applications.
            </p>
          </div>
        </div>
      </div>
      <MySkills />
    </section>
  );
};

export default About;
