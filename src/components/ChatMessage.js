import React, { useEffect, useRef } from "react";
import {
  ChatMessageFooter,
  ChatMessageHeader,
  MessageLeft,
  MessageRight,
} from "./Atoms";

function ChatMessage(props) {
  const userId = localStorage.getItem("userID");
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }, [props.data]);

  return (
    <>
      <div className="chat-message">
        {props.data && <ChatMessageHeader data={props.data} />}
        <div className="message overflow-auto">
          {props.data.message !== null
            ? props?.data?.messages?.map((e) => {
                if (e.sender !== userId) {
                  return (
                    <MessageLeft
                      key={e.id}
                      message={e}
                      user1_photo={props.data.user1_photo}
                      user2_photo={props.data.user2_photo}
                    />
                  );
                }
                return (
                  <MessageRight
                    key={e.id}
                    message={e}
                    user1_photo={props.data.user1_photo}
                    user2_photo={props.data.user2_photo}
                  />
                );
              })
            : ""}
          <div ref={divRef}></div>
        </div>
        <ChatMessageFooter
          userToken={props.userToken}
          userId={props.data.user1}
          chatroom_id={props.data.chatroom_id}
        />
      </div>
    </>
  );
}

export default ChatMessage;
