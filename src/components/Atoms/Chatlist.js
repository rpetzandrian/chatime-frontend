import React from "react";
import { Link } from "react-router-dom";
import {
  online,
  checklistUnread,
  checklistRead,
  pinnedIcon,
} from "../../assets/images";

function Chatlist(props) {
  return (
    <>
      <div className="position-relative ms-4">
        <Link
          to={"/chat/" + props.data.name.toLowerCase().split(" ").join("-")}
          className="text-decoration-none chat-list row d-flex justify-content-between align-items-center"
        >
          <div className="col-2 d-flex pb-3">
            <img className="photo" src={props.data.photo} alt="Photo1" />
            {props.data.isOnline && (
              <img
                width="24vw"
                className="status"
                src={online}
                alt="online-status"
              />
            )}
          </div>
          <div className="col-10 chat-info">
            <div className="row justify-content-between ms-4 ms-md-3">
              <div className="col-9 d-flex">
                <p className="name">{props.data.name}</p>
                {props.data.isPinned && (
                  <span className="ms-3">
                    <img
                      width="12px"
                      height="12px"
                      src={pinnedIcon}
                      alt="Pinned Chat"
                    />
                  </span>
                )}
              </div>
              <div className="col-3">
                <p className="time">{props.data.time}</p>
              </div>
              <div className="col-9">
                {props.data.sender === 1 ? (
                  <p className="text">Me: {props.data.lastMessage}</p>
                ) : (
                  <p className="text">{props.data.lastMessage}</p>
                )}
              </div>
              <div className="col-3">
                {props.data.unread !== 0 && props.data.sender !== 1 && (
                  <p className="unread text-center">{props.data.unread}</p>
                )}
                {props.data.unread !== 0 && props.data.sender === 1 && (
                  <img
                    width="20px"
                    height="14px"
                    src={checklistUnread}
                    alt="unread-checklist"
                  />
                )}

                {props.data.unread === 0 && (
                  <img
                    width="20px"
                    height="14px"
                    src={checklistRead}
                    alt="read-checklist"
                  />
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Chatlist;
