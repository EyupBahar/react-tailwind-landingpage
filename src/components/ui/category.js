import React from "react";

export default function Category({ category: { id, title, image } }) {
  return (
    <a href="#" className="flex flex-col group items-center text-center p-4">
      <img
        src={image}
        alt="img"
        className="w-12 h-12 rounded-sm border border-gray-200"
      />
      <span className="text-sm font-semibold text-gray-700 whitespace-nowrap group-hover:text-brand-color tracking">
        {title}
      </span>
    </a>
  );
}
