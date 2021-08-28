import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { searchIcon, plusIcon } from "../assets/images";
import { getChatlist } from "../redux/actions/chatlist";

function FormSearch({ user, token, sort, ...props }) {
  const dispatch = useDispatch();
  const current = useLocation().pathname;
  const history = useHistory();
  const [keyword, setKeyword] = useState("");

  const search = () => {
    dispatch(getChatlist(user, sort, token, keyword));
  };

  console.log(keyword, "keyword");

  return (
    <>
      {/* <!-- Search --> */}
      <form
        className="d-flex align-items-center px-3 ms-1 ms-md-3 me-1 me-sm-2 me-md-4 mt-1 mb-35"
        onSubmit={(e) => {
          e.preventDefault();
          search();
        }}
      >
        <div className="input-group search-form">
          <div className="input-group-text input-prepend">
            <img
              width="22px"
              height="22px"
              className="ms-2"
              src={searchIcon}
              alt="Search icon"
            />
          </div>
          <input
            onChange={(e) => setKeyword(`${e.target.value}`)}
            onFocus={() => history.push(`${current + "?sort=search"}`)}
            type="search"
            name="keyword"
            id="search-message"
            placeholder="Type your message... "
          />
        </div>
        <div className="float-end icon" onClick={() => props.windowHandler()}>
          <img width="22px" height="22px" src={plusIcon} alt="open-window" />
        </div>
      </form>
      {/* <!-- End Search--> */}
    </>
  );
}

export default FormSearch;
