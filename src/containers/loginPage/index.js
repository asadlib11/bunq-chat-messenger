import React, { Fragment } from "react";
import { availableUsers } from "../../utils/constants";
import bunqLogo from "../../assets/BunqLogo.svg";
export default function Login({ selectUser }) {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div className="banner"></div>
      <div
        style={{
          width: "100%",
          margin: "auto",
          marginTop: "10%",
          textAlign: "center",
        }}
      >
        <img src={bunqLogo} alt="" />
        <h1>Welcome to Bunq chat</h1>
        <h3>Please Select your user</h3>
        <div>
          {availableUsers.map((user, key) => {
            return (
              <button
                className="userButton"
                style={{ background: user.bgColor }}
                key={key}
                onClick={() => selectUser(user)}
              >
                <span className="userName">{user.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
