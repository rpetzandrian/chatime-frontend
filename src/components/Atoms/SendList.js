import React from "react";

function SendList(props) {
  return (
    <>
      <div className={(props.none && "col mb-3") || "col mb-3 img"}>
        <img
          width={props.none && "85px"}
          height={props.none && "85px"}
          src={props.images}
          alt="send"
        />
      </div>
    </>
  );
}

export default SendList;
