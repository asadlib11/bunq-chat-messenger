import React from "react";

const Avatar = ({ user, showName, welcome }) => {
  return (
    <div className="avatar-component">
      <img className="avatar" src={user.avatar} alt="" />
      {showName && (
        <h3 className="avatar">
          {welcome && "Welcome "}
          {showName}
        </h3>
      )}
    </div>
  );
};

export default Avatar;
