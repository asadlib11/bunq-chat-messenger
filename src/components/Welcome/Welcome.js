import React from "react";
import introImg from "../../assets/BunqLogo.svg";
export default function Welcome() {
  return (
    <div className="welcome">
      <div className="banner" style={{ width: "70%" }}></div>
      <img src={introImg} alt="" />
      <h2>Welcome to Bunqr Chat</h2>
    </div>
  );
}
