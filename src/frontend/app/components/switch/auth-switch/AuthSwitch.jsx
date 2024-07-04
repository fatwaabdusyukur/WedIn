import React, { useState } from "react";

export default function AuthSwitch({ onHandleSwitch }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onHandleSwitch(!isChecked);
  };

  return (
    <div className="flex items-center justify-center absolute -top-5 left-1/4 w-1/2">
      <input
        id="switcher"
        type="checkbox"
        className="hidden"
        onChange={() => handleToggle()}
        checked={isChecked}
      />
      <label
        htmlFor="switcher"
        className="relative flex justify-center items-center cursor-pointer rounded-full p-3 w-36 h-10 bg-gradient-to-tr from-orange-400 to-pink-400"
      >
        <span
          className={
            "absolute top-1/2 left-1 -translate-y-1/2 rounded-full bg-gray-200/80 w-7 h-7 p-2 flex justify-center items-center transition-transform ease-in-out duration-300 " +
            (isChecked ? "translate-x-[6.7rem]" : "")
          }
        >
          <span className="flex justify-center items-center w-7 h-7">
            {isChecked ? (
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gray-500/80">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M11.41,13H22a10,10,0,1,1,0-2H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.32.37.37,0,0,0,0,.14.85.85,0,0,0,0,.5.37.37,0,0,0,0,.14,1,1,0,0,0,.21.32l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
                </g>
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-7 h-7 fill-gray-500/80"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M3.30652 11C3.80274 6.63843 7.50566 3.25 12 3.25C16.8325 3.25 20.75 7.16751 20.75 12C20.75 16.8325 16.8325 20.75 12 20.75C7.50566 20.75 3.80274 17.3616 3.30652 13H10.5858L9.29289 14.2929C8.90237 14.6834 8.90237 15.3166 9.29289 15.7071C9.68342 16.0976 10.3166 16.0976 10.7071 15.7071L13.7071 12.7071C14.0976 12.3166 14.0976 11.6834 13.7071 11.2929L10.7071 8.29289C10.3166 7.90237 9.68342 7.90237 9.29289 8.29289C8.90237 8.68342 8.90237 9.31658 9.29289 9.70711L10.5858 11H3.30652Z"></path>
                </g>
              </svg>
            )}
          </span>
        </span>
        <span
          className={
            "font-bold font-marcellus text-lg text-white " +
            (isChecked ? "mr-2" : "ml-2")
          }
        >
          {isChecked ? "Register" : "Login"}
        </span>
      </label>
    </div>
  );
}
