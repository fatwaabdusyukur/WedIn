import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const handleClick = () => setMenu(!menu);

  return (
    <nav className="bg-white px-5 py-2 sm:flex sm:items-center sm:justify-between">
      <div className="flex items-center gap-2 w-full">
        <img
          src="/assets/img/logos/logo.png"
          alt="logo"
          className="w-24 h-10"
        />
        <button
          onClick={handleClick}
          className="sm:hidden ml-auto p-2 rounded bg-pink-400/90 text-gray-700 hover:bg-pink-500"
        >
          {!menu ? (
            <svg
              viewBox="0 0 24 24"
              width="20px"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 12H20M4 8H20M4 16H12"
                  stroke="#f7f7f7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          ) : (
            <svg
              viewBox="0 0 100 100"
              width="20px"
              height="20px"
              version="1.1"
              fill="#f7f7f7"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  style={{ fill: "#f7f7f7", stroke: "#222222", strokeWidth: 4 }}
                  d="M 20,4 3,21 33,50 3,80 20,97 49,67 79,97 95,80 65,50 95,20 80,4 50,34 z"
                ></path>{" "}
              </g>
            </svg>
          )}
        </button>
      </div>
      <ul
        className={
          "sm:flex sm:list-none sm:items-center sm:gap-5 sm:text-gray-700 " +
          (menu ? "flex flex-col items-center gap-3" : "hidden")
        }
      >
        <li className="font-semibold cursor-pointer hover:text-yellow-300">
          <Link to={`/`}>Home</Link>
        </li>
        <li className="font-semibold cursor-pointer hover:text-yellow-300">
          <Link to={`/templates`}>Template</Link>
        </li>
        <li className="font-semibold cursor-pointer hover:text-yellow-300">
          <Link to={`/price`}>Price</Link>
        </li>
        <li className="cursor-pointer font-semibold p-2 rounded bg-pink-400/90 hover:bg-pink-500">
          <Link to={`/auth`}>Login/register</Link>
        </li>
      </ul>
    </nav>
  );
}
