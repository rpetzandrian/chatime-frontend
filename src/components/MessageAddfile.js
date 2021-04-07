import React from "react";
import { MessageAddFile, MessageAddFileMd, MessageAddFileSm } from "./Atoms";

function MessageAddfile() {
  return (
    <>
      {/* Deskstop */}
      <MessageAddFile />

      {/* Md */}
      <MessageAddFileMd />

      {/* Sm */}
      <MessageAddFileSm />
    </>
  );
}

export default MessageAddfile;
