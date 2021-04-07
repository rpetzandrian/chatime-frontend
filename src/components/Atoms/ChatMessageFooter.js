import React from "react";
import { emote, plusIcon, rectangle } from "../../assets/images";

function ChatMessageFooter() {
  return (
    <>
      {/* Form Message */}
      <section className="d-flex justify-content-center align-items-center form-message">
        <div className="input-group mb-3 mx-5">
          <input
            type="text"
            className="form-control px-4 mt-3 input-message"
            placeholder="Type your message..."
            aria-label="Type your message..."
          />
          <div className="input-group-text mt-3 input-group-text-custom">
            <div className="d-none d-lg-flex justify-content-center float-end send-other">
              <img
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
            <div className="d-flex d-lg-none justify-content-end float-end send-other">
              <img
                className="mx-2"
                width="20px"
                height="20px"
                src={plusIcon}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Form Message */}
    </>
  );
}

export default ChatMessageFooter;
