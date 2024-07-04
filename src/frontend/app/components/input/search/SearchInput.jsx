import React from "react";

export default function SearchInput() {
  return (
    <div className="flex items-center">
      <input
        type="text"
        className="w-full h-10 px-3 rounded-l-md border font-roboto text-shade-500 placeholder:text-shade-500 focus:outline-none"
        placeholder="search..."
      />
      <button className="bg-shade-300 hover:bg-shade-500 hover:stroke-shade-300 text-white px-3 py-2 rounded-r-md stroke-shade-600">
        <svg viewBox="0 0 24 24" width="24px" fill="none" transform="rotate(0)">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  );
}
