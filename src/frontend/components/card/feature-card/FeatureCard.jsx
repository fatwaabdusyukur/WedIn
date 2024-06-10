import React from "react";

export default function FeatureCard() {
  return (
    <div className="w-72 rounded shadow bg-white flex items-center cursor-pointer">
      <div className="p-2">
        <svg viewBox="0 0 24 24" width="42px" fill="none">
          {/* SVG content */}
        </svg>
      </div>
      <div className="p-2">
        <h4 className="text-base font-normal font-nunito">Time</h4>
        <p className="text-sm font-light font-roboto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          quod?
        </p>
      </div>
    </div>
  );
}
