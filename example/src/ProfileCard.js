import React from "react";

const ProfileCard = ({ name, title, imageSrc, bio }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageSrc} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{title}</p>
        <p className="text-gray-700 text-base">{bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
