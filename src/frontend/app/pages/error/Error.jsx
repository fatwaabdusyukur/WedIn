import React from "react";
import { useRouteError, Link } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  const { status, statusText } = error || {};

  return (
    <section
      className="bg-cover bg-fixed w-full min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/img/banner/error-background.jpg')",
      }}
    >
      <div className="rounded bg-white py-4 px-7 w-80 sm:w-96 flex flex-col items-center">
        <h1 className="text-8xl text-pink-500 text-center">{status || 500}</h1>
        <h2 className="text-4xl text-blue-400 text-center font-bold">
          {statusText || "Something went wrong!"}
        </h2>
        <button className="mt-5 rounded-full px-3 py-2 font-bold text-2xl text-white bg-pink-500 hover:bg-pink-300 hover:text-shade-500">
          <Link to="/">Go Home!</Link>
        </button>
      </div>
    </section>
  );
}
