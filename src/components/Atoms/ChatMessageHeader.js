import React from "react";
import { Link, useLocation } from "react-router-dom";
import { backButton, profileMenu } from "../../assets/images";
import photo from "../../assets/images/Rectangle 8-1.png";

function ChatMessageHeader(props) {
  const url = useLocation();
  return (
    <>
      {/* Header */}
      <header className="message-header">
        <div className="row align-items-center bg-white py-2 ps-4">
          <div className="col-10 d-flex">
            <Link className="d-block d-md-none me-3 pt-4" to="/chat">
              <img width="22px" height="22px" src={backButton} alt="back" />
            </Link>
            <Link
              className="text-decoration-none chat-partner d-flex justify-content-start align-items-center"
              to={url.pathname + "/contact-info"}
            >
              <img
                width="64px"
                src={
                  props.data.user2_photo === null
                    ? "https://via.placeholder.com/150"
                    : `http://localhost:8000/${props.data.user2_photo}`
                }
                alt="partner profile"
              />
              <div className="chat-partner-desc pt-3 ms-4">
                <h5 className="name-partner">{props.data.user2_name}</h5>
                <p className="text-blue">
                  {props.data.is_online ? "Online" : "Offline"}
                </p>
              </div>
            </Link>
          </div>
          <div className="col-auto col-lg-auto">
            <img
              className="menu-profile"
              width="22px"
              height="22px"
              src={profileMenu}
              alt="menu-profile"
            />
          </div>
        </div>
      </header>
      {/* End Header */}
    </>
  );
}

export default ChatMessageHeader;
