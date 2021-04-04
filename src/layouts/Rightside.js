import React from "react";
import { useLocation } from "react-router";
import { Calling, ChatMessage, SendImages } from "../components";
import { IncomingCalls, ChatMessageMenu } from "../components/Atoms";
import SendStickers from "../components/SendStickers";

function Rightside(props) {
  const url = useLocation();
  const dummyMessage = [
    {
      sender: 2,
      text:
        "Hi, son, how are you doing? Today, my father and I went to buy a car, bought a cool car.",
      images: null,
      file: null,
      document: null,
      time: "Sat. 03:40",
    },
    {
      sender: 1,
      images: null,
      file: null,
      document: null,
      text: "oh! Cool Send me photo",
      time: "Sat. 03:40",
    },
    {
      sender: 2,
      images: null,
      file: null,
      document: null,
      text: "Ok😉",
      time: "Sat. 03:40",
    },
    {
      sender: 2,
      images: "ada",
      file: null,
      document: null,
      text: "Will we arrive tomorrow?",
      time: "Sat. 03:40",
    },
    {
      sender: 1,
      images: "ada",
      file: null,
      document: null,
      text: "Nice",
      time: "Sat. 03:40",
    },
  ];

  return (
    <>
      <div
        className={
          (url.pathname === "/chat" &&
            "d-none d-md-block overflow-hidden col-md-7 col-xl-8 rightside") ||
          "col-12 overflow-hidden col-md-7 col-xl-8 rightside"
        }
      >
        {(url.pathname === "/chat" && (
          <div className="row w-100 h-100 align-content-center">
            <p className="empty-chat text-secondary text-center">
              Please select a chat to start messaging
            </p>
          </div>
        )) || <ChatMessage message={dummyMessage} />}

        {/* <ChatMessageMenu /> */}
        {/* <SendStickers /> */}
        {/* <SendImages /> */}

        {/* Incoming Calls */}
        {/* <IncomingCalls device="desktop" /> */}
        {/* End Incoming Calls */}

        {/* Call History */}
        {/* <Calling device="desktop" /> */}
        {/* End Call History */}
      </div>
    </>
  );
}

export default Rightside;
