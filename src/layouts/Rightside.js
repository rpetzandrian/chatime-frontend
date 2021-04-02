import React from "react";
import { Calling } from "../components";
import { IncomingCalls } from "../components/Atoms";

function Rightside() {
  return (
    <>
      <div className="d-none d-md-block overflow-hidden col-md-7 col-xl-8 rightside">
        <div className="row w-100 h-100 align-content-center">
          <p className="empty-chat text-secondary text-center">
            Please select a chat to start messaging
          </p>
        </div>

        {/* Incoming Calls */}
        {/* <IncomingCalls device="desktop" /> */}
        {/* End Incoming Calls */}

        {/* Call History */}
        {/* <Calling device="desktop" /> */}
        {/* End Call History */}
      </div>
    </>
  );
}

export default Rightside;
