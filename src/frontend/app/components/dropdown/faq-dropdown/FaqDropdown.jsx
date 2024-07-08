import React, { useState } from "react";

export default function FaqDropdown({ title, content }) {
  const [status, setStatus] = useState(false);
  const handleChange = () => setStatus(!status);

  return (
    <div
      onClick={() => handleChange()}
      className={`rounded p-3 w-[90%] md:w-[60%] lg:w-1/2 cursor-pointer ${
        status ? "bg-blue-500" : "bg-gray-500 hover:bg-blue-500"
      }`}
    >
      <div className="flex justify-between">
        <p className="text-white font-bold">{title}</p>
        <button
          className="fill-white stroke-white"
          onClick={() => handleChange()}
        >
          {status ? (
            <svg width="20px" viewBox="0 0 24 24">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6 12L18 12"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          ) : (
            <svg width="20px" viewBox="0 0 24 24">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"></path>
              </g>
            </svg>
          )}
        </button>
      </div>
      {status && (
        <p className="text-white pt-2 px-5 text-pretty text-sm">{content}</p>
      )}
    </div>
  );
}
