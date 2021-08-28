import React from "react";
import { logo } from "../assets/images";

function Loading() {
  return (
    <>
      <main className="container-fluid">
        <div className="row splash-loading align-content-center">
          <img className="col splash-logo" src={logo} alt="Logo Chatime" />
        </div>
      </main>
    </>
  );
}

export default Loading;
