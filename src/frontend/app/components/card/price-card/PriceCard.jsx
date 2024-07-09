import React from "react";
import colors from "./colors.json";

export default function PriceCard({ type, price, offers, description, color }) {
  const { light, semibold, bold, extrabold } = colors[color];

  return (
    <div className="w-52 md:w-40 lg:w-56 rounded-md">
      <div
        className="rounded p-2 flex flex-col items-center justify-between h-[15rem] md:h-[17rem] lg:h-[14rem]"
        style={{ backgroundColor: semibold }}
      >
        <h1 className="text-center font-bold text-white text-lg font-marcellus">
          {type}
        </h1>
        <div className="flex justify-center">
          <h3 className="text-base text-white font-nunito">$</h3>
          <h2 className="font-bold text-4xl text-white">{price}</h2>
        </div>
        <p
          className="text-sm font-light text-center mt-2 mb-10 font-roboto text-pretty"
          style={{ color: light }}
        >
          {description}
        </p>
        <button
          className="p-1 rounded-sm text-white text-sm font-semibold w-fit px-10"
          style={{ backgroundColor: bold }}
        >
          BUY
        </button>
      </div>
      <div>
        <div className="border-b pb-2 mt-2" style={{ borderColor: extrabold }}>
          <h4 style={{ color: extrabold }}>Free includes</h4>
          <p className="text-sm" style={{ color: bold }}>
            All of these are great features:
          </p>
        </div>
        <ul className="p-1 list-inside list-disc text-pretty text-gray-500">
          {offers.map((offer, index) => (
            <li className="text-sm" key={index}>
              {offer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
