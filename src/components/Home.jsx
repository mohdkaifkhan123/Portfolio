import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          MOHD KAIF KHAN
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a seasoned full-stack developer with expertise in crafting
          cutting-edge digital interfaces and applications. My primary focus
          lies in architecting and developing responsive full-stack web
          applications that leverage modern technologies and best practices. I
          specialize in designing and implementing robust backend systems,
          efficient APIs, and intuitive frontend interfaces, ensuring seamless
          user experiences across various devices and platforms. My proficiency
          spans across a wide array of programming languages, frameworks, and
          tools, enabling me to deliver exceptional digital solutions tailored
          to meet diverse client needs and industry standards.
        </p>
        <div>
          <Link to='work'>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
