import React from "react";
import './Chatinput.scss';

function Chatinput({ send }) {
  return (
    <div className="Chatinput">
      <input onKeyDown={send} placeholder="Type a Message...Hit enter to send" />
    </div>
  );
}

export default Chatinput;
