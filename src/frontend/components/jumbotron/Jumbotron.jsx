import React from "react";

export default function Jumbotron() {
  return (
    <div
      className="relative flex h-60 flex-col items-center justify-center gap-2 n bg-cover bg-center shadow-lg"
      style={{ backgroundImage: "url('../img/jumbotron.jpg')" }}
    >
      <h1 className="inline-flex flex-col text-center text-xl font-nunito font-bold text-white sm:text-3xl sm:font-extrabold">
        Create Wedding invitation in Just
        <span className="text-pink-400">Minute</span>
      </h1>
      <button className="cursor-pointer rounded bg-pink-400 p-2 font-bold text-white hover:bg-pink-500">
        Create
      </button>
    </div>
  );
}
