import React, { useEffect, useState } from "react";
import { Modal } from "antd";

export default function InformationModal({
  modalVisible,
  conversationInfo,
  handleOk,
  handleCancel,
}) {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = () => {
    if (conversationInfo.users.length <= 0) {
      return;
    }
    const users = [];
    conversationInfo.users.map((user) => {
      switch (user.userid) {
        case "1":
          users.push("Wessel");
          break;

        case "2":
          users.push("Quint");
          break;

        case "3":
          users.push("Mani");
          break;

        case "4":
          users.push("Menno");
          break;

        case "5":
          users.push("Patrick");
          break;

        default:
          users.push("Unknown User");
          break;
      }
    });
    setMembers(users);
  };

  return (
    <Modal
      title="Conversation Information"
      visible={modalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okType={"primary"}
    >
      <p>
        <span style={{ fontWeight: "bold" }}>Conversation Id:</span>{" "}
        {conversationInfo.conversation.conversationId || "none"}
        <br></br>
        <span style={{ fontWeight: "bold" }}>Conversation Name:</span>{" "}
        {conversationInfo.conversation.name || "none"}
      </p>
      <div>
        <p>
          Members:
          <ol style={{ marginLeft: "6%" }}>
            {members.map((member, key) => (
              <li key={key}>{member}</li>
            ))}
          </ol>
        </p>
      </div>
    </Modal>
  );
}
