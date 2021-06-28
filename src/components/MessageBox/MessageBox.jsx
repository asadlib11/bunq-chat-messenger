import React, { useRef, useEffect } from "react";
import Message from "../Message/Message";
import { Spin } from "antd";

export default function MessageBox({
  messages,
  id,
  getMoreMessages,
  shouldScroll = true,
  furtherMessages,
  isLoading,
  pollingMessage,
}) {
  useEffect(() => {
    let pollingMessages = setInterval(function () {
      if (messages.length > 0) {
        pollingMessage(messages[messages.length - 1].id);
      }
    }, 3000);

    return () => clearInterval(pollingMessages);
  }, [messages]);

  const endDiv = useRef(null);
  useEffect(() => {
    if (shouldScroll) {
      endDiv.current.scrollIntoView();
    }
  });

  return (
    <div className="chats">
      {messages
        .sort((a, b) => a.id - b.id)
        .map((m) => {
          return <Message message={m} key={m.id} id={id} />;
        })}
      {messages.length >= 50 ? (
        <div style={{ textAlign: "center" }}>
          {!isLoading ? (
            furtherMessages && (
              <button className="load-more-messages" onClick={getMoreMessages}>
                Load More Messages
              </button>
            )
          ) : (
            <Spin size={"small"} />
          )}
        </div>
      ) : (
        ""
      )}
      {shouldScroll && (
        <div style={{ float: "right", clear: "both" }} ref={endDiv}></div>
      )}
    </div>
  );
}
