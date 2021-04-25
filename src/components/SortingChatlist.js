import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function SortingChatlist() {
  const url = new URLSearchParams(useLocation().search).get("sort");
  const current = useLocation().pathname;

  return (
    <>
      {/* <!-- Sorting Chatlist --> */}
      <ul className="list-group list-group-horizontal justify-content-between me-1 me-md-4 mb-35 mt-3 mt-md-0 px-3 sorting-list overflow-auto">
        {/* <li id="all" className="list-group-item me-3 sort-item">
          All
        </li>
        <li id="important" className="list-group-item me-3 sort-item">
          Important
        </li>
        <li id="unread" className="list-group-item me-3 sort-item">
          Unread
        </li>
        <li id="read" className="list-group-item me-3 sort-item">
          Read
        </li> */}
        <NavLink
          to={current}
          className="list-group-item me-3 sort-item"
          activeClassName={url === null ? "active" : "inactive"}
        >
          All
        </NavLink>
        <NavLink
          to={current + "?sort=important"}
          className="list-group-item me-3 sort-item"
          activeClassName={url === "important" ? "active" : "inactive"}
        >
          Important
        </NavLink>
        <NavLink
          to={current + "?sort=unread"}
          className="list-group-item me-3 sort-item"
          activeClassName={url === "unread" ? "active" : "inactive"}
        >
          Unread
        </NavLink>
        <NavLink
          to={current + "?sort=read"}
          className="list-group-item me-3 sort-item"
          activeClassName={url === "read" ? "active" : "inactive"}
        >
          Read
        </NavLink>
      </ul>
      {/* <!-- End Sorting Chatlist --> */}
    </>
  );
}

export default SortingChatlist;
