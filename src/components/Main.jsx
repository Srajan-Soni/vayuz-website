import React from "react";
import Header from "./Header";
import FlutterDawn from "./FlutterDawn";

const Main = () => {
  return (
    <div className="flex-1 min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#0f0f0f] to-[#004d4d]/40 text-white">
      <Header />

      <div className="flex w-full justify-between items-center mt-4 px-12 pt-6">
        <div className="flex flex-col w-1/2 pr-12 mb-5 space-y-4">
          <h1 className="text-4xl font-bold font-serif leading-tight mb-4">
            Unlock the Potential <br /> of Flutter
          </h1>
          <p className="text-gray-400  mb-6 text-2xl max-w-md">
            Your Premier Partner for Cross-Platform App Excellence!
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 cursor-pointer text-white mt-5 font-semibold px-6 py-3 rounded-full w-fit text-sm">
            UPGRADE YOUR TECH
          </button>
        </div>

        <div className="w-2/3 p-4">
          <img
            src="/code-bg.png"
            alt="Flutter Code"
            className="rounded-xl w-full h-auto max-h-[500px] object-cover shadow-lg"
          />
        </div>
      </div>
        <FlutterDawn />
    </div>
  );
};

export default Main;
