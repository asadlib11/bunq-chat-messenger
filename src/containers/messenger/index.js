import React, { useEffect, useState } from "react";
import { Modal, Checkbox, Radio } from "antd";
import { mainUser } from "../../generateFakeData";
import Avatar from "../../components/Avatar/Avatar";
import ContactBox from "../../components/ContactBox/ContactBox";
import MessageBox from "../../components/MessageBox/MessageBox";
import ChatInputBox from "../../components/ChatInputBox/ChatInputBox";
import Search from "../../components/Search/Search";
import Welcome from "../../components/Welcome/Welcome";
import ButtonsBox from "../../components/ButtonsBox/ButtonsBox";
import apiClient from "../../utils/apiclient";
import { availableUsers } from "../../utils/constants";

export default function Messenger({ id, name, logout }) {
  const [data, setData] = useState([]); // contact boxes data
  const [contactSelected, setContactSelected] = useState({}); // conversation selected data
  const [currentMessages, setCurrentMessages] = useState([]); // current messages are messages in the conversation/Message box
  const [message, setMessage] = useState(""); // message is the text entered by user
  const [search, setSearch] = useState(""); // search textbar state
  const [filteredContacts, setFilteredContacts] = useState([]); // filtered contacts after search
  const [isGroupChatModalVisible, setIsGroupChatModalVisible] = useState(false); // toggle for opening group chat creation modal
  const [isPersonalChatModalVisible, setIsPersonalChatModalVisible] =
    useState(false); // toggle for opening personal chat creation modal
  const [personalChatContact, setPersonalChatContact] = React.useState(null); // value holder for personal chat contact selected
  const [groupChatContact, setGroupChatContact] = React.useState(null); // value holder for group chat contact selected
  const [groupChatName, setGroupChatName] = React.useState(""); // value holder for group chat contact selected

  const usersForChat = availableUsers.filter((el) => el.value !== id);

  useEffect(() => {
    getConversations();
  }, []);

  useEffect(() => {
    filterContacts(data, search);
    getMessages(contactSelected);
  }, [contactSelected, data, search]);

  const getConversations = async () => {
    try {
      const { data } = await apiClient.get(`/conversation/user/${id}`);
      const subArray = data.slice(1, 10);
      setData(subArray);
    } catch (err) {
      await getConversations();
    }
  };

  const getMessages = async (conversation) => {
    const { data } = await apiClient.get(
      `/conversation/${conversation.conversationId}/message/limited?limit=50&offset=0`
    );
    setCurrentMessages(data);
    console.log("Messages", data);
  };

  const pushMessage = async () => {
    await apiClient.post(
      `conversation/${contactSelected.conversationId}/message/send`,
      {
        message,
        senderId: id,
      }
    );
    await getMessages(contactSelected);
    setMessage("");
  };

  const handleSearch = (input) => {
    setSearch(input);
    filterContacts(data, input);
  };

  const filterContacts = (data, search) => {
    const result = data.filter(({ conversation }) => {
      return (
        !search ||
        conversation.name.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilteredContacts(result);
  };

  const personalChatCreation = () => {
    setIsPersonalChatModalVisible(true);
    console.log("personalChat clicked");
  };
  const groupChatCreation = () => {
    setIsGroupChatModalVisible(true);
    console.log("grouplChat clicked");
  };

  const handlePersonalChatOk = () => {
    console.log("Selected contact", personalChatContact);
    setIsPersonalChatModalVisible(false);
  };

  const handleGroupChatOk = async () => {
    try {
      console.log("Selected contacts", groupChatContact);
      console.log("Group chat name", groupChatName);
      const createGroupChat = await apiClient.post("/conversation/group", {
        users: groupChatContact.join(","),
        name: groupChatName,
      });
      const newChatId = createGroupChat.data.id;
      console.log("new chat id is", newChatId);
      setIsGroupChatModalVisible(false);
    } catch (err) {
      console.log("error occurred");
    }
  };

  const handleCancel = () => {
    setIsGroupChatModalVisible(false);
    setIsPersonalChatModalVisible(false);
  };

  const groupChatNameHandler = (event) => {
    setGroupChatName(event.target.value);
  };

  mainUser.avatar =
    "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg";
  return (
    <div className="app">
      <aside>
        <header>
          <Avatar user={mainUser} showName={name}></Avatar>
        </header>
        <Search search={search} handleSearch={handleSearch} />
        <ButtonsBox
          groupChatHandler={groupChatCreation}
          personalChatHandler={personalChatCreation}
          logoutHandler={logout}
        />
        <div className="contact-boxes">
          {filteredContacts.map(({ conversation }) => {
            return (
              <ContactBox
                contact={conversation}
                key={conversation.lastseen + conversation.conversationId}
                setContactSelected={setContactSelected}
              />
            );
          })}
        </div>
      </aside>
      {contactSelected.conversationId ? (
        <main>
          <header>
            <Avatar
              user={contactSelected}
              showName={
                contactSelected.name
                  ? contactSelected.name
                  : "Unnamed conversation"
              }
            />
            <div>Info</div>
          </header>
          <MessageBox messages={currentMessages} />
          <ChatInputBox
            message={message}
            setMessage={setMessage}
            pushMessage={pushMessage}
          />
        </main>
      ) : (
        <Welcome />
      )}
      <Modal
        title="Create Group Chat"
        visible={isGroupChatModalVisible}
        onOk={handleGroupChatOk}
        onCancel={handleCancel}
      >
        <div
          className="chat-input"
          style={{ margin: "auto", textAlign: "center", marginBottom: "30px" }}
        >
          <h3>Enter a groupchat name</h3>
          <input
            type="text"
            placeholder="Enter a group chat name"
            style={{ border: "1px outset grey" }}
            value={groupChatName}
            onChange={groupChatNameHandler}
          />
        </div>
        <div style={{ margin: "auto", textAlign: "center" }}>
          <h3>Select people for group chat</h3>
          <Checkbox.Group
            options={usersForChat}
            onChange={(checkedValues) => {
              setGroupChatContact(checkedValues);
            }}
          />
        </div>
      </Modal>

      <Modal
        title="Create Personal Chat"
        visible={isPersonalChatModalVisible}
        onOk={handlePersonalChatOk}
        onCancel={handleCancel}
      >
        <div style={{ margin: "auto", textAlign: "center" }}>
          <h3>Select a contact for personal chat</h3>
          <Radio.Group
            onChange={(e) => {
              setPersonalChatContact(e.target.value);
            }}
            value={personalChatContact}
          >
            {usersForChat.map((user) => (
              <Radio key={user.label} value={user.value}>
                {user.label}
              </Radio>
            ))}
          </Radio.Group>
        </div>
      </Modal>
    </div>
  );
}
