import React from "react";

const Spinner = ({ size = "4", color = "blue" }) => {
  return (
    <div className={`w-${size} h-${size} border-4 border-${color}-300 rounded-full animate-spin`}></div>
  );
};

export default Spinner;
