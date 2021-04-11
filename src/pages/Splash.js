import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { logo } from "../assets/images";

function Splash() {
  const history = useHistory();
  const userToken = localStorage.getItem("token");

  return (
    <>
      {/*  Start Splash Screen */}
      <main className="container-fluid">
        <div className="row splash-bg align-content-center">
          <img className="col splash-logo" src={logo} alt="Logo Chatime" />
        </div>
      </main>
      {/* End Splash Screen */}
    </>
  );
}

export default Splash;
