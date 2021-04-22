import React from "react";
import { api } from "../../config/api";

function MessageRight(props) {
  return (
    <>
      {props.message.images === null && (
        <div className="d-flex justify-content-end align-items-start mx-3 mt-3 mb-2">
          <p className="d-none d-lg-block text-blue ms-4 pt-4">
            {props.message.time}
          </p>
          <div className="mx-3 message-block-right">
            <p className="px-3 py-3">{props.message.text}</p>
          </div>
          <p className="d-block d-lg-none text-blue ms-4 pt-4">
            {props.message.time}
          </p>
          <img
            className="d-none d-lg-block"
            width="45px"
            height="45px"
            src={
              props.user1_photo === null
                ? "https://via.placeholder.com/150"
                : `${api.imgUrl}/${props.user1_photo}`
            }
            alt="profile"
          />
        </div>
      )}

      {props.message.images && (
        <>
          <div className="d-flex justify-content-end align-items-start mx-3 mt-3 mb-2">
            <p className="d-none d-lg-block text-blue ms-4 pt-4">
              {props.message.time}
            </p>
            <div className="mx-3 message-block-right">
              <img
                className="chat-image"
                src={`${api.imgUrl}/${props.message.images}`}
                alt="images"
              />
            </div>
            <p className="d-block d-lg-none text-blue ms-4 pt-4">
              {props.message.time}
            </p>
            <img
              className="d-none d-lg-block invisible"
              width="45px"
              height="45px"
              src={
                props.user1_photo === null
                  ? "https://via.placeholder.com/150"
                  : `${api.imgUrl}/${props.user1_photo}`
              }
              alt="sender"
            />
          </div>
          {props.message.text && (
            <div className="d-flex justify-content-end align-items-start mx-3 mt-3 mb-2">
              <p className="d-none d-lg-block text-blue ms-4 pt-4">
                {props.message.time}
              </p>
              <div className="mx-3 message-block-right">
                <p className="px-3 py-3">{props.message.text}</p>
              </div>
              <p className="d-block d-lg-none text-blue ms-4 pt-4">
                {props.message.time}
              </p>
              <img
                className="d-none d-lg-block"
                width="45px"
                height="45px"
                src={
                  props.user1_photo === null
                    ? "https://via.placeholder.com/150"
                    : `${api.imgUrl}/${props.user1_photo}`
                }
                alt="sender"
              />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default MessageRight;
