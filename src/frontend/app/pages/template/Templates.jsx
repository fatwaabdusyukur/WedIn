import React from "react";
import SearchInput from "../../components/input/search/SearchInput";
import VerticalRadio from "../../components/input/radio/VerticalRadio";
import SampleCard from "../../components/card/sample-card/SampleCard";
import DoubleInput from "../../components/input/text/DoubleInput";

export default function Templates() {
  return (
    <section>
      <div className="flex flex-col justify-center sm:flex-row sm:justify-around p-5 gap-4">
        <div className="md:basis-[30%] lg:basis-[20%]">
          <SearchInput />
          <VerticalRadio />
          <DoubleInput />
        </div>
        <div className="md:basis-[65%] lg:basis-[75%]">
          <h1 className="font-roboto text-2xl">All invitation templates</h1>
          <p className="text-sm mb-5">
            These are some of the templates available:
          </p>
          <div className="flex justify-evenly flex-wrap gap-3">
            {Array.from({ length: 6 }, (_, index) => (
              <SampleCard key={index} size="md:w-52 md:h-40 lg:w-96 lg:h-64" />
            ))}
          </div>
        </div>
      </div>
      <div className="p-10 my-10 mx-0 md:mx-20 lg:mx-32 bg-green-300 md:rounded-tr-[5000px] lg:rounded-tr-full">
        <h1 className="text-3xl font-bold font-marcellus text-white md:p-5 lg:p-0">
          contact us to make your own custom invitations!
        </h1>
        <button className="bg-green-700 rounded-full p-2 text-sm text-white font-roboto font-bold mt-2 md:mt-3 lg:mt-5 inline-flex items-center gap-3 stroke-green-950 hover:bg-green-900">
          <p>Contact via whatsapp</p>
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
                d="M4 12H6.5M20 12L14 6M20 12L14 18M20 12H9.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
    </section>
  );
}
