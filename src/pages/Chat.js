import React, { useState } from "react";
import { Lefside, Rightside } from "../layouts";
import photo from "../assets/images/photo1.png";

const chatlist = [
  {
    name: "Theressa Webb",
    photo: photo,
    time: "15:20",
    lastMessage: "Why did you do that?",
    isPinned: true,
    sender: 2,
    unread: 2,
    isOnline: false,
  },
  {
    name: "Calvin Flores",
    photo: photo,
    time: "15:13",
    lastMessage: "Hi bro! Come to my house!",
    sender: 2,
    unread: 1,
    isOnline: true,
  },
  {
    name: "Gregory Bell",
    photo: photo,
    time: "15:13",
    lastMessage: "Will you stop ignoring me?",
    sender: 2,
    unread: 164,
    isOnline: false,
  },
  {
    name: "Soham Henry",
    photo: photo,
    time: "08:20",
    lastMessage: "Will you stop ignoring me?",
    isPinned: true,
    sender: 1,
    unread: 1,
    isOnline: true,
  },
  {
    name: "Mother",
    photo: photo,
    time: "07:20",
    lastMessage: "Yes, of course come,...",
    sender: 1,
    unread: 0,
    isOnline: true,
  },
  {
    name: "Brother",
    photo: photo,
    time: "Yesterday",
    lastMessage: "OK, good bye",
    sender: 2,
    unread: 0,
    isOnline: false,
  },
];

function Chat() {
  const [Menu, setMenu] = useState(false);
  const [Window, setWindow] = useState(false);

  return (
    <>
      <main className="container-fluid container-custom">
        <div className="row g-0">
          <Lefside
            chatlist={chatlist}
            menu={Menu}
            menuHandler={() => setMenu(!Menu)}
            window={Window}
            windowHandler={() => setWindow(!Window)}
          />

          <Rightside />
        </div>
      </main>
    </>
  );
}

export default Chat;
