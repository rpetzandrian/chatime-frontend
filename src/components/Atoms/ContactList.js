import React from "react";
import { chatBlue, trashBlue } from "../../assets/images";
import photo from "../../assets/images/gloria.png";

function ContactList({ data, addChatroom }) {
  const userId = localStorage.getItem("userID");
  return (
    <>
      <div className="col-12 d-flex justify-content-between">
        <img
          width="82px"
          height="82px"
          src={
            data.photo === null
              ? "https://via.placeholder.com/150"
              : `http://localhost:8000/${data.photo}`
          }
          alt="profile-img"
        />
        <div className="ms-3 pt-3 w-75 call-info">
          <h3 className="name">{data.friend_name || data.phone}</h3>
          <div className="d-flex">
            <p className="text-secondary">@{data.username}</p>
          </div>
        </div>
        <img
          width="24px"
          height="24px"
          src={chatBlue}
          alt="plus"
          className="mt-4 mx-3 icon"
          onClick={() =>
            addChatroom(userId, data.friend_id, data.friend_name || data.phone)
          }
        />
        <img
          width="24px"
          height="24px"
          src={trashBlue}
          alt="delete"
          className="mt-4 mx-3 icon"
        />
      </div>
    </>
  );
}

export default ContactList;
