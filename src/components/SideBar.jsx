import React from "react";

const SideBar = () => {
  return (
    <div className=" w-64 bg-black text-white p-4 border-r-1 border-gray-600">
      <div className="flex items-center justify-center h-16 mb-6">
        <img src="/vayuz-logo2.png" alt="Logo" className="p-4" />
      </div>

      <div className="flex flex-col mx-2 my-4">
        <button className="inline-block p-[2px] rounded-full bg-gradient-to-r from-green-400 via-pink-500 to-yellow-500">
          <span className="block rounded-full bg-black text-white px-8 py-2 text-lg font-medium">
            CONTACT US
          </span>
        </button>
      </div>

      <div className="flex flex-col items-start justify-center h-[300px] space-y-6 ml-6 mt-8">
        <a
          href="#"
          className="text-gray-300 font-semibold hover:text-white transition"
        >
          App Development
        </a>
        <a
          href="#"
          className="text-gray-300 font-semibold hover:text-white transition"
        >
          Challenges
        </a>
        <a
          href="#"
          className="text-gray-300 font-semibold hover:text-white transition"
        >
          Hire Developer
        </a>
        <a
          href="#"
          className="text-gray-300 font-semibold hover:text-white transition"
        >
          Community
        </a>
      </div>


        <div className="flex flex-col items-center justify-center  space-y-6  mt-8">
        <img src="/assets.png" className="w-full border rounded-md "></img>
        <span className="text-gray-300 font-semibold hover:text-white transition">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vitae quos, totam cumque eaque quam
            </span>
        </div>


    </div>
    
  );
};

export default SideBar;
