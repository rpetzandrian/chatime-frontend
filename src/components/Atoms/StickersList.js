import React from "react";

function StickersList(props) {
  return (
    <>
      <img
        width="36px"
        height="36px"
        className="me-4 sticker-category"
        src={props.sticker}
        alt="Sticker"
      />
    </>
  );
}

export default StickersList;
