import React, { useEffect, useState } from "react";
import { Modal, Checkbox, Radio, Spin } from "antd";
import { mainUser } from "../../generateFakeData";
import Avatar from "../../components/Avatar/Avatar";
import ContactBox from "../../components/ContactBox/ContactBox";
import MessageBox from "../../components/MessageBox/MessageBox";
import ChatInputBox from "../../components/ChatInputBox/ChatInputBox";
import ReactTooltip from "react-tooltip";
import Welcome from "../../components/Welcome/Welcome";
import ButtonsBox from "../../components/ButtonsBox/ButtonsBox";
import apiClient from "../../utils/apiclient";
import infoIcon from "../../assets/information.svg";
import InformationModal from "../../components/InformationModal/InformationModal";
import { availableUsers } from "../../utils/constants";

export default function Messenger({ id, name, logout }) {
  const [allConvos, setAllConvos] = useState([]);
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
  const [currentMessageInfo, setCurrentMessageInfo] = React.useState(null);
  const [showInfoModal, setShowInfoModal] = React.useState(false);
  const usersForChat = availableUsers.filter((el) => el.value !== id);
  const [shouldScroll, setShouldScroll] = useState(true);
  const [furtherMessages, setFurtherMessages] = useState(true);
  const [messageLoadLoader, setMessageLoadLoader] = useState(false);

  useEffect(() => {
    getConversations();
  }, []);

  useEffect(() => {
    filterContacts(data, search);
    getMessages(contactSelected);
  }, [contactSelected, data, search]);

  useEffect(() => {}, [shouldScroll, furtherMessages, messageLoadLoader]);

  const getConversations = async () => {
    try {
      const { data } = await apiClient.get(`/conversation/user/${id}`);
      const myData = data.sort(
        (a, b) => b.conversation.conversationId - a.conversation.conversationId
      );
      setAllConvos(myData);
      const subArray = myData.slice(0, 19);
      setData(subArray);
    } catch (err) {
      await getConversations();
    }
  };

  const loadMoreMessages = () => {
    const moreMessages = allConvos.slice(data.length, data.length + 20);
    setData([...data, ...moreMessages]);
  };

  const getMessages = async (conversation) => {
    if (conversation && conversation.conversationId) {
      const { data } = await apiClient.get(
        `/conversation/${conversation.conversationId}/message/limited?limit=50&offset=0`
      );
      setCurrentMessages(data);
    }
  };

  const handleLoadMoreMessage = async () => {
    setMessageLoadLoader(true);
    const { data } = await apiClient.get(
      `/conversation/${contactSelected.conversationId}/message/limited?limit=50&offset=${currentMessages.length}`
    );
    setShouldScroll(false);
    if (data.length === 0) {
      setFurtherMessages(false);
    }
    setCurrentMessages([...currentMessages, ...data]);
    setMessageLoadLoader(false);
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

  const pollingMessage = async (lastMessageId) => {
    try {
      const { data } = await apiClient.get(
        `/conversation/${contactSelected.conversationId}/new/${lastMessageId}`
      );
      setCurrentMessages([...currentMessages, ...data]);
    } catch (error) {}
  };

  const filterContacts = (data, search) => {
    const result = data.filter(({ conversation }) => {
      if (conversation.name && search !== "") {
        return (
          !search ||
          conversation.name.toLowerCase().includes(search.toLowerCase())
        );
      } else {
        return conversation;
      }
    });
    setFilteredContacts(result);
  };

  const personalChatCreation = () => {
    setIsPersonalChatModalVisible(true);
  };
  const groupChatCreation = () => {
    setIsGroupChatModalVisible(true);
  };

  const handlePersonalChatOk = async () => {
    try {
      await apiClient.post("/conversation/personal", {
        users: personalChatContact + "," + id,
      });
      await getConversations();
      setIsPersonalChatModalVisible(false);
    } catch (err) {
      console.log("error occurred");
    }
  };

  const handleGroupChatOk = async () => {
    if (groupChatContact.length !== 0 && groupChatName.trim() !== "") {
      try {
        await apiClient.post("/conversation/group", {
          users: groupChatContact.join(",") + "," + id,
          name: groupChatName,
        });
        await getConversations();
        setIsGroupChatModalVisible(false);
      } catch (err) {
        console.log("error occurred");
      }
    }
  };

  const handleCancel = () => {
    setIsGroupChatModalVisible(false);
    setIsPersonalChatModalVisible(false);
  };

  const groupChatNameHandler = (event) => {
    setGroupChatName(event.target.value);
  };

  const handleInfoOpen = async () => {
    try {
      const { data } = await apiClient.get(
        `/conversation/${contactSelected.conversationId}`
      );
      setCurrentMessageInfo(data);
      setShowInfoModal(true);
    } catch (error) {
      console.log("error in opening info", error);
    }
  };

  const handleInfoClose = () => {
    setShowInfoModal(false);
  };

  return (
    <div className="app">
      <aside>
        <header>
          <Avatar welcome user={mainUser} showName={name}></Avatar>
        </header>
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
                setContactSelected={(contact) => {
                  setContactSelected(contact);
                  setShouldScroll(true);
                  setMessageLoadLoader(false);
                  setFurtherMessages(true);
                }}
              />
            );
          })}
          {filteredContacts.length > 0 ? (
            <div>
              <button style={{ width: "100%" }} onClick={loadMoreMessages}>
                Load More Messages
              </button>
            </div>
          ) : (
            <div style={{ textAlign: "center" }}>
              <Spin
                style={{
                  width: "20%",
                  margin: "auto",
                  marginTop: "30%",
                  marginBottom: "7%",
                }}
                size={"large"}
              />
              <h3>Loading Messages...</h3>
            </div>
          )}
        </div>
      </aside>
      {contactSelected.conversationId ? (
        <main>
          <header>
            <div data-tip="Conversation Information">
              <img
                style={{ width: "29px" }}
                src={infoIcon}
                alt=""
                onClick={async () => {
                  await handleInfoOpen();
                }}
              />
            </div>
            <ReactTooltip />
            {currentMessageInfo && (
              <InformationModal
                conversationInfo={currentMessageInfo}
                handleCancel={handleInfoClose}
                handleOk={handleInfoClose}
                modalVisible={showInfoModal}
              />
            )}
            <Avatar
              user={contactSelected}
              showName={
                contactSelected.name
                  ? contactSelected.name
                  : "Unnamed conversation"
              }
            />
          </header>
          <MessageBox
            id={id}
            messages={currentMessages}
            getMoreMessages={handleLoadMoreMessage}
            shouldScroll={shouldScroll}
            furtherMessages={furtherMessages}
            isLoading={messageLoadLoader}
            pollingMessage={pollingMessage}
          />
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
