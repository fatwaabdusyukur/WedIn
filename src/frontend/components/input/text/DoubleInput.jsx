import React from "react";

export default function DoubleInput() {
  return (
    <div className="flex items-center gap-3">
      <div>
        <label htmlFor="min">Min</label>
        <input
          type="text"
          id="min"
          name="min"
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-shade-300 text-shade-600"
          placeholder="$"
        />
      </div>
      <div>
        <label htmlFor="max">Max</label>
        <input
          type="text"
          id="max"
          name="max"
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-shade-300 text-shade-600"
          placeholder="$"
        />
      </div>
    </div>
  );
}
