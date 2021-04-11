import React from "react";

function ContactList({ data }) {
  return (
    <>
      <div className="row justify-content-center align-items-center mb-2">
        <div className="col-2">
          <img src={data.photo || ""} alt="" />
        </div>
        <div className="col-8">
          <h3 className="ps-3">{data.friend_name || data.phone}</h3>
        </div>
        <div className="col-2">
          <img width="24px" height="24px" src="" alt="" className="icon" />
        </div>
      </div>
    </>
  );
}

export default ContactList;
