import React from "react";
import {
  ChatMessageFooter,
  ChatMessageHeader,
  MessageLeft,
  MessageRight,
} from "./Atoms";

function ChatMessage(props) {
  return (
    <>
      <div className="chat-message">
        <ChatMessageHeader />
        <div className="message overflow-auto">
          {props.message.map((e, index) => {
            if (e.sender !== 1) {
              return <MessageLeft key={index} message={e} />;
            }
            return <MessageRight key={index} message={e} />;
          })}
        </div>
        <ChatMessageFooter />
      </div>
    </>
  );
}

export default ChatMessage;
