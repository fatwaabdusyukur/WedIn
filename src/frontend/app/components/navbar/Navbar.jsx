import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchGet } from "../../services/fetch-data";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const handleClick = () => setMenu(!menu);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await fetchGet('protected');
        if (data) {
          setUser (data);
        }
      } catch (error) {
        if (error.status !== 401) console.error('Failed to retrieve data user!', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <nav className="bg-white px-5 py-2 sm:flex sm:items-center sm:justify-between">
      <div className="flex items-center gap-2 w-full">
        <Link to="/" className="cursor-pointer">
          <img
            src="/assets/img/logos/logo.png"
            alt="logo"
            className="w-24 h-10"
          />
        </Link>
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
        <li className={`cursor-pointer font-semibold p-2 rounded ${user ? 'bg-pink-200/90 hover:bg-pink-400' : 'bg-pink-400/90 hover:bg-pink-500'}`}>
          {user ? (<Link to={`/dashboard`}>
            <div className="inline-flex items-center">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 1024 1024"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M691.573 338.89c-1.282 109.275-89.055 197.047-198.33 198.331-109.292 1.282-197.065-90.984-198.325-198.331-0.809-68.918-107.758-68.998-106.948 0 1.968 167.591 137.681 303.31 305.272 305.278C660.85 646.136 796.587 503.52 798.521 338.89c0.811-68.998-106.136-68.918-106.948 0z" fill="#4A5699"></path><path d="M294.918 325.158c1.283-109.272 89.051-197.047 198.325-198.33 109.292-1.283 197.068 90.983 198.33 198.33 0.812 68.919 107.759 68.998 106.948 0C796.555 157.567 660.839 21.842 493.243 19.88c-167.604-1.963-303.341 140.65-305.272 305.278-0.811 68.998 106.139 68.919 106.947 0z" fill="#C45FA0"></path><path d="M222.324 959.994c0.65-74.688 29.145-144.534 80.868-197.979 53.219-54.995 126.117-84.134 201.904-84.794 74.199-0.646 145.202 29.791 197.979 80.867 54.995 53.219 84.13 126.119 84.79 201.905 0.603 68.932 107.549 68.99 106.947 0-1.857-213.527-176.184-387.865-389.716-389.721-213.551-1.854-387.885 178.986-389.721 389.721-0.601 68.991 106.349 68.933 106.949 0.001z" fill="#E5594F"></path></g></svg>
              <p>{ user.username }</p>
            </div>
          </Link>) : ( <Link to={`/auth`}>Login/register</Link>)}
        </li>
      </ul>
    </nav>
  );
}
