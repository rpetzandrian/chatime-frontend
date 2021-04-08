import React from "react";
import { Link } from "react-router-dom";

function AuthButtonPrimary(props) {
  return (
    <div
      onClick={(e) => props.onClick(e)}
      className="btn btn-custom-primary mb-35"
    >
      {props.text}
    </div>
  );
}

export default AuthButtonPrimary;
