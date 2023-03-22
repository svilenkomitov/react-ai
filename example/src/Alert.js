import React from "react";

const Alert = ({ type, message }) => {
  let bgColor, textColor;

  switch (type) {
    case "success":
      bgColor = "bg-green-500";
      textColor = "text-white";
      break;
    case "warning":
      bgColor = "bg-yellow-500";
      textColor = "text-white";
      break;
    case "error":
      bgColor = "bg-red-500";
      textColor = "text-white";
      break;
    default:
      bgColor = "bg-gray-500";
      textColor = "text-white";
  }

  return (
    <div className={`p-4 ${bgColor} ${textColor}`}>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
