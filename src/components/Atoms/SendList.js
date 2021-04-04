import React from "react";

function SendList(props) {
  return (
    <>
      <div className="col mb-3 img">
        <img src={props.images} alt="send" />
      </div>
    </>
  );
}

export default SendList;
