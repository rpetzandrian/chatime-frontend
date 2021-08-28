import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import {
  online,
  checklistUnread,
  checklistRead,
  pinnedIcon,
  makeAllRead,
} from "../../assets/images";
import { api } from "../../config/api";
import {
  deleteChatlist,
  editChatlist,
  saveChatlist,
} from "../../redux/actions/chatlist";
import { ChatEditing } from "./";

function Chatlist(props) {
  const { data: auth } = useSelector((s) => s.Auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const url = useLocation();
  const [edit, setEdit] = useState(false);
  const [time, setTime] = useState("few second ago");
  const classname = edit
    ? "text-decoration-none chat-list row d-flex justify-content-between align-items-center translate"
    : "text-decoration-none chat-list row d-flex justify-content-between align-items-center";

  const saveChatroom = (user, chatroom, userToken) => {
    dispatch(saveChatlist(user, chatroom, userToken));
    history.push("/chat");
  };

  const deleteChatroom = (user, chatroom, userToken) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2675ec",
      cancelButtonColor: "#ff0000",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteChatlist(user, chatroom, userToken));
        history.push("/chat");
      }
    });
  };

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
            props.data.user2_name
              ? "/chat/@" +
                props.data.user2_name.toLowerCase().split(" ").join("-") +
                "-" +
                props.data.chatroom_id +
                url.search
              : "/chat/@user-" + props.data.chatroom_id + url.search
          }
          className={classname}
          onClick={() =>
            dispatch(editChatlist(auth.id, props.data.chatroom_id, auth.token))
          }
        >
          <div className="col-2 d-flex pb-3">
            <img
              width="80px"
              height="80px"
              className="photo"
              src={
                props.data.user2_photo === null
                  ? "https://via.placeholder.com/150"
                  : `${api.imgUrl}/${props.data.user2_photo}`
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
              <div className="col-8 d-flex">
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
              <div className="col-4 overflow-auto">
                <p className="float-end time">{time}</p>
              </div>
              <div className="col-9">
                {props?.data?.lastsender === auth.id ? (
                  <p className="text">
                    Me:{" "}
                    {props.data.messagetext !== null
                      ? props?.data?.messagetext.substr(0, 30) + "..."
                      : ""}
                  </p>
                ) : (
                  <p className="text">
                    {props.data.messagetext !== null
                      ? props?.data?.messagetext.substr(0, 30) + "..."
                      : ""}
                  </p>
                )}
              </div>
              <div className="col-3">
                {props.data.unread > 0 &&
                  props?.data?.lastsender !== auth.id && (
                    <p className="unread float-end text-center">
                      {props.data.unread}
                    </p>
                  )}
                {props?.data?.lastread === false &&
                  props?.data?.lastsender === auth.id && (
                    <img
                      className="float-end"
                      width="20px"
                      height="14px"
                      src={checklistUnread}
                      alt="unread-checklist"
                    />
                  )}
                {props.data.unread <= 0 &&
                  props?.data?.lastsender !== auth.id && (
                    <img
                      className="float-end"
                      width="20px"
                      height="14px"
                      src={checklistRead}
                      alt="read-checklist"
                    />
                  )}
                {props?.data?.lastread === true &&
                  props?.data?.lastsender === auth.id && (
                    <img
                      className="float-end"
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
            makeAllRead={() =>
              dispatch(
                editChatlist(auth.id, props.data.chatroom_id, auth.token)
              )
            }
            save={() =>
              saveChatroom(auth.id, props.data.chatroom_id, auth.token)
            }
            delete={() =>
              deleteChatroom(auth.id, props.data.chatroom_id, auth.token)
            }
          />
        )}
      </div>
    </>
  );
}

export default Chatlist;
