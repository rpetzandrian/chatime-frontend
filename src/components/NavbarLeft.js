import React from "react";
import { menuButton } from "../assets/images";
import { OpenWindow } from "./Atoms";

function NavbarLeft(props) {
  return (
    <>
      <nav className="navbar mt-42 ms-1 ms-md-3 me-1 me-sm-2 me-md-3 d-flex justify-content-between px-3 pt-2">
        {props.openwindow && <OpenWindow />}
        {!props.openwindow && (
          <p className="navbar-brand text-pb29 nav-brand-mobile">Chatime</p>
        )}
        <div className="d-flex float-end justify-content-evenly nav-icon-mobile">
          <div
            id="menu-button"
            className="float-end pb-2 ms-3"
            onClick={() => props.menuHandler()}
          >
            <img src={menuButton} alt="menu button" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarLeft;
