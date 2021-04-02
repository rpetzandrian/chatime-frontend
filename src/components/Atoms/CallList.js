import React from "react";
import { callSuccess } from "../../assets/images";
import photo from "../../assets/images/Rectangle 8.png";

function CallList(props) {
  return (
    <>
      <div className="col-12 d-flex">
        <img width="82px" height="82px" src={photo} alt="profile-img" />
        <div className="ms-3 pt-2 call-info">
          <p className="name">{props.name}</p>
          <div className="d-flex">
            <img width="18px" height="18px" src={callSuccess} alt="call" />
            <p className="ms-3 text-secondary">{props.time}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CallList;
