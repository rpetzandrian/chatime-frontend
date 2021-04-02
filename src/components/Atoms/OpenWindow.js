import React from "react";
import { newGroupChat, secretChat, newChannel } from "../../assets/images";

function OpenWindow() {
  return (
    <>
      <div className="navbar-brand open-window d-flex justify-content-evenly py-2 px-2">
        <img src={newGroupChat} alt="New Group" />
        <img src={secretChat} alt="Secret Chat" />
        <img src={newChannel} alt="New Channel" />
      </div>
    </>
  );
}

export default OpenWindow;
