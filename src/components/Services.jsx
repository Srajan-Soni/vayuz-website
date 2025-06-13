import React, { useState } from "react";

const Services = () => {
  const [accordianData, setAccordianData] = useState([
    {
      name: "Flutter App Development",
      description:
        "Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform - faster and easier than ever before. Ready to revolutionize your app experience? Let's get started today!",
      link: "#flutter-app-development",
    },
    {
      name: "Customize & Integration",
      description:
        "Transform your online presence with our Web Development services. From stunning designs to seamless functionality, we create websites that captivate and convert. Let's build your digital success story together!",
      link: "#web-development",
    },
    {
      name: "Testing and Quality Assurance",
      description:
        "Ensure your app's success with our comprehensive Testing and Quality Assurance services. We meticulously test every aspect of your application to deliver a flawless user experience. Let's elevate your app's quality together!",
      link: "#testing-and-quality-assurance",
    },
    {
      name: "Maintenance and Support",
      description:
        "Keep your app running smoothly with our Maintenance and Support services. We provide ongoing updates, bug fixes, and technical assistance to ensure your application remains top-notch. Let's keep your app at its best!",
      link: "#maintenance-and-support",
    },
    {
      name: "Consulting and Training",
      description:
        "Empower your team with our Consulting and Training services. We offer expert guidance and hands-on training to help you master Flutter development. Let's enhance your skills and take your projects to the next level!",
      link: "#consulting-and-training",
    },
    {
      name: "Migration and Upgrades",
      description:
        "Stay ahead of the curve with our Migration and Upgradation services. We help you seamlessly transition to the latest technologies and frameworks, ensuring your app remains competitive. Let's future-proof your application together!",
      link: "#migration-and-upgradation",
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="my-5 w-full h-[732] flex flex-col items-center justify-center p-12">
      <div className="w-full  flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold font-serif ">
          Our Dynamic Services Suite!
        </h1>
        <h1 className="text-2xl font-sans my-2 text-gray-400">
          Embrace Innovation: Lets create together!
        </h1>
        <p className="text-gray-400 my-2">
          Step into innovation! Explore our range of services and let's create
          something extraordinary together. Your vision, our expertise. Let's
          begin!
        </p>
      </div>
      <div className="w-full h-full flex justify-center items-center mt-10">
        <div className="w-1/2 h-[500] flex flex-col gap-4 p-4">
          {accordianData.map((item, index) => (
            <div
              key={index}
              className="w-full h-fit bg-gray-800 p-4  rounded-lg shadow-lg"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-xl font-semibold text-white">
                  {item.name}
                </h2>
                <span className="text-gray-400">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-96 mt-2" : "max-h-0"
                } text-gray-300`}
              >
                <div
                  className={`${
                    activeIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  } transition-all duration-300`}
                >
                  <p>{item.description}</p>
                  <a
                    href={item.link}
                    className="text-cyan-400 hover:underline block mt-2"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/3 h-[500px] ">
          <img src="/phone.jpg" alt="phone bg" className="p-4" />
        </div>
      </div>
    </div>
  );
};

export default Services;
