import React from "react";
import doubleCheck from "../../assets/done_all.svg";

export default function Message({ message }) {
  let senderName = "";
  switch (message.senderId) {
    case "1":
      senderName = "Wessel";
      break;

    case "2":
      senderName = "Quint";
      break;

    case "3":
      senderName = "Mani";
      break;

    case "4":
      senderName = "Menno";
      break;

    case "5":
      senderName = "Patrick";
      break;

    default:
      senderName = "Unknown User";
      break;
  }
  return (
    <div
      className={`message ${message.senderId === "1" ? "sent" : "received"}`}
    >
      <div>
        <span style={{ color: "Red", fontWeight: "bolder" }}>{senderName}</span>
      </div>
      {message.message}
      <div className="metadata">
        <span className="date">{message.timestamp}</span>
        <img src={doubleCheck} alt="" className="icon-small" />
      </div>
    </div>
  );
}
