import React from "react";

export default function SampleCard() {
  return (
    <div className="relative overflow-hidden rounded-md md:w-72 md:h-52 lg:w-96 lg:h-64 hover:shadow-xl cursor-pointer">
      <img
        src="https://api.our-wedding.link/uploads/7783a1d0-f32c-11ee-9c9e-ebdb25c4c02a.jpg"
        className="rounded-md w-full h-full"
      />
      <span className="absolute -bottom-[.15rem] left-0 py-2 px-5 bg-gradient-to-r from-yellow-300 to-yellow-600 rounded-tr-full text-white font-bold">
        Luxury
      </span>
    </div>
  );
}
