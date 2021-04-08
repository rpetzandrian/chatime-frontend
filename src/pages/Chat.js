import axios from "axios";
import React, { useEffect } from "react";
import { api } from "../config/api";
import { Leftside, Rightside } from "../layouts";

function Chat() {
  const tokenCheck = localStorage.getItem("token");
  const userId = localStorage.getItem("userID");
  console.log(tokenCheck, userId);

  useEffect(() => {
    axios
      .get(`${api.baseUrl}/chatrooms/${userId}`, {
        headers: api.headers["user-token"],
      })
      .then((res) => console.log(res));
  }, []);
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
