import React from "react";

export default function Button({
  type = "button",
  info,
  func,
  regular,
  bold,
  extrabold,
}) {
  return (
    <button
      onClick={(e) => func}
      type={type}
      className={`px-[7px] py-[5px] bg-gray-700 text-white rounded-[5px] ${
        regular && "font-reegular"
      } ${bold && "font-bold"} ${extrabold && "font-extrabold"}`}
    >
      {info}
    </button>
  );
}
