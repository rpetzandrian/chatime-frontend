import React, { useState } from "react";
import photo from "../../assets/images/Rectangle 8-1.png";
import image from "../../assets/images/cars.png";
import { api } from "../../config/api";
import { trashBlue } from "../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessages } from "../../redux/actions/messages";

function MessageLeft(props) {
  const dispatch = useDispatch();
  const { data: auth } = useSelector((s) => s.Auth);
  const [del, setDel] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const deleteHandler = (message, chatroom) => {
    setDel(false);
    dispatch(deleteMessages(auth.id, auth.token, message, chatroom));
  };

  return (
    <>
      {props.message.images === null && (
        <div
          className="d-flex justify-content-start align-items-end mx-3 mt-3 mb-2"
          onDrag={() => setDel(true)}
        >
          <img
            className="d-none d-lg-block"
            width="45px"
            height="45px"
            src={
              props.user2_photo === null
                ? "https://via.placeholder.com/150"
                : `${api.imgUrl}/${props.user2_photo}`
            }
            alt="profile"
          />
          <p className="d-block d-lg-none text-blue ms-4 pb-3">
            {props.message.time}
          </p>
          <div className="mx-3 message-block-left">
            <p className="px-3 py-3">{props.message.text}</p>
          </div>
          <p className="d-none d-lg-block text-blue ms-4 pb-3">
            {props.message.time}
          </p>
          {del && (
            <img
              className="icon"
              width="24px"
              src={trashBlue}
              alt="delete"
              onClick={() => deleteHandler(props.message.id, props.chatroom)}
            />
          )}
        </div>
      )}

      {props.message.images && (
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
                props.user2_photo === null
                  ? "https://via.placeholder.com/150"
                  : `${api.imgUrl}/${props.user2_photo}`
              }
              alt="sender"
            />
            <p className="d-block d-lg-none text-blue ms-4 pb-3">
              {props.message.time}
            </p>
            <div className="mx-3 message-block-left">
              <img
                className="chat-image"
                src={`${api.imgUrl}/${props.message.images}`}
                alt="images"
              />
            </div>
            <p className="d-none d-lg-block text-blue ms-4 pb-3">
              {props.message.time}
            </p>
            {del && (
              <img
                className="icon"
                width="24px"
                src={trashBlue}
                alt="delete"
                onClick={() => deleteHandler(props.message.id, props.chatroom)}
              />
            )}
          </div>
          {props.message.text && (
            <div
              className="d-flex justify-content-start align-items-end mx-3 mt-3 mb-2"
              onDrag={() => setDel(true)}
            >
              <img
                className="d-none d-lg-block"
                width="45px"
                height="45px"
                src={
                  props.user2_photo === null
                    ? "https://via.placeholder.com/150"
                    : `${api.imgUrl}/${props.user2_photo}`
                }
                alt="sender"
              />
              <p className="d-block d-lg-none text-blue ms-4 pb-3">
                {props.message.time}
              </p>
              <div className="mx-3 message-block-left">
                <p className="px-3 py-3">{props.message.text}</p>
              </div>
              <p className="d-none d-lg-block text-blue ms-4 pb-3">
                {props.message.time}
              </p>
              {del && (
                <img
                  className="icon"
                  width="24px"
                  src={trashBlue}
                  alt="delete"
                  onClick={() =>
                    deleteHandler(props.message.id, props.chatroom)
                  }
                />
              )}
            </div>
          )}
        </>
      )}
    </>
  );
}

export default MessageLeft;
