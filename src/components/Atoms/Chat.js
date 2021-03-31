import React from "react";
import {
  online,
  checklistUnread,
  checklistRead,
  pinnedIcon,
} from "../../assets/images";

function Chat(props) {
  return (
    <>
      <div class="position-relative ms-4">
        <a
          href="messages.html"
          class="text-decoration-none chat-list row d-flex justify-content-between align-items-center"
        >
          <div class="col-2 d-flex pb-3">
            <img class="photo" src={props.data.photo} alt="Photo1" />
            {props.data.isOnline && (
              <img
                width="24vw"
                class="status"
                src={online}
                alt="online-status"
              />
            )}
          </div>
          <div class="col-10 chat-info">
            <div class="row justify-content-between ms-4 ms-md-3">
              <div class="col-9 d-flex">
                <p class="name">{props.data.name}</p>
                {props.data.isPinned && (
                  <span class="ms-3">
                    <img
                      width="12px"
                      height="12px"
                      src={pinnedIcon}
                      alt="Pinned Chat"
                    />
                  </span>
                )}
              </div>
              <div class="col-3">
                <p class="time">{props.data.time}</p>
              </div>
              <div class="col-9">
                {props.data.sender === 1 ? (
                  <p class="text">Me: {props.data.lastMessage}</p>
                ) : (
                  <p class="text">{props.data.lastMessage}</p>
                )}
              </div>
              <div class="col-3">
                {props.data.unread !== 0 && props.data.sender !== 1 && (
                  <p class="unread text-center">{props.data.unread}</p>
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
        </a>
      </div>
    </>
  );
}

export default Chat;
