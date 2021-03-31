import React from "react";
import { menuButton } from "../assets/images";

function NavbarLeft() {
  return (
    <>
      <nav class="navbar mt-42 ms-1 ms-md-3 me-1 me-sm-2 me-md-3 d-flex justify-content-between px-3 pt-2">
        <p class="navbar-brand text-pb29 nav-brand-mobile">Chatime</p>
        <div class="d-flex float-end justify-content-evenly nav-icon-mobile">
          <div id="menu-button" class="float-end pb-2 ms-3" href="menu.html">
            <img src={menuButton} alt="menu button" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarLeft;
