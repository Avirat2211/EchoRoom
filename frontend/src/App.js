import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import Chatinput from "./components/Chatinput/Chatinput";
import "./App.css";
import { connect, sendMsg } from "./api";

function App() {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      console.log("New Message");
      setChatHistory((prev) => [...prev, msg]);
    });
  }, []);

  const send = (event) => {
    if (event.key === "Enter") {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  };

  return (
    <div className="App">
      <Header />
      <ChatHistory ChatHistory={chatHistory} />
      <Chatinput send={send} />
    </div>
  );
}

export default App;
