import React, { useEffect } from "react";
import { Leftside, Rightside } from "../layouts";
import { useSelector } from "react-redux";
import { socket } from "../libs/socket";

function Chat({ userToken }) {
  const { data } = useSelector(state => state.Auth)

  // useEffect(() => {

  //   socket.emit('online', data.id)

  //   // socket.emit('offline', data.id)

  // }, [data])

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
