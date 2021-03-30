import React from "react";
import { Link } from "react-router-dom";

function AuthButtonPrimary(props) {
  return (
    <Link to="chatlist.html" className="btn btn-custom-primary mb-35">
      {props.text}
    </Link>
  );
}

export default AuthButtonPrimary;
