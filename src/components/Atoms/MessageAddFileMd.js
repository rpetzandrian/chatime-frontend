import React from "react";
import {
  addDocument,
  addImage,
  addLocation,
  contacts,
  emote,
  rectangle,
} from "../../assets/images";

function MessageAddFileMd() {
  return (
    <>
      <div className="d-none d-md-block d-lg-none message-file message-file-md">
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-start mt-2 ps-5 link">
            <img
              className="icon"
              width="22px"
              height="22px"
              src={emote}
              alt="sticker"
            />
            <p className="text-white ms-4">Emotes</p>
          </div>
          <div className="col-12 d-flex justify-content-start mt-2 ps-5 link">
            <img
              className="icon"
              width="22px"
              height="22px"
              src={rectangle}
              alt="camera"
            />
            <p className="text-white ms-4">Cameras</p>
          </div>
          <div className="col-12 d-flex justify-content-start mt-2 ps-5 link">
            <img
              className="icon"
              width="22px"
              height="22px"
              src={addImage}
              alt="addimage"
            />
            <p className="text-white ms-4">Images</p>
          </div>
          <div className="col-12 d-flex justify-content-start mt-2 ps-5 link">
            <img
              className="icon"
              width="22px"
              height="22px"
              src={addDocument}
              alt="adddocument"
            />
            <p className="text-white ms-4">Documents</p>
          </div>
          <div className="col-12 d-flex justify-content-start mt-2 ps-5 link">
            <img
              className="icon"
              width="22px"
              height="22px"
              src={contacts}
              alt="addcontact"
            />
            <p className="text-white ms-4">Contacts</p>
          </div>
          <div className="col-12 d-flex justify-content-start mt-2 ps-5 link">
            <img
              className="icon"
              width="22px"
              height="22px"
              src={addLocation}
              alt="addlocation"
            />
            <p className="text-white ms-4">Locations</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageAddFileMd;
