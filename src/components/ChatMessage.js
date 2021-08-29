import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { trashBlue } from "../assets/images";
import { api } from "../config/api";
import { socket } from "../libs/socket";
import { deleteMessages, getMessages } from "../redux/actions/messages";
import {
  ChatMessageFooter,
  ChatMessageHeader,
  MessageLeft,
  MessageRight,
} from "./Atoms";
import MappingMessage from "./MappingMessage";

function ChatMessage({ message, chatroom, ...props }) {
  const { data: auth } = useSelector((s) => s.Auth);
  const dispatch = useDispatch();
  const divRef = useRef(null);

  const [del, setDel] = useState(false);
  const deleteHandler = (message, chatroom) => {
    setDel(false);
    dispatch(deleteMessages(auth.id, auth.token, message, chatroom));
  };

  const [msg, setMsg] = useState(message);

  socket.on("message", (data) => {
    setMsg([...msg, data]);
  });

  useEffect(() => {
    dispatch(getMessages(auth.id, auth.token, chatroom.chatroom_id));
    divRef.current.scrollIntoView();
  }, [msg]);

  return (
    <>
      <div className="chat-message">
        {chatroom && <ChatMessageHeader data={chatroom} />}
        <div className="message overflow-auto">
          {/* <MappingMessage /> */}
          {msg?.map((e) => {
            if (e.sender === auth.id) {
              if (e.images) {
                return (
                  <>
                    <div
                      className="d-flex justify-content-end align-items-start mx-3 mt-3 mb-2"
                      onDrag={() => setDel(true)}
                    >
                      {del && (
                        <img
                          className="icon"
                          width="24px"
                          src={trashBlue}
                          alt="delete"
                          onClick={() => deleteHandler(e.id, chatroom)}
                        />
                      )}
                      <p className="d-none d-lg-block text-blue ms-4 pt-4">
                        {e.time}
                      </p>
                      <div className="mx-3 message-block-right">
                        <img
                          className="chat-image"
                          src={`${api.imgUrl}/${e.images}`}
                          alt="images"
                        />
                      </div>
                      <p className="d-block d-lg-none text-blue ms-4 pt-4">
                        {e.time}
                      </p>
                      <img
                        className="d-none d-lg-block invisible"
                        width="45px"
                        height="45px"
                        src={
                          chatroom.user1_photo === null
                            ? "https://via.placeholder.com/150"
                            : `${api.imgUrl}/${chatroom.user1_photo}`
                        }
                        alt="sender"
                      />
                    </div>
                    {e.text && (
                      <div
                        className="d-flex justify-content-end align-items-start mx-3 mt-3 mb-2"
                        onDrag={() => setDel(true)}
                      >
                        {del && (
                          <img
                            className="icon"
                            width="24px"
                            src={trashBlue}
                            alt="delete"
                            onClick={() => deleteHandler(e.id, chatroom)}
                          />
                        )}
                        <p className="d-none d-lg-block text-blue ms-4 pt-4">
                          {e.time}
                        </p>
                        <div className="mx-3 message-block-right">
                          <p className="px-3 py-3">{e.text}</p>
                        </div>
                        <p className="d-block d-lg-none text-blue ms-4 pt-4">
                          {e.time}
                        </p>
                        <img
                          className="d-none d-lg-block"
                          width="45px"
                          height="45px"
                          src={
                            chatroom.user1_photo === null
                              ? "https://via.placeholder.com/150"
                              : `${api.imgUrl}/${chatroom.user1_photo}`
                          }
                          alt="sender"
                        />
                      </div>
                    )}
                  </>
                );
              } else {
                return (
                  <div
                    className="d-flex justify-content-end align-items-start mx-3 mt-3 mb-2"
                    onDrag={() => setDel(true)}
                  >
                    {del && (
                      <img
                        className="icon"
                        width="24px"
                        src={trashBlue}
                        alt="delete"
                        onClick={() => deleteHandler(e.id, chatroom)}
                      />
                    )}
                    <p className="d-none d-lg-block text-blue ms-4 pt-4">
                      {e.time}
                    </p>
                    <div className="mx-3 message-block-right">
                      <p className="px-3 py-3">{e.text}</p>
                    </div>
                    <p className="d-block d-lg-none text-blue ms-4 pt-4">
                      {e.time}
                    </p>
                    <img
                      className="d-none d-lg-block"
                      width="45px"
                      height="45px"
                      src={
                        chatroom.user1_photo === null
                          ? "https://via.placeholder.com/150"
                          : `${api.imgUrl}/${chatroom.user1_photo}`
                      }
                      alt="profile"
                    />
                  </div>
                );
              }
            } else {
              if (e.images) {
                return (
                  <>
                    <div
                      className="d-flex justify-content-start align-items-end mx-3 mt-3 mb-2"
                      onDrag={() => setDel(true)}
                    >
                      <img
                        className="d-none d-lg-block invisible"
                        width="45px"
                        height="45px"
                        src={
                          chatroom.user2_photo === null
                            ? "https://via.placeholder.com/150"
                            : `${api.imgUrl}/${chatroom.user2_photo}`
                        }
                        alt="sender"
                      />
                      <p className="d-block d-lg-none text-blue ms-4 pb-3">
                        {e.time}
                      </p>
                      <div className="mx-3 message-block-left">
                        <img
                          className="chat-image"
                          src={`${api.imgUrl}/${e.images}`}
                          alt="images"
                        />
                      </div>
                      <p className="d-none d-lg-block text-blue ms-4 pb-3">
                        {e.time}
                      </p>
                      {del && (
                        <img
                          className="icon"
                          width="24px"
                          src={trashBlue}
                          alt="delete"
                          onClick={() => deleteHandler(e.id, chatroom)}
                        />
                      )}
                    </div>
                    {e.text && (
                      <div
                        className="d-flex justify-content-start align-items-end mx-3 mt-3 mb-2"
                        onDrag={() => setDel(true)}
                      >
                        <img
                          className="d-none d-lg-block"
                          width="45px"
                          height="45px"
                          src={
                            chatroom.user2_photo === null
                              ? "https://via.placeholder.com/150"
                              : `${api.imgUrl}/${chatroom.user2_photo}`
                          }
                          alt="sender"
                        />
                        <p className="d-block d-lg-none text-blue ms-4 pb-3">
                          {e.time}
                        </p>
                        <div className="mx-3 message-block-left">
                          <p className="px-3 py-3">{e.text}</p>
                        </div>
                        <p className="d-none d-lg-block text-blue ms-4 pb-3">
                          {e.time}
                        </p>
                        {del && (
                          <img
                            className="icon"
                            width="24px"
                            src={trashBlue}
                            alt="delete"
                            onClick={() => deleteHandler(e.id, chatroom)}
                          />
                        )}
                      </div>
                    )}
                  </>
                );
              } else {
                return (
                  <div
                    className="d-flex justify-content-start align-items-end mx-3 mt-3 mb-2"
                    onDrag={() => setDel(true)}
                  >
                    <img
                      className="d-none d-lg-block"
                      width="45px"
                      height="45px"
                      src={
                        chatroom.user2_photo === null
                          ? "https://via.placeholder.com/150"
                          : `${api.imgUrl}/${chatroom.user2_photo}`
                      }
                      alt="profile"
                    />
                    <p className="d-block d-lg-none text-blue ms-4 pb-3">
                      {e.time}
                    </p>
                    <div className="mx-3 message-block-left">
                      <p className="px-3 py-3">{e.text}</p>
                    </div>
                    <p className="d-none d-lg-block text-blue ms-4 pb-3">
                      {e.time}
                    </p>
                    {del && (
                      <img
                        className="icon"
                        width="24px"
                        src={trashBlue}
                        alt="delete"
                        onClick={() => deleteHandler(e.id, chatroom)}
                      />
                    )}
                  </div>
                );
              }
            }
          })}
          {/* {msg &&
            msg?.map((e, idx) => {
              if (e.sender !== auth.id) {
                return (
                  <MessageLeft
                    key={idx}
                    message={e}
                    chatroom={chatroom.chatroom_id}
                    user1_photo={chatroom.user1_photo}
                    user2_photo={chatroom.user2_photo}
                    auth={auth}
                    del={del}
                    setDel={setDel}
                    deleteHandler={deleteHandler}
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
                    auth={auth}
                    del={del}
                    setDel={setDel}
                    deleteHandler={deleteHandler}
                  />
                );
              }
            })} */}
          <div ref={divRef}></div>
        </div>
        <ChatMessageFooter
          chatroom_id={chatroom.chatroom_id}
          // update={props.update}
          sendfile={props.sendfile}
        />
      </div>
    </>
  );
}

export default ChatMessage;
