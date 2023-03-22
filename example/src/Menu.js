import React from "react";

const Menu = ({ items }) => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white py-4 px-6">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Logo</h1>
      </div>
      <div className="flex items-center">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.url}
            className="mx-4 hover:text-gray-400"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Menu;
