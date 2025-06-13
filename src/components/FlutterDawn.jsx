import React from "react";

const FlutterDawn = () => {
  return (
    <div className="flex w-full justify-between items-center mt-16 px-12 pb-12">
      <div className="w-[256px] h-[84px]">
        <h2 className="text-white text-4xl font-extrabold font-serif leading-tight">
          Flutter's <br /> Dawn
        </h2>
        <p className="text-white font-medium mt-2">History of flutter</p>
      </div>

      <div className="w-[405px] h-[156px] pr-8">
        <p className="text-gray-300 text-base ">
          Uncover the fascinating story of Flutter in{" "}
          <strong>‘Flutter’s Dawn: History of Flutter.’</strong> From humble
          origins to global acclaim, delve into its captivating narrative.
          Explore milestones, triumphs, and challenges. Whether tech enthusiast
          or curious mind, join us on this captivating journey!{" "}
          <a href="#" className="text-cyan-400 font-bold hover:underline">
            Click to begin!
          </a>
        </p>
      </div>

      <div className="w-fit mt-6">
        <button className=" flex justify-around cursor-pointer bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full text-sm">
          <span>BEGIN</span> 
          <span className="mx-2 mt-1 h-4"><img src="/top-right.png" className="h-3"></img></span>
        </button>
      </div>
    </div>
  );
};

export default FlutterDawn;
