import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FeatureCard from "../../components/card/feature-card/FeatureCard";
import SampleCard from "../../components/card/sample-card/SampleCard";
import FaqDropdown from "../../components/dropdown/faq-dropdown/FaqDropdown";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import { fetchFeatures, fetchFaqs } from "./logic";
import icons from "./icons.json";

export default function Home() {
  const { features, faqs } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeatures());
    dispatch(fetchFaqs());
  }, [dispatch]);

  return (
    <>
      <Jumbotron styles={{ image: "/assets/img/banner/home.png", height: 330 }}>
        <h1 className="inline-flex flex-col text-center text-xl font-nunito font-bold text-white sm:text-3xl sm:font-extrabold">
          Create Wedding invitation in Just
          <span className="text-pink-400">Minute</span>
        </h1>
        <button className="cursor-pointer rounded bg-pink-400 p-2 font-bold text-white hover:bg-pink-500">
          Create
        </button>
      </Jumbotron>
      <section className="w-full pt-10 sm:py-10 bg-white">
        <h2 className="text-center font-marcellus font-bold text-3xl text-shade-500 mb-10">
          Why use digital invitation?
        </h2>
        <div className="flex flex-col justify-center sm:grid sm:grid-cols-5 md:w-[95%] lg:w-[80%] sm:mx-auto">
          {icons.map(
            ({ path, background, text, color, description }, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4"
                style={{ backgroundColor: background }}
              >
                <img
                  src={path}
                  className="md:w-14 md:h-24 lg:w-24 lg:h-28"
                  alt="icon"
                />
                <h5
                  className="md:text-sm lg:text-lg font-bold font-marcellus"
                  style={{ color: color }}
                >
                  {text}
                </h5>
                <p
                  className="text-sm text-center font-nunito"
                  style={{ color: color }}
                >
                  {description}
                </p>
              </div>
            )
          )}
        </div>
      </section>
      <section className="bg-white">
        <div
          className="bg-cover h-[30rem]"
          style={{
            backgroundImage: "url('/assets/img/banner/feature-banner.png')",
          }}
        >
          <h1 className="text-center font-bold text-4xl text-shade-500 py-7">
            Our Services
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 justify-items-center md:gap-y-5 md:grid-cols-3 lg:grid-cols-4 -mt-[23rem] lg:-mt-96 pb-20">
          {features.map(({ feature, description, icon }, index) => (
            <FeatureCard
              key={index}
              title={feature}
              description={description}
              icon={icon}
            />
          ))}
        </div>
      </section>
      <section className="py-10 px-5 bg-white flex flex-col gap-5">
        <h2 className="text-3xl font-nunito font-bold text-shade-500">
          Samples templates
        </h2>
        <p className="text-sm font-light font-roboto mb-4 text-shade-500">
          These are some examples of templates available here!
        </p>
        <div className="flex justify-center items-center flex-wrap gap-2 md:justify-evenly lg:grid lg:justify-items-center lg:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => (
            <SampleCard key={index} size="md:w-72 md:h-52 lg:w-96 lg:h-64" />
          ))}
        </div>
        <div className="w-full flex justify-center mt-4">
          <button className="w-32 p-2 rounded bg-pink-300 hover:bg-pink-400 text-white font-bold">
            More...
          </button>
        </div>
      </section>
      <section className="bg-pink-500 w-full pb-5">
        <div className="mb-5">
          <h1 className="text-center text-4xl font-bold text-white pt-7 pb-3">
            Frequently Asked Questions
          </h1>
          <div className="w-20 h-2 bg-blue-500 mx-auto"></div>
        </div>
        <div className="flex flex-col items-center gap-y-3">
          {faqs.map(({ question, answer }, index) => (
            <FaqDropdown key={index} title={question} content={answer} />
          ))}
        </div>
      </section>
    </>
  );
}
