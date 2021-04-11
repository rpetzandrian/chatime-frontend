import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import {
  Calling,
  ChatMessage,
  ContactInfo,
  MessageAddFile,
  SendImages,
  SendStickers,
} from "../components";
import { IncomingCalls, ChatMessageMenu } from "../components/Atoms";
import { api } from "../config/api";

function Rightside({ userToken }) {
  const userId = localStorage.getItem("userID");
  const url = useLocation();
  const { slug } = useParams();
  const chatroom_id = slug ? slug.split("-")[slug.split("-").length - 1] : null;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (chatroom_id === null) {
      return;
    }
    axios
      .get(`${api.baseUrl}/messages/${userId}/${chatroom_id}`, {
        headers: {
          "user-token": `${userToken}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [chatroom_id]);

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
        )) ||
          (data !== null && (
            <ChatMessage data={data} userToken={userToken} userId={userId} />
          ))}

        {/* Contacts Info */}
        {/* <ContactInfo /> */}

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
