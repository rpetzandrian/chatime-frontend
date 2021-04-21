import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import {
  Calling,
  ChatMessage,
  ContactInfo,
  Loading,
  MessageAddFile,
  SendImages,
  SendStickers,
} from "../components";
import { IncomingCalls, ChatMessageMenu } from "../components/Atoms";
import { api } from "../config/api";
import { getMessages } from "../redux/actions/messages";

function Rightside() {
  const dispatch = useDispatch();
  const url = useLocation();
  const { slug } = useParams();
  const chatroom_id = slug ? slug.split("-")[slug.split("-").length - 1] : null;
  const { data: messages, error, loading } = useSelector((s) => s.Messages);
  const { data: auth } = useSelector((s) => s.Auth);

  useEffect(() => {
    if (chatroom_id === null) {
      return;
    }

    dispatch(getMessages(auth.id, auth.token, chatroom_id));
  }, [chatroom_id]);

  return (
    <>
      {loading && <Loading />}

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
          (messages !== null && <ChatMessage data={messages} />)}

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
