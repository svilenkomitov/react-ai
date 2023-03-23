import React from 'react';

const PinkButton = ({ children, onClick }) => {
  return (
    <button
      className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PinkButton;
