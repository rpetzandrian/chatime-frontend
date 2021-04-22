import React from "react";
import { MessageAddFile, MessageAddFileMd, MessageAddFileSm } from "./Atoms";

function MessageAddfile({ type }) {
  return (
    <>
      {/* Deskstop */}
      <MessageAddFile type={(a) => type(a)} />

      {/* Md */}
      <MessageAddFileMd type={type} />

      {/* Sm */}
      <MessageAddFileSm type={type} />
    </>
  );
}

export default MessageAddfile;
