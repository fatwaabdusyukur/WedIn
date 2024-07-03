import React from "react";

export default function VerticalRadio() {
  return (
    <div className="flex flex-col my-2">
      <div className="flex items-center">
        <input
          type="radio"
          name="type"
          id="basic"
          value="basic"
          className="appearance-none h-5 w-5 border-2 border-gray-400 rounded-sm relative checked:after:content-['✔'] checked:after:text-shade-400 checked:after:absolute checked:after:-top-1 checked:after:-left-1 checked:after:text-center checked:after:w-full checked:after:h-full"
        />
        <label htmlFor="basic" className="ml-2">
          Basic
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          name="type"
          id="economy"
          value="economy"
          className="appearance-none h-5 w-5 border-2 border-gray-400 rounded-sm relative checked:after:content-['✔'] checked:after:text-shade-400 checked:after:absolute checked:after:-top-1 checked:after:-left-1 checked:after:text-center checked:after:w-full checked:after:h-full"
        />
        <label htmlFor="economy" className="ml-2">
          Economy
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          name="type"
          id="premium"
          value="premium"
          className="appearance-none h-5 w-5 border-2 border-gray-400 rounded-sm relative checked:after:content-['✔'] checked:after:text-shade-400 checked:after:absolute checked:after:-top-1 checked:after:-left-1 checked:after:text-center checked:after:w-full checked:after:h-full"
        />
        <label htmlFor="premium" className="ml-2">
          Premium
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          name="type"
          id="luxury"
          value="luxury"
          className="appearance-none h-5 w-5 border-2 border-gray-400 rounded-sm relative checked:after:content-['✔'] checked:after:text-shade-400 checked:after:absolute checked:after:-top-1 checked:after:-left-1 checked:after:text-center checked:after:w-full checked:after:h-full"
        />
        <label htmlFor="luxury" className="ml-2">
          Luxury
        </label>
      </div>
    </div>
  );
}
