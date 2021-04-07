import React from "react";
import { bookmarks, makeAllRead, trash } from "../../assets/images";

function ChatEditing() {
  return (
    <>
      <div class="d-flex me-1 me-md-3 justify-content-evenly editing">
        <img class="mx-3" width="22px" src={bookmarks} alt="Save Message" />
        <img class="mx-3" width="26px" src={makeAllRead} alt="make all read" />
        <img class="mx-3" width="22px" src={trash} alt="Delete chat" />
      </div>
    </>
  );
}

export default ChatEditing;
