import React from "react";
import { Leftside, Rightside } from "../layouts";

function Chat({ userToken }) {
  return (
    <>
      <main className="container-fluid container-custom">
        <div className="row g-0">
          <Leftside userToken={userToken} />

          <Rightside userToken={userToken} />
        </div>
      </main>
    </>
  );
}

export default Chat;
