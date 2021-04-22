import React from "react";
import { sendIcon } from "../../assets/images";

function SendImageHeader({ send }) {
  return (
    <>
      <p className="col-auto col-md-7 col-lg-9">Image</p>
      <div
        className="col-auto col-md-auto col-lg-auto pe-5 pe-lg-3 pb-3 me-3 me-md-5"
        onClick={(e) => send(e)}
      >
        <img
          className="float-end icon"
          width="24px"
          height="24px"
          src={sendIcon}
          alt="send"
        />
      </div>
    </>
  );
}

export default SendImageHeader;
