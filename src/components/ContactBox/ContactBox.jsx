import React from "react";
import Avatar from "../Avatar/Avatar";

export default function ContactBox({ contact, setContactSelected }) {
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
      </div>
    </div>
  );
}
