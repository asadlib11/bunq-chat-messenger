import React from "react";
import ReactTooltip from "react-tooltip";
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
        data-tip="Create Personal Chat"
        style={{ margin: "20px auto", width: "40px", cursor: "pointer" }}
        onClick={personalChatHandler}
      >
        <img src={personalChat} alt="Personal Chat" />
      </div>
      <div
        data-tip="Create Group Chat"
        style={{ margin: "20px auto", width: "40px", cursor: "pointer" }}
        onClick={groupChatHandler}
      >
        <img src={groupChat} alt="Group Chat" />
      </div>
      <div
        data-tip="Log Out"
        style={{ margin: "20px auto", width: "40px", cursor: "pointer" }}
        onClick={logoutHandler}
      >
        <img style={{ width: "40px" }} src={logoutIcon} alt="Log Out" />
      </div>
      <ReactTooltip />
    </div>
  );
}
