import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emote, plusIcon, rectangle } from "../../assets/images";
import { api } from "../../config/api";
import { addMessages } from "../../redux/actions/messages";

function ChatMessageFooter({ chatroom_id, update, sendfile }) {
  const dispatch = useDispatch();
  const { data: auth } = useSelector((s) => s.Auth);
  const [message, setMessage] = useState({
    chatroom_id: chatroom_id,
    sender: auth.id,
    text: "",
  });

  const changeMessageData = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const addNewMessage = (e) => {
    e.preventDefault();
    if (message.text !== "") {
      dispatch(addMessages(auth.id, auth.token, message, null, setMessage));
      update();
    }
  };

  return (
    <>
      {/* Form Message */}
      <section className="d-flex justify-content-center align-items-center form-message">
        <div className="input-group mb-3 mx-5">
          <form onSubmit={(e) => addNewMessage(e)} className="w-100 d-flex g-0">
            <input
              type="text"
              name="text"
              className="form-control px-4 mt-3 input-message"
              placeholder="Type your message..."
              aria-label="Type your message..."
              value={message.text}
              onChange={(e) => changeMessageData(e)}
            />
            <div className="input-group-text mt-3 input-group-text-custom">
              <div className="d-none d-lg-flex justify-content-center float-end send-other">
                <img
                  onClick={() => sendfile()}
                  className="mx-1 icon"
                  width="20px"
                  height="20px"
                  src={plusIcon}
                  alt=""
                />
                <img
                  className="mx-1 icon"
                  width="20px"
                  height="20px"
                  src={emote}
                  alt=""
                />
                <img
                  className="mx-1 icon"
                  width="20px"
                  height="20px"
                  src={rectangle}
                  alt=""
                />
              </div>
              <div
                className="d-flex d-lg-none justify-content-end float-end send-other"
                onClick={() => sendfile()}
              >
                <img
                  className="mx-2"
                  width="20px"
                  height="20px"
                  src={plusIcon}
                  alt=""
                />
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* End Form Message */}
    </>
  );
}

export default ChatMessageFooter;
