import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getType, closeAlert } from "./logic";
import { ReactSVG } from "react-svg";

export default function Alert() {
    const dispatch = useDispatch();
    const { status, type, message } = useSelector(state => state.alert);
    const theme = getType(type);
  
    return (
      <>
        {status && (
          <div className="fixed z-10 left-0 top-0 p-8 space-y-4">
            <div className="flex w-96 shadow-lg rounded-lg">
              <div
                style={{ backgroundColor: theme.style }}
                className="py-4 px-6 rounded-l-lg flex items-center"
              >
                <ReactSVG
                  src={`data:image/svg+xml;utf8,${encodeURIComponent(theme.icon)}`}
                /> 
              </div>
              <div className="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
                <div>{message}</div>
                <button onClick={() => dispatch(closeAlert())}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current text-gray-700"
                    viewBox="0 0 16 16"
                    width="20"
                    height="20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
}