import React from "react";
import {
  settings,
  contacts,
  calls,
  bookmarks,
  invite,
  FAQ,
} from "../../assets/images";

function Menu() {
  return (
    <>
      <div className="d-none d-md-block menu">
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-start mt-2 ps-5">
            <img width="22px" height="22px" src={settings} alt="Setting" />
            <p className="menu-list ms-4">Setting</p>
          </div>
          <div className="col-12 d-flex justify-content-start mt-2 ps-5">
            <img width="22px" height="22px" src={contacts} alt="Setting" />
            <p className="menu-list ms-4">Contact</p>
          </div>
          <div className="col-12 d-flex justify-content-start mt-2 ps-5">
            <img width="22px" height="22px" src={calls} alt="Setting" />
            <p className="menu-list ms-4">Calls</p>
          </div>
          <div className="col-12 d-flex justify-content-start mt-2 ps-5">
            <img width="22px" height="22px" src={bookmarks} alt="Setting" />
            <p className="menu-list ms-4">Save Messages</p>
          </div>
          <div className="col-12 d-flex justify-content-start mt-2 ps-5">
            <img width="22px" height="22px" src={invite} alt="Setting" />
            <p className="menu-list ms-4">Invite Friends</p>
          </div>
          <div className="col-12 d-flex justify-content-start mt-2 ps-5">
            <img width="22px" height="22px" src={FAQ} alt="Setting" />
            <p className="menu-list ms-4">Chatime FAQ</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
