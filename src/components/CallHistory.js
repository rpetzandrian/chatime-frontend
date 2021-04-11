import React from "react";
import { CallList } from "./Atoms";
import { backButton } from "../assets/images";
import { useHistory } from "react-router-dom";

function CallHistory(props) {
  const history = useHistory();

  return (
    <>
      {/* Call-History */}
      <section className="call-history">
        <div className="row mx-3 px-3 mt-42">
          <div onClick={() => history.push("/chat")} className="col-2">
            <img className="back icon" src={backButton} alt="back-menu" />
          </div>
          <div className="col-10 text-center">
            <p className="text-blue title">Call History</p>
          </div>
        </div>
        <div className="row gy-0 align-items-start mx-3 px-3 mt-3 scroolbar-none overflow-auto">
          <CallList name="Brother" time="18.02.2020 at 19:30" />
          <CallList name="Brother" time="18.02.2020 at 19:30" />
          <CallList name="Brother" time="18.02.2020 at 19:30" />
        </div>
      </section>
      {/* End Call History */}
    </>
  );
}

export default CallHistory;
