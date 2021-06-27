import React from "react";
import doubleCheck from "../../assets/done_all.svg";
import Avatar from "../Avatar/Avatar";

export default function ContactBox({ contact, setContactSelected }) {
  // const maxTimestamp = Math.max(...messages.map((m) => m.date.getTime()));
  // const lastMsg = messages.find((m) => m.date.getTime() === maxTimestamp);
  // const truncate = (text, length) => {
  //   return text.length > length ? `${text.substring(0, length)} ...` : text;
  // };
  return (
    <div
      className="contact-box"
      onClick={() => {
        console.log("contact", contact);
        setContactSelected(contact);
      }}
    >
      <Avatar user={contact}></Avatar>
      <div className="right-section">
        <div className="contact-box-header">
          <h3 className="avatar-title">
            {contact.name ? contact.name : "Unnamed conversation"}
          </h3>
          <span className="time-mark">
            {contact.lastseen ? contact.lastseen : "No Last Seen time"}
          </span>
        </div>
        <div className="last-msg">
          <img src={doubleCheck} alt="" className="icon-small" />
          <span className="text">trunacted message</span>
        </div>
      </div>
    </div>
  );
}
