import React from "react";
import './Message.scss';

function Message({ message }) {
  const parsedMessage = JSON.parse(message);

  return (
    <div className="Message">
      {parsedMessage.body}
    </div>
  );
}

export default Message;
