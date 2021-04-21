import React from "react";
import { useHistory } from "react-router";
import {
  backButton,
  settingsBlue,
  callsBlue,
  contactsBlue,
  inviteBlue,
  bookmarksBlue,
  FAQBlue,
} from "../../assets/images";
import photo from "../../assets/images/gloria.png";

function MenuMobile(props) {
  const history = useHistory();
  return (
    <>
      <div className="d-block d-md-none menu-mobile">
        <div className="row justify-content-between mt-4 mx-3 px-3">
          <div className="col" onClick={() => props.menuHandler()}>
            <img
              className="icon"
              width="24px"
              height="24px"
              src={backButton}
              alt="Back"
            />
          </div>
          <div className="col">
            <img
              className="float-end icon"
              width="24px"
              height="24px"
              src={settingsBlue}
              alt="Setings"
            />
          </div>
        </div>
        <div className="row justify-content-center mx-3 px-3 mt-5">
          <div className="col-12 d-flex justify-content-start">
            <img src={photo} alt="Gloria" />
            <p className="ms-3 name-profile">
              Gloria <br />
              Mckinney
            </p>
          </div>
        </div>
        <div className="row mx-3 mt-42">
          <div className="col-12 d-flex justify-content-start mb-35 link">
            <img
              width="24px"
              height="24px"
              className="mx-3"
              src={contactsBlue}
              alt="Contacts"
              onClick={() => {
                history.push("/contact");
              }}
            />
            <p className="text-blue ms-1 menu-list">Contacts</p>
          </div>
          <div className="col-12 d-flex justify-content-start mb-35 link">
            <img
              width="24px"
              height="24px"
              className="mx-3"
              src={callsBlue}
              alt="Calls"
              onClick={() => {
                history.push("/call-history");
              }}
            />
            <p className="text-blue ms-1 menu-list">Calls</p>
          </div>
          <div className="col-12 d-flex justify-content-start mb-35 link">
            <img
              width="24px"
              height="24px"
              className="mx-3"
              src={bookmarksBlue}
              alt="Save Messages"
            />
            <p className="text-blue ms-1 menu-list">Save Messages</p>
          </div>
          <div className="col-12 d-flex justify-content-start mb-35 link">
            <img
              width="24px"
              height="24px"
              className="mx-3"
              src={inviteBlue}
              alt="Invite Friends"
            />
            <p className="text-blue ms-1 menu-list">Invite Friends</p>
          </div>
          <div className="col-12 d-flex justify-content-start mb-35 link">
            <img
              width="24px"
              height="24px"
              className="mx-3"
              src={FAQBlue}
              alt="Chatime FAQ"
            />
            <p className="text-blue ms-1 menu-list">Chatime FAQ</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuMobile;
