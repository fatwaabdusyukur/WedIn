import React from "react";
import FeatureCard from "../components/card/feature-card/FeatureCard";
import SampleCard from "../components/card/sample-card/SampleCard";
import FaqDropdown from "../components/dropdown/faq-dropdown/FaqDropdown";
import Jumbotron from "../components/jumbotron/Jumbotron";

export default function Home() {
  return (
    <>
      <Jumbotron styles={{ image: "../img/jumbotron.jpg", height: 240 }}>
        <h1 className="inline-flex flex-col text-center text-xl font-nunito font-bold text-white sm:text-3xl sm:font-extrabold">
          Create Wedding invitation in Just
          <span className="text-pink-400">Minute</span>
        </h1>
        <button className="cursor-pointer rounded bg-pink-400 p-2 font-bold text-white hover:bg-pink-500">
          Create
        </button>
      </Jumbotron>
      <div className="py-10 px-5 bg-gray-100 flex flex-col gap-5">
        <section>
          <h2 className="text-4xl font-marcellus font-bold text-center text-slate-700 pb-4 border-b-4 border-dashed border-b-slate-700 mb-5">
            Our Features
          </h2>
          <div className="flex justify-center md:justify-evenly items-center flex-wrap gap-2  lg:grid lg:justify-items-center lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 10 }, (_, index) => (
              <FeatureCard key={index} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-nunito font-bold">Samples templates</h2>
          <p className="text-sm font-light font-roboto mb-4">
            These are some examples of templates available here!
          </p>
          <div className="flex justify-center items-center flex-wrap gap-2 md:justify-evenly lg:grid lg:justify-items-center lg:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }, (_, index) => (
              <SampleCard key={index} />
            ))}
          </div>
          <div className="w-full flex justify-center mt-4">
            <button className="w-32 p-2 rounded bg-pink-300 hover:bg-pink-400 text-white font-bold">
              More...
            </button>
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-nunito font-bold text-pink-500">FAQ</h2>
          <div className="flex flex-col justify-center items-center gap-2">
            {Array.from({ length: 4 }, (_, index) => (
              <FaqDropdown
                key={index}
                title={`Question ${index + 1}`}
                content={"Lorem ipsum dolor amet in dam masia"}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
