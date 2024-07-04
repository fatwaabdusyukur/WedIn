import React from "react";
import clsx from "classnames";

export default function PriceCard({ color }) {
  return (
    <div className="w-52 md:w-40 lg:w-56 rounded-md">
      <div
        className={clsx(
          `rounded p-2 flex flex-col items-center`,
          `bg-${color}-400`
        )}
      >
        <h1 className="text-center font-bold text-white">FREE</h1>
        <div className="flex justify-center mt-1">
          <h3 className="text-base text-white">$</h3>
          <h2 className="font-bold text-4xl text-white">5</h2>
        </div>
        <p
          className={clsx(
            `text-sm font-light text-center mt-2 mb-10`,
            `text-${color}-100`
          )}
        >
          This package is suitable for simple invitations at no cost, ideal for
          basic needs
        </p>
        <button
          className={clsx(
            `p-1 rounded-sm text-white text-sm font-semibold w-32`,
            `bg-${color}-600`
          )}
        >
          BUY
        </button>
      </div>
      <div>
        <div className={clsx(`border-b pb-2 mt-2`, `border-${color}-800`)}>
          <h4 className={clsx(`text-${color}-800`)}>Free includes</h4>
          <p className={clsx(`text-sm`, `text-${color}-400`)}>
            All of these are great features:
          </p>
        </div>
        <ul className="p-1 list-inside list-disc text-gray-500">
          <li className="text-sm">Lorem, ipsum dolor</li>
          <li className="text-sm">Lorem, ipsum dolor</li>
          <li className="text-sm">Lorem, ipsum dolor</li>
          <li className="text-sm">Lorem, ipsum dolor</li>
          <li className="text-sm">Lorem, ipsum dolor</li>
          <li className="text-sm">Lorem, ipsum dolor</li>
        </ul>
      </div>
    </div>
  );
}
