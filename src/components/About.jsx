import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className=" text-4xl font-bold inline border-b-4 border-red-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Mohd Kaif Khan, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              With 1.5+ years of experience, I led the delivery of the Loginext
              product, aiding users in asset management during relocations. This
              included spearheading analytics, advanced filtering, admin panel
              development, and payment processing modules. I prioritized
              security by incorporating OAuth and two-factor authentication into
              reusable code components. Additionally, I seamlessly integrated
              various authentication APIs and social login methods using access
              tokens. Leveraging Node, Express, and Redux, I built a robust
              backend for complex state management. Embracing Agile
              methodologies, I consistently achieved a 95% on-time delivery
              rate, ensuring timely project completion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
