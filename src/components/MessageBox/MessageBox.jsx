import React, { useRef, useEffect } from "react";
import Message from "../Message/Message";

export default function MessageBox({ messages }) {
  const endDiv = useRef(null);
  useEffect(() => {
    endDiv.current.scrollIntoView();
  });
  return (
    <div className="chats">
      <div style={{ float: "right", clear: "both" }} ref={endDiv}></div>
      {messages.map((m) => {
        return <Message message={m} key={m.id} />;
      })}
    </div>
  );
}
