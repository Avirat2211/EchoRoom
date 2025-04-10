import React from "react";
import './ChatHistory.scss';
import Message from '../Message/Message';

function ChatHistory({ ChatHistory }) {
  console.log(ChatHistory);

  const messages = ChatHistory.map((msg) => (
    <Message key={msg.timeStamp} message={msg.data} />
  ));

  return (
    <div className="ChatHistory">
      <h2>Chat History</h2>
      {messages}
    </div>
  );
}

export default ChatHistory;
