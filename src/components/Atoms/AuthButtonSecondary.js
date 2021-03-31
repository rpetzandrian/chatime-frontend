import React from "react";
import { Link } from "react-router-dom";
import { googleIcon } from "../../assets/images";

function AuthButtonSecondary(props) {
  return (
    <div>
      <Link
        to={props.to}
        className="btn btn-custom-secondary mb-35 text-center"
      >
        <img
          className="me-3"
          width="25px"
          height="25px"
          src={googleIcon}
          alt="Gmail"
        />
        {props.text}
      </Link>
    </div>
  );
}

export default AuthButtonSecondary;
