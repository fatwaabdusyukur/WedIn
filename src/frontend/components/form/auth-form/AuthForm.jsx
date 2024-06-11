import React, { useState } from "react";
import AuthSwitch from "../../switch/auth-switch/AuthSwitch";

export default function AuthForm() {
  const [isSwitch, setSwitch] = useState(false);

  const handleSwitch = (value) => setSwitch(value);

  return (
    <form className="relative w-72 sm:w-96 bg-gray-100/90 rounded p-3 mx-4 sm:mx-0">
      <AuthSwitch onHandleSwitch={handleSwitch} />
      <div className="mt-7 flex flex-col gap-4 ">
        {isSwitch ? (
          <>
            <div className="inline-flex items-center justify-evenly gap-2">
              <label
                className="font-nunito font-light basis-1/2 sm:basis-1/4"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                className="w-full p-1 text-gray-600 font-roboto focus:outline-none focus:ring focus:ring-blue-400 rounded"
                name="email"
                id="email"
              />
            </div>
            <div className="inline-flex items-center justify-evenly gap-2">
              <label
                htmlFor="uname"
                className="font-nunito font-light basis-1/2 sm:basis-1/4"
              >
                Username
              </label>
              <input
                type="text"
                name="uname"
                id="uname"
                className="p-1 w-full text-gray-600 font-roboto focus:outline-none focus:ring focus:ring-blue-400 rounded"
              />
            </div>
            <div className="inline-flex items-center justify-evenly gap-2">
              <div className="basis-1/2">
                <label
                  htmlFor="pwd1"
                  className="font-nunito font-light text-sm sm:text-base"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="pwd1"
                  id="pwd1"
                  className="p-1 w-full text-gray-600 font-roboto focus:outline-none focus:ring focus:ring-blue-400 rounded"
                />
              </div>
              <div className="basis-1/2">
                <label
                  htmlFor="pwd2"
                  className="font-nunito font-light text-sm sm:text-base"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="pwd2"
                  id="pwd2"
                  className="p-1 w-full text-gray-600 font-roboto focus:outline-none focus:ring focus:ring-blue-400 rounded"
                />
              </div>
            </div>
            <button className="mt-3 rounded bg-blue-300 hover:bg-blue-400 text-white font-bold font-nunito p-2 w-3/4 mx-auto">
              Sign Up
            </button>
          </>
        ) : (
          <>
            <div className="inline-flex items-center justify-evenly gap-2">
              <label
                className="font-nunito font-light basis-2/5"
                htmlFor="uname"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full p-1 text-gray-600 font-roboto focus:outline-none focus:ring focus:ring-blue-400 rounded"
                name="uname"
                id="uname"
              />
            </div>
            <div className="inline-flex items-center justify-evenly gap-2">
              <label htmlFor="pwd" className="font-nunito font-light basis-2/5">
                Password
              </label>
              <input
                type="password"
                name="pwd"
                id="pwd"
                className="p-1 w-full text-gray-600 font-roboto focus:outline-none focus:ring focus:ring-blue-400 rounded"
              />
            </div>
            <button className="mt-3 rounded bg-blue-300 hover:bg-blue-400 text-white font-bold font-nunito p-2 w-3/4 mx-auto">
              Sign In
            </button>
          </>
        )}
      </div>
    </form>
  );
}
