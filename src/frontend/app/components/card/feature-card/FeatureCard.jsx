import React from "react";

export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="rounded-md bg-pink-100 w-60 flex flex-col gap-y-2 p-3">
      <div className="p-2 rounded-full bg-pink-300 w-fit">
        <img
          src={`/assets/img/icons/features/${icon}`}
          alt="icon"
          className="w-7 h-7"
        />
      </div>
      <h1 className="text-lg font-bold mt-2 font-marcellus text-shade-600">
        {title}
      </h1>
      <p className="text-pretty text-shade-500 font-light">{description}</p>
    </div>
  );
}
