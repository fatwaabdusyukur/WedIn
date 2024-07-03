import React from "react";
import PriceCard from "../components/card/price-card/PriceCard";

export default function Price() {
  const paymentIcons = [
    "alfamart",
    "indomaret",
    "bni",
    "bca",
    "bri",
    "bitcoin",
    "ovo",
    "kredivo",
    "paypal",
    "mastercard",
    "visa",
    "qris",
  ];

  return (
    <div className="bg-shade-100">
      <div className="py-10 px-5 md:px-10 xl:px-20">
        <h1 className="font-bold text-5xl font-roboto text-green-600 mt-10">
          Purchases
        </h1>
        <div className="flex items-center justify-between flex-wrap gap-2 w-full md:items-start xl:w-3/4 mt-5">
          <p className="md:basis-1/3 lg:basis-1/2">
            Find the Right Choice of Digital Invitation Packages to Perfect
            Every Detail of Your Special Event, Starting from Free to Luxurious
            Packages with Exclusive Services!
          </p>
          <div className="flex flex-col">
            <span className="inline-flex items-center">
              <svg viewBox="0 0 72 72" width="30px" fill="#000000">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="color">
                    {" "}
                    <path
                      fill="#b1cc33"
                      d="m61.5 23.3-8.013-8.013-25.71 25.71-9.26-9.26-8.013 8.013 17.42 17.44z"
                    ></path>{" "}
                  </g>{" "}
                  <g id="line">
                    {" "}
                    <path
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      d="m10.5 39.76 17.42 17.44 33.58-33.89-8.013-8.013-25.71 25.71-9.26-9.26z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              20 Invitation Templates
            </span>
            <span className="inline-flex items-center">
              <svg viewBox="0 0 72 72" width="30px" fill="#000000">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="color">
                    {" "}
                    <path
                      fill="#b1cc33"
                      d="m61.5 23.3-8.013-8.013-25.71 25.71-9.26-9.26-8.013 8.013 17.42 17.44z"
                    ></path>{" "}
                  </g>{" "}
                  <g id="line">
                    {" "}
                    <path
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      d="m10.5 39.76 17.42 17.44 33.58-33.89-8.013-8.013-25.71 25.71-9.26-9.26z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              Free to Luxury
            </span>
            <span className="inline-flex items-center">
              <svg viewBox="0 0 72 72" width="30px" fill="#000000">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="color">
                    {" "}
                    <path
                      fill="#b1cc33"
                      d="m61.5 23.3-8.013-8.013-25.71 25.71-9.26-9.26-8.013 8.013 17.42 17.44z"
                    ></path>{" "}
                  </g>{" "}
                  <g id="line">
                    {" "}
                    <path
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      d="m10.5 39.76 17.42 17.44 33.58-33.89-8.013-8.013-25.71 25.71-9.26-9.26z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              Music and Video
            </span>
          </div>
          <div className="flex flex-col">
            <span className="inline-flex items-center">
              <svg viewBox="0 0 72 72" width="30px" fill="#000000">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="color">
                    {" "}
                    <path
                      fill="#b1cc33"
                      d="m61.5 23.3-8.013-8.013-25.71 25.71-9.26-9.26-8.013 8.013 17.42 17.44z"
                    ></path>{" "}
                  </g>{" "}
                  <g id="line">
                    {" "}
                    <path
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      d="m10.5 39.76 17.42 17.44 33.58-33.89-8.013-8.013-25.71 25.71-9.26-9.26z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              1 Month to Unlimited
            </span>
            <span className="inline-flex items-center">
              <svg viewBox="0 0 72 72" width="30px" fill="#000000">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="color">
                    {" "}
                    <path
                      fill="#b1cc33"
                      d="m61.5 23.3-8.013-8.013-25.71 25.71-9.26-9.26-8.013 8.013 17.42 17.44z"
                    ></path>{" "}
                  </g>{" "}
                  <g id="line">
                    {" "}
                    <path
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      d="m10.5 39.76 17.42 17.44 33.58-33.89-8.013-8.013-25.71 25.71-9.26-9.26z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              Event Information Included
            </span>
            <span className="inline-flex items-center">
              <svg viewBox="0 0 72 72" width="30px" fill="#000000">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="color">
                    {" "}
                    <path
                      fill="#b1cc33"
                      d="m61.5 23.3-8.013-8.013-25.71 25.71-9.26-9.26-8.013 8.013 17.42 17.44z"
                    ></path>{" "}
                  </g>{" "}
                  <g id="line">
                    {" "}
                    <path
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      d="m10.5 39.76 17.42 17.44 33.58-33.89-8.013-8.013-25.71 25.71-9.26-9.26z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              24/7 Tech Support
            </span>
          </div>
        </div>
      </div>
      <div className="mt-7 mb-5 flex flex-wrap justify-center gap-3">
        <PriceCard color="purple" />
        <PriceCard color="blue" />
        <PriceCard color="green" />
        <PriceCard color="yellow" />
      </div>
      <div className="p-5 flex flex-col items-center">
        <h5 className="text-3xl text-shade-600 font-bold text-center">
          Available payment methods
        </h5>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-items-center gap-3 w-[60%] mt-5">
          {paymentIcons.map((icon, index) => (
            <div
              className="p-5 rounded border border-shade-300 flex items-center justify-center w-24 h-16"
              key={index}
            >
              <img
                src={`../img/icon/${icon}.svg`}
                alt={icon}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
