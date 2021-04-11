import React from "react";
import { bookmarks, makeAllRead, trash } from "../../assets/images";

function ChatEditing(props) {
  return (
    <>
      <div className="d-flex me-1 me-md-3 justify-content-evenly editing">
        <img
          className="mx-3 icon"
          width="22px"
          src={bookmarks}
          alt="Save Message"
          onClick={() => props.save(props.user, props.chatroom_id)}
        />
        <img
          className="mx-3 icon"
          width="26px"
          src={makeAllRead}
          alt="make all read"
          onClick={() => props.makeAllRead(props.user, props.chatroom_id)}
        />
        <img
          className="mx-3 icon"
          width="22px"
          src={trash}
          alt="Delete chat"
          onClick={() => props.delete(props.user, props.chatroom_id)}
        />
      </div>
    </>
  );
}

export default ChatEditing;
