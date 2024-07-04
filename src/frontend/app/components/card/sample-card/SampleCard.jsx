import React from "react";

export default function SampleCard({ size }) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-md hover:shadow-xl cursor-pointer " +
        size
      }
    >
      <img
        src="/assets/img/banner/no-templates.png"
        className="rounded-md w-full h-full"
      />
      <span className="absolute -bottom-[.15rem] left-0 py-2 px-5 bg-gradient-to-r from-yellow-300 to-yellow-600 rounded-tr-full text-white font-bold">
        Luxury
      </span>
    </div>
  );
}
