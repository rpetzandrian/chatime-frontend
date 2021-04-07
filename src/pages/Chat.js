import React from "react";
import { Leftside, Rightside } from "../layouts";

function Chat() {
  return (
    <>
      <main className="container-fluid container-custom">
        <div className="row g-0">
          <Leftside />

          <Rightside />
        </div>
      </main>
    </>
  );
}

export default Chat;
