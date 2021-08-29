import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { socket } from "../libs/socket";
import { MessageLeft, MessageRight } from "./Atoms";

const MappingMessage = () => {
  const { data: messages, error, loading } = useSelector((s) => s.Messages);
  const {
    data: chatroom,
    error: errChatroom,
    loading: loadingChatroom,
  } = useSelector((s) => s.Chatroom);
  const { data: auth } = useSelector((s) => s.Auth);

  const [data, setData] = useState([]);
  useEffect(() => {
    setData([...messages]);
  }, []);

  socket.on("message", (msg) => {
    data.push(msg);
  });

  return (
    <>
      {data?.map((e, idx) => {
        if (e.sender !== auth.id) {
          return (
            <MessageLeft
              key={idx}
              message={e}
              chatroom={chatroom.chatroom_id}
              user1_photo={chatroom.user1_photo}
              user2_photo={chatroom.user2_photo}
            />
          );
        } else {
          return (
            <MessageRight
              key={idx}
              message={e}
              chatroom={chatroom.chatroom_id}
              user1_photo={chatroom.user1_photo}
              user2_photo={chatroom.user2_photo}
            />
          );
        }
      })}
    </>
  );
};

export default MappingMessage;
