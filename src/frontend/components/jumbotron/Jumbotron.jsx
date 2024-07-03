import React from "react";

export default function Jumbotron({ children, styles }) {
  const { image, height } = styles;

  return (
    <div
      className="relative flex flex-col items-center justify-center gap-2 n bg-cover bg-center shadow-lg"
      style={{ backgroundImage: `url('${image}')`, height: `${height}px` }}
    >
      {children}
    </div>
  );
}
