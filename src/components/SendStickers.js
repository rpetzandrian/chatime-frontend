import React from "react";
import { StickerList, SendList } from "./Atoms";
import StickerCategory from "../assets/images/100-1002103_commissioned-telegram-stickers-furry-telegram-sticker 1.png";
import sticker from "../assets/images/2 1.png";
import { emote } from "../assets/images";

function SendStickers() {
  return (
    <>
      <section className="send-sticker">
        <div className="w-100 row justify-content-between align-items-center pt-1 mx-3 sticky-top send">
          <p className="col-12">Sticker</p>
          <div className="col-12 mx-3 d-flex overflow-auto sticker-list">
            <StickerList sticker={emote} />
            <StickerList sticker={StickerCategory} />
          </div>
        </div>
        <div className="row row-cols-auto w-100 justify-content-center mx-0 mx-md-3 image">
          <SendList images={sticker} />
          <SendList images={sticker} />
          <SendList images={sticker} />
          <SendList images={sticker} />
          <SendList images={sticker} />
          <SendList images={sticker} />
          <SendList images={sticker} />
          <SendList images={sticker} />
          <SendList images={sticker} />
          <SendList images={sticker} />
          <SendList images={sticker} />
          <SendList images={sticker} />
          <SendList images={sticker} />
          <SendList images={sticker} />
          <SendList images={sticker} />
          <SendList images={sticker} />
          <SendList images={sticker} />
          <SendList images={sticker} />
          <SendList images={sticker} />
          <SendList images={sticker} />
        </div>
      </section>
    </>
  );
}

export default SendStickers;
