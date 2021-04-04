import React from "react";
import { calls, trash, mute, search2 } from "../../assets/images";

function ChatMessageMenu() {
  return (
    <>
      {/* Menu */}
      <div className="menu message-menu">
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-start mt-2 ps-5">
            <img width="22px" height="22px" src={calls} alt="Setting" />
            <p className="menu-list ms-4">Calls</p>
          </div>
          <div className="col-12 d-flex justify-content-start mt-2 ps-5">
            <img width="22px" height="22px" src={trash} alt="Setting" />
            <p className="menu-list ms-4">Delete Chat History</p>
          </div>
          <div className="col-12 d-flex justify-content-start mt-2 ps-5">
            <img width="22px" height="22px" src={mute} alt="Setting" />
            <p className="menu-list ms-4">Mute Notification</p>
          </div>
          <div className="col-12 d-flex justify-content-start mt-2 ps-5">
            <img width="22px" height="22px" src={search2} alt="Setting" />
            <p className="menu-list ms-4">Search</p>
          </div>
        </div>
      </div>
      {/* End Menu */}
    </>
  );
}

export default ChatMessageMenu;
