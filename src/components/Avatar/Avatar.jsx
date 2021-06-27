import React from "react";

const Avatar = ({ user, showName }) => {
  return (
    <div className="avatar-component">
      <div className="first-letter">
        <span>{showName.substring(0, 1)}</span>
      </div>
      {showName && <h3 className="avatar">{showName}</h3>}
    </div>
  );
};

export default Avatar;
