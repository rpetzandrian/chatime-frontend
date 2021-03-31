import React from "react";
import { searchIcon, plusIcon } from "../assets/images";

function FormSearch() {
  return (
    <>
      {/* <!-- Search --> */}
      <form
        class="d-flex align-items-center px-3 ms-1 ms-md-3 me-1 me-sm-2 me-md-4 mt-1 mb-35"
        action=""
      >
        <div class="input-group search-form">
          <div class="input-group-text input-prepend">
            <img
              width="22px"
              height="22px"
              class="ms-2"
              src={searchIcon}
              alt="Search icon"
            />
          </div>
          <input
            type="search"
            name="message"
            id="search-message"
            placeholder="Type your message... "
          />
        </div>
        <div class="float-end">
          <img width="22px" height="22px" src={plusIcon} alt="Add Chat" />
        </div>
      </form>
      {/* <!-- End Search--> */}
    </>
  );
}

export default FormSearch;
