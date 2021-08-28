import React from "react";
import { reply, reject } from "../../assets/images";
import photo from "../../assets/images/Rectangle 8-4.png";

function IncomingCalls(props) {
  return (
    <>
      <div
        className={
          props.device === "mobile"
            ? "d-flex d-md-none justify-content-center incoming-calls"
            : "d-none d-md-flex justify-content-center incoming-calls"
        }
      >
        <div className="row justify-content-center call-box">
          <div className="col-12 d-flex justify-content-center mx-3 pt-3">
            <img src={photo} alt="caller" />
            <p className="ms-2 pt-3 caller-from">
              <span>Calvin Flores</span> call you
            </p>
          </div>
          <div className="col-12 d-flex justify-content-center mx-3 pt-3 mb-3">
            <div className="row">
              <div className="col-6 d-flex justify-content-center border-end response">
                <img src={reply} alt="reply" />
                <p className="ms-2 text-green">Reply</p>
              </div>
              <div className="col-6 d-flex justify-content-center response">
                <img src={reject} alt="rejected" />
                <p className="ms-2 text-red">Reject</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IncomingCalls;
