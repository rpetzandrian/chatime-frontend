import React from "react";
import { useHistory } from "react-router-dom";
import { backButton, chatBlue } from "../assets/images";
import { SendList } from "./Atoms";
import profile from "../assets/images/Rectangle 8-1.png";
import photo from "../assets/images/Rectangle 38.png";

function ContactInfo() {
  const history = useHistory();

  return (
    <>
      {/* Contact Info */}
      <section className="d-grid contact-info">
        <div className="row justify-content-center px-3 mt-4 w-100">
          <div className="col-2" onClick={() => history.goBack()}>
            <img
              width="22px"
              height="22px"
              className="back icon"
              src={backButton}
              alt="back"
            />
          </div>
          <div className="text-center col-3">
            <p className="username-title text-blue">@mmldolg</p>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12 text-center">
            <img src={profile} alt="profile" />
          </div>
          <div className="col-12 d-flex justify-content-between mt-3 px-5">
            <div className="user-info">
              <p className="name">Mother</p>
              <p className="status">Online</p>
            </div>
            <div className="pt-3" onClick={() => history.goBack()}>
              <img width="24px" height="24px" src={chatBlue} alt="chat" />
            </div>
          </div>
        </div>
        <div className="row px-3 mx-3 mt-3">
          <div className="col-12">
            <h4 className="mt-2">Phone Number</h4>
            <p className="mt-3 phone">+375(29)9239003</p>
          </div>
          <hr className="mt-3 px-3" />
        </div>
        <div className="row mt-3 ms-3 me-3 file-list">
          <div className="col-4 text-center">
            <p className>Location</p>
          </div>
          <div className="col-4 text-center">
            <p className="active">Image</p>
          </div>
          <div className="col-4 text-center">
            <p className>Document</p>
          </div>
        </div>
        <div className="row row-cols-auto justify-content-center ms-3 me-3 list">
          <SendList images={photo} none={true} />
          <SendList images={photo} none={true} />
        </div>
      </section>
      {/* End Contact Info */}
    </>
  );
}

export default ContactInfo;
