import React from "react";
import { useState } from "react";

const SideBar = () => {
  const [lists, setlists] = useState([
    { name: "App Development", link: "#app-development" },
    { name: "Challanges", link: "#challanges" },
    { name: "Hire Developer", link: "#hire-developer" },
    { name: "Community", link: "#community" },
  ]);
  return (
    <div className=" w-64 bg-neutral-900 text-white p-4 border-r-1 border-gray-600">
      <div className="flex items-center justify-center h-16 mb-6">
        <img src="/vayuz-logo2.png" alt="Logo" className="p-4" />
      </div>

      <div className="flex flex-col mx-2 my-4">
        <button className="relative cursor-pointer group inline-block p-[2px] rounded-full bg-gradient-to-r from-green-400 via-pink-500 to-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-300/30">
          <a
            href="#contactUs"
            className="block rounded-full bg-black text-white px-8 py-2 text-lg font-medium transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-yellow-500 group-hover:text-black"
          >
            CONTACT US
          </a>
        </button>
      </div>

      <div className="flex flex-col items-start justify-center h-[300px] space-y-6 ml-6 mt-8">
        {lists.map((items, index) => (
          <div key={index} className="flex items-center space-x-2">
            <a
              href={items.link}
              className="text-gray-300 font-semibold hover:text-white hover:font-bold transition"
            >
              {items.name}
            </a>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center  space-y-6  mt-8">
        <img src="/assets.png" className="w-full border rounded-md "></img>
        <span className="text-gray-300 font-semibold hover:text-white transition">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          vitae quos, totam cumque eaque quam
        </span>
      </div>
    </div>
  );
};

export default SideBar;
