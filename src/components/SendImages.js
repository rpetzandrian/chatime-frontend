import React from "react";
import { SendImageHeader, SendList } from "./Atoms";
import rectangle38 from "../assets/images/Rectangle 38.png";

function SendImages() {
  return (
    <>
      <section className="send-image">
        <div className="w-100 row justify-content-between align-items-center pt-1 mx-3 sticky-top send">
          <SendImageHeader />
        </div>
        <div className="row row-cols-auto w-100 justify-content-center mx-0 mx-md-3 image">
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
          <SendList images={rectangle38} />
        </div>
      </section>
    </>
  );
}

export default SendImages;
