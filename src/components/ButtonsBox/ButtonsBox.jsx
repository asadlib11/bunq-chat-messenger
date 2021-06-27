import React from "react";
import groupChat from "../../assets/group_chat.svg";
import personalChat from "../../assets/personal_chat.svg";
import logoutIcon from "../../assets/log-out.svg";

export default function ButtonsBox({
  personalChatHandler,
  groupChatHandler,
  logoutHandler,
}) {
  return (
    <div className="buttonsBox">
      <div
        style={{ margin: "20px auto", width: "40px", cursor: "pointer" }}
        onClick={personalChatHandler}
      >
        <img src={personalChat} alt="Personal Chat" />
      </div>
      <div
        style={{ margin: "20px auto", width: "40px", cursor: "pointer" }}
        onClick={groupChatHandler}
      >
        <img src={groupChat} alt="Group Chat" />
      </div>
      <div
        style={{ margin: "20px auto", width: "40px", cursor: "pointer" }}
        onClick={logoutHandler}
      >
        <img style={{ width: "33px" }} src={logoutIcon} alt="Log Out" />
      </div>
    </div>
  );
}
