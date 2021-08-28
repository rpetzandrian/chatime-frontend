import React from "react";
import { Link } from "react-router-dom";
import {
  BackgroundCalls,
  chatWhite,
  speaker,
  toEndCall,
} from "../assets/images";
import photo from "../assets/images/Rectangle 8-1.png";

function Calling(props) {
  return (
    <>
      {/* Call */}
      <section
        className={
          props.device === "mobile" ? "d-block d-md-none" : "d-none d-md-block"
        }
      >
        <div className="call-bg" />
        <div className="call">
          <img className="img-bg" src={BackgroundCalls} alt="call-bg" />
          <div className="row justify-content-center mt-5">
            <div className="col-12 d-flex justify-content-center">
              <img className="caller-img" src={photo} alt="" />
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <h2 className="text-medium text-white">{props.name}</h2>
            <p className="text-white">{props.duration}</p>
          </div>
          <div className="col-12 w-100 d-flex justify-content-center align-item-center position-absolute call-action">
            <Link to="/chat">
              <img
                className="mx-4 mt-3"
                width="28px"
                height="28px"
                src={chatWhite}
                alt="chat"
              />
            </Link>
            <Link to="./chat">
              <img
                className="mx-3"
                width="72px"
                height="72px"
                src={toEndCall}
                alt="chat"
              />
            </Link>
            <Link to="./chat">
              <img
                className="mx-4 mt-3"
                width="28px"
                height="28px"
                src={speaker}
                alt="chat"
              />
            </Link>
          </div>
        </div>
      </section>
      {/* End Call */}
    </>
  );
}

export default Calling;
