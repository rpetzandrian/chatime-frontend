import React from "react";
import { useLocation } from "react-router";
import {
  NavbarLeft,
  FormSearch,
  SortingChatlist,
  CallHistory,
  Calling,
} from "../components";
import { Chatlist, Menu, MenuMobile, IncomingCalls } from "../components/Atoms";

function Leftside(props) {
  const url = useLocation();

  return (
    <>
      <div
        className={
          (url.pathname === "/chat" &&
            "col-12 col-md-5 col-xl-4 px-3 bg-white leftside") ||
          "d-none d-md-grid col-12 col-md-5 col-xl-4 px-3 bg-white leftside"
        }
      >
        {/* <!-- Navbar --> */}
        <NavbarLeft openwindow={props.window} menuHandler={props.menuHandler} />
        {/* <!-- End Navbar --> */}

        {/* <!-- Search --> */}
        <FormSearch windowHandler={props.windowHandler} />
        {/* <!-- End Search--> */}

        {/* <!-- Sorting Chatlist --> */}
        <SortingChatlist />
        {/* <!-- End Sorting Chatlist --> */}

        {/* <!-- Chatlist --> */}
        <section className="chatlist">
          {props.chatlist.map((e, index) => {
            return <Chatlist key={index} data={e} />;
          })}
        </section>
        {/* <!-- End Chatlist --> */}

        {/* <!-- Menu --> */}
        {props.menu && <Menu />}
        {/* <!-- End Menu --> */}

        {/* <!-- MenuMobile --> */}
        {props.menu && <MenuMobile menuHandler={props.menuHandler} />}
        {/* <!-- End MenuMobile --> */}

        {/* Incoming Calls */}
        {/* <IncomingCalls device="mobile" /> */}
        {/* End Incoming Calls */}

        {/* Call History */}
        {/* <CallHistory /> */}
        {/* End Call History */}

        {/* Call History */}
        {/* <Calling device="mobile" /> */}
        {/* End Call History */}
      </div>
    </>
  );
}

export default Leftside;
