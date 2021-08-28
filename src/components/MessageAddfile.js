import React from "react";
import { MessageAddFile, MessageAddFileMd, MessageAddFileSm } from "./Atoms";

function MessageAddfile({ type, sendFile }) {
  return (
    <>
      {/* Deskstop */}
      <MessageAddFile type={(a) => type(a)} sendFile={() => sendFile()} />

      {/* Md */}
      <MessageAddFileMd type={type} />

      {/* Sm */}
      <MessageAddFileSm type={type} />
    </>
  );
}

export default MessageAddfile;
