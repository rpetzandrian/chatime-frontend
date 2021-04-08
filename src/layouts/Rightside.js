import React from "react";
import { useLocation } from "react-router";
import {
  Calling,
  ChatMessage,
  ContactInfo,
  MessageAddFile,
  SendImages,
  SendStickers,
} from "../components";
import { IncomingCalls, ChatMessageMenu } from "../components/Atoms";

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

function Rightside(props) {
  const url = useLocation();

  return (
    <>
      <div
        className={
          (url.pathname === "/chat" &&
            "d-none d-md-block overflow-hidden col-md-7 col-xl-8 rightside") ||
          "col-12 d-flex overflow-hidden col-md-7 col-xl-8 rightside"
        }
      >
        {(url.pathname === "/chat" && (
          <div className="row w-100 h-100 align-content-center">
            <p className="empty-chat text-secondary text-center">
              Please select a chat to start messaging
            </p>
          </div>
        )) || <ChatMessage message={dummyMessage} />}

        {/* Contacts Info */}
        {url.pathname.split("/")[3] === "contact-info" && <ContactInfo />}

        {/* <ChatMessageMenu /> */}

        {/* <SendStickers /> */}
        {/* <SendImages /> */}

        {/* Incoming Calls */}
        {/* <IncomingCalls device="desktop" /> */}

        {/* Call History */}
        {/* <Calling device="desktop" /> */}

        {/* Message Add File */}
        {/* <MessageAddFile /> */}
      </div>
    </>
  );
}

export default Rightside;
