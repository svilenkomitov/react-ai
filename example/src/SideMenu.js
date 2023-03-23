import React from "react";

const SideMenu = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="absolute inset-0 bg-gray-600 opacity-75"
        onClick={onClose}
      ></div>
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl transform transition duration-300 ease-in-out">
        <div className="flex items-center justify-between h-16 px-6 mt-8">
          <h1 className="text-2xl font-bold text-gray-800">Menu</h1>
          <button
            className="focus:outline-none"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6 text-gray-700 fill-current"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M18.293 5.293a1 1 0 0 0-1.414 0L12 10.586 7.707 6.293a1 1 0 1 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 0 0 1.414-1.414L13.414 12l4.293-4.293a1 1 0 0 0 0-1.414z"
              />
            </svg>
          </button>
        </div>
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  );
};

export default SideMenu;
