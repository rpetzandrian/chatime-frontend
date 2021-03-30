import React from "react";
import { Link } from "react-router-dom";
import { backButton } from "../assets/images";

function AuthHeader(props) {
  return (
    <>
      <div className="d-flex align-items-center mb-35 mt-42">
        {props.back && (
          <Link to={props.back}>
            <img className="back-button" src={backButton} alt="back" />
          </Link>
        )}
        <h3 className="text-center form-header mx-auto">{props.title}</h3>
      </div>
    </>
  );
}

export default AuthHeader;
