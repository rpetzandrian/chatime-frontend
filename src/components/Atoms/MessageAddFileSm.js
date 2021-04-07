import React from "react";

function MessageAddFileSm() {
  return (
    <>
      <div className="d-block d-md-none message-file-sm">
        <div className="row justify-content-evenly">
          <div className="col-3 pt-3 text-center">
            <img src="assets/images/ImageBlue.svg" alt="images" />
            <p>Images</p>
          </div>
          <div className="col-3 pt-3 text-center">
            <img src="assets/images/DocumentsBlue.svg" alt="images" />
            <p>Documents</p>
          </div>
          <div className="col-3 pt-3 text-center">
            <img src="assets/images/ContactsBlue.svg" alt="images" />
            <p>Contacts</p>
          </div>
          <div className="col-3 pt-3 text-center">
            <img src="assets/images/LocationBlue.svg" alt="images" />
            <p>Locations</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageAddFileSm;
