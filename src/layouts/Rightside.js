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
import { socket } from "../libs/socket";
import { getMessages } from "../redux/actions/messages";

function Rightside() {
  const dispatch = useDispatch();
  const url = useLocation();
  const { slug } = useParams();
  const chatroom_id = slug ? slug.split("-")[slug.split("-").length - 1] : null;
  // const [update, setUpdate] = useState(true);
  const [type, setType] = useState("");
  const [sendfile, setSendfile] = useState(false);
  const { data: messages, error, loading } = useSelector((s) => s.Messages);
  const { data: auth } = useSelector((s) => s.Auth);
  const [msg, setMsg] = useState(messages.messages)

  useEffect(() => {
    if (chatroom_id === null) {
      return;
    }

    socket.emit('join', { userId: auth.id, roomId: chatroom_id })
    dispatch(getMessages(auth.id, auth.token, chatroom_id));
  }, [chatroom_id]);

  useEffect(() => {
    socket.on('message', message => {
      setMsg([...msg, message])
      console.log(msg)
    })
  }, [])
  return (
    <>
      {/* {loading && <Loading />} */}

      <div
        className={
          (url.pathname === "/chat" &&
            "d-none d-md-block overflow-hidden col-md-7 col-xl-8 rightside") ||
          "col-12 d-flex overflow-hidden col-md-7 col-xl-8 rightside"
        }
      >
        {((url.pathname === "/chat" || url.pathname === "/contact") && (
          <div className="row w-100 h-100 align-content-center">
            <p className="empty-chat text-secondary text-center">
              Please select a chat to start messaging
            </p>
          </div>
        )) ||
          (messages !== null && (
            <ChatMessage
              data={messages}
              message={msg}
              // update={() => setUpdate(!update)}
              sendfile={() => setSendfile(!sendfile)}
            />
          ))}

        {/* Contacts Info */}
        {/* <ContactInfo /> */}

        {/* <ChatMessageMenu /> */}

        {/* <SendStickers /> */}
        {type === "images" && (
          <SendImages
            // update={() => setUpdate(!update)}
            type={(a) => setType(a)}
          />
        )}

        {/* Incoming Calls */}
        {/* <IncomingCalls device="desktop" /> */}

        {/* Call History */}
        {/* <Calling device="desktop" /> */}

        {/* Message Add File */}
        {sendfile && (
          <MessageAddFile
            type={(a) => {
              setType(a);
            }}
            sendFile={() => setSendfile(!sendfile)}
          />
        )}
      </div>
    </>
  );
}

export default Rightside;
