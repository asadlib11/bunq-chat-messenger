import React, { useEffect, useState } from "react";
import Messenger from "./containers/messenger";
import Login from "./containers/loginPage";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  const [user, setUser] = useState(null);
  const selectUserHandler = (userData) => {
    setUser(userData);
  };
  const logoutHandler = () => {
    setUser(null);
  };

  useEffect(() => {
    console.log("user updated", user);
  }, [user]);

  if (user) {
    return (
      <Messenger id={user.value} name={user.label} logout={logoutHandler} />
    );
  } else {
    return <Login selectUser={selectUserHandler} />;
  }
}

export default App;
