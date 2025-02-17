/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import WashedSummary from "./WashedSummary";
import WashedMovie from "./WashedMovie";

const WatchedData = ({
  isOpen2,
  setIsOpen2,
  children,
}) => {
  return (
    <div className="w-[42rem] max-w-[42rem] bg-[#2b3035] rounded-lg  relative p-4 text-white">
      <button
        className="absolute top-2 right-2 h-6 w-6 rounded-full border-none bg-[#212529] text-text font-bold text-lg flex items-center justify-center cursor-pointer z-50"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>

      {isOpen2 && children}
    </div>
  );
};

export default WatchedData;
