import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Loading } from ".";
import {
  backButton,
  ChatBlack,
  dataStorage,
  deviceIcon,
  notifIcon,
  secretBlack,
} from "../assets/images";
import { api } from "../config/api";
import { getProfile } from "../redux/actions/user";

function Setting() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { data: auth } = useSelector((s) => s.Auth);
  const { data: profile, loading, error } = useSelector((s) => s.User);

  useEffect(() => {
    dispatch(getProfile(auth.id, auth.token));
  }, []);

  return (
    <>
      {loading && <Loading />}

      <section className="d-none d-md-block profile">
        <div className="row px-3 mx-3 mt-4 w-100">
          <div className="col-1" onClick={() => history.push("/chat")}>
            <img className="back icon" src={backButton} alt="back" />
          </div>
          <div className="text-center col-11">
            <p className="username-title text-blue">
              @{profile.username || ""}
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <img
              src={
                profile.images
                  ? `${api.imgUrl}/${profile.images}`
                  : "https://via.placeholder.com/150"
              }
              alt="profile"
            />
            <h3 className="mt-2">{profile.name || ""}</h3>
            <p className="username">@{profile.username || ""}</p>
          </div>
        </div>
        <div className="row px-3 mx-3 mt-3">
          <div className="col-12">
            <h4 className="mt-2">Account</h4>
            <p className="mt-3 phone">{profile.phone}</p>
            <p className="change-number text-blue">
              Tap to change phone number
            </p>
          </div>
          <hr className="mt-3 px-3" />
        </div>
        <div className="row px-3 mx-3 mt-3">
          <div className="col-12">
            <h4 className="mt-2">@{profile.username || ""}</h4>
            <p className="username">Username</p>
          </div>
          <hr className="mt-3 px-3" />
        </div>
        <div className="row px-3 mx-3 mt-3">
          <div className="col-12">
            <h4 className="mt-2">{profile.bio || ""}</h4>
            <p className="username">Bio</p>
          </div>
          <hr className="mt-3 px-3" />
        </div>
        <div className="row px-3 mx-3 mt-3 mb-2">
          <div className="col-12">
            <h4 className="mt-2">Settings</h4>
            <div className="row">
              <div className="col-12 d-flex link">
                <img className="icon" src={notifIcon} alt="Notif" />
                <p className="ms-3 pt-3 setting">Notification and Sounds</p>
              </div>
              <div className="col-12 d-flex link">
                <img className="icon" src={secretBlack} alt="Secret" />
                <p className="ms-3 pt-3 setting">Privaty and Security</p>
              </div>
              <div className="col-12 d-flex link">
                <img className="icon" src={dataStorage} alt="Data" />
                <p className="ms-3 pt-3 setting">Data and Stronge</p>
              </div>
              <div className="col-12 d-flex link">
                <img className="icon" src={ChatBlack} alt="Chat" />
                <p className="ms-3 pt-3 setting">Chat Settings</p>
              </div>
              <div className="col-12 d-flex link">
                <img className="icon" src={deviceIcon} alt="Device" />
                <p className="ms-3 pt-3 setting">Devices</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Setting;
