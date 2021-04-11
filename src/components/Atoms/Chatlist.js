import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  online,
  checklistUnread,
  checklistRead,
  pinnedIcon,
  makeAllRead,
} from "../../assets/images";
import { ChatEditing } from "./";

function Chatlist(props) {
  const userId = localStorage.getItem("userID");
  const url = useLocation();
  const [edit, setEdit] = useState(false);
  const [time, setTime] = useState("few second ago");
  const classname = edit
    ? "text-decoration-none chat-list row d-flex justify-content-between align-items-center translate"
    : "text-decoration-none chat-list row d-flex justify-content-between align-items-center";

  useEffect(() => {
    let difference =
      new Date().getTime() - new Date(props.data.timestamp).getTime();

    let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
    difference -= daysDifference * 1000 * 60 * 60 * 24;

    let hoursDifference = Math.floor(difference / 1000 / 60 / 60);
    difference -= hoursDifference * 1000 * 60 * 60;

    let minutesDifference = Math.floor(difference / 1000 / 60);
    difference -= minutesDifference * 1000 * 60;

    let secondsDifference = Math.floor(difference / 1000);

    if (secondsDifference < 60 && minutesDifference < 1) {
      setTime("Few sec ago");
    } else if (
      minutesDifference >= 1 &&
      minutesDifference <= 60 &&
      hoursDifference < 1
    ) {
      setTime(`${minutesDifference} min ago`);
    } else if (hoursDifference >= 1 && daysDifference < 1) {
      setTime(
        `${new Date(props.data.timestamp).getHours()} : ${new Date(
          props.data.timestamp
        ).getMinutes()}`
      );
    } else {
      setTime(
        `${new Date(props.data.timestamp).getDate()} - ${new Date(
          props.data.timestamp
        ).getMonth()} - ${new Date(props.data.timestamp).getFullYear()}`
      );
    }
  }, [new Date().getTime()]);

  return (
    <>
      <div className="position-relative ms-4" onDragEnd={() => setEdit(!edit)}>
        <Link
          to={
            "/chat/" +
            props.data.user2_name.toLowerCase().split(" ").join("-") +
            "-" +
            props.data.id +
            url.search
          }
          className={classname}
          onClick={() => props.update(props.data.user1, props.data.id)}
        >
          <div className="col-2 d-flex pb-3">
            <img
              width="80px"
              height="80px"
              className="photo"
              src={
                props.data.user2_photo === null
                  ? "https://via.placeholder.com/150"
                  : `http://localhost:8000/${props.data.user2_photo}`
              }
              alt="Photo1"
            />
            {props.data.is_online && (
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
                <p className="name">
                  {props.data.user2_name || props.data.user2_phone}
                </p>
                {props.data.is_pinned && (
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
              <div className="col-3 overflow-auto">
                <p className="time">{time}</p>
              </div>
              <div className="col-9">
                {props.data.lastsender === userId ? (
                  <p className="text">
                    Me: {props.data.lastMessage.substr(0, 30) + "..."}
                  </p>
                ) : (
                  <p className="text">
                    {props.data.lastMessage.substr(0, 30) + "..."}
                  </p>
                )}
              </div>
              <div className="col-3">
                {props.data.unread > 0 && props.data.lastsender !== userId && (
                  <p className="unread text-center">{props.data.unread}</p>
                )}
                {props.data.lastRead === false &&
                  props.data.lastsender === userId && (
                    <img
                      width="20px"
                      height="14px"
                      src={checklistUnread}
                      alt="unread-checklist"
                    />
                  )}
                {props.data.unread <= 0 && props.data.lastsender !== userId && (
                  <img
                    width="20px"
                    height="14px"
                    src={checklistRead}
                    alt="read-checklist"
                  />
                )}
                {props.data.lastRead === true &&
                  props.data.lastsender === userId && (
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
        {edit && (
          <ChatEditing
            chatroom_id={props.data.id}
            user={props.data.user1}
            makeAllRead={props.update}
            save={props.saveChatroom}
            delete={props.deleteChatroom}
          />
        )}
      </div>
    </>
  );
}

export default Chatlist;
