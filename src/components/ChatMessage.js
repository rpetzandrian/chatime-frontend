import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { socket } from "../libs/socket";
import {
  ChatMessageFooter,
  ChatMessageHeader,
  MessageLeft,
  MessageRight,
} from "./Atoms";

function ChatMessage(props) {
  const { data: auth } = useSelector((s) => s.Auth);
  const divRef = useRef(null);

  // console.log(props, 'PRIOSSSSSSSSSSSS')

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }, [props.data]);

  return (
    <>
      <div className="chat-message">
        {props.data && <ChatMessageHeader data={props.data} />}
        <div className="message overflow-auto">
          {
            props?.message?.map((e) => {
              if (e.sender !== auth.id) {
                return (
                  <MessageLeft
                    key={e.id}
                    message={e}
                    chatroom={props.data.chatroom_id}
                    user1_photo={props.data.user1_photo}
                    user2_photo={props.data.user2_photo}
                  />
                );
              }
              return (
                <MessageRight
                  key={e.id}
                  message={e}
                  chatroom={props.data.chatroom_id}
                  user1_photo={props.data.user1_photo}
                  user2_photo={props.data.user2_photo}
                />
              );
            })
          }
          <div ref={divRef}></div>
        </div>
        <ChatMessageFooter
          chatroom_id={props.data.chatroom_id}
          // update={props.update}
          sendfile={props.sendfile}
        />
      </div>
    </>
  );
}

export default ChatMessage;
