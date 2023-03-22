import React from "react";

const Radiobutton = ({ label, name, value, checked, onChange }) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="radio"
        className="form-radio h-5 w-5 text-gray-600"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
};

export default Radiobutton;
