import React, { useState } from "react";
import { useLocation } from "react-router";
import {
  NavbarLeft,
  FormSearch,
  SortingChatlist,
  CallHistory,
  Calling,
} from "../components";
import { Chatlist, Menu, MenuMobile, IncomingCalls } from "../components/Atoms";
import photo from "../assets/images/photo1.png";

const chatlist = [
  {
    id: 1,
    name: "Theressa Webb",
    photo: photo,
    time: "15:20",
    lastMessage: "Why did you do that?",
    isPinned: true,
    sender: 2,
    unread: 2,
    isOnline: false,
  },
  {
    id: 2,
    name: "Calvin Flores",
    photo: photo,
    time: "15:13",
    lastMessage: "Hi bro! Come to my house!",
    sender: 2,
    unread: 1,
    isOnline: true,
  },
  {
    id: 3,
    name: "Gregory Bell",
    photo: photo,
    time: "15:13",
    lastMessage: "Will you stop ignoring me?",
    sender: 2,
    unread: 164,
    isOnline: false,
  },
  {
    id: 4,
    name: "Soham Henry",
    photo: photo,
    time: "08:20",
    lastMessage: "Will you stop ignoring me?",
    isPinned: true,
    sender: 1,
    unread: 1,
    isOnline: true,
  },
  {
    id: 5,
    name: "Mother",
    photo: photo,
    time: "07:20",
    lastMessage: "Yes, of course come,...",
    sender: 1,
    unread: 0,
    isOnline: true,
  },
  {
    id: 6,
    name: "Brother",
    photo: photo,
    time: "Yesterday",
    lastMessage: "OK, good bye",
    sender: 2,
    unread: 0,
    isOnline: false,
  },
];

function Leftside(props) {
  const [menu, setMenu] = useState(false);
  const [Window, setWindow] = useState(false);
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
        <NavbarLeft openwindow={Window} menuHandler={() => setMenu(!menu)} />
        {/* <!-- End Navbar --> */}

        {/* <!-- Search --> */}
        <FormSearch windowHandler={() => setWindow(!Window)} />
        {/* <!-- End Search--> */}

        {/* <!-- Sorting Chatlist --> */}
        <SortingChatlist />
        {/* <!-- End Sorting Chatlist --> */}

        {/* <!-- Chatlist --> */}
        <section className="chatlist">
          {chatlist.map((e, index) => {
            return <Chatlist key={index} data={e} />;
          })}
        </section>
        {/* <!-- End Chatlist --> */}

        {/* <!-- Menu --> */}
        {menu && <Menu />}
        {/* <!-- End Menu --> */}

        {/* <!-- MenuMobile --> */}
        {menu && <MenuMobile menuHandler={() => setMenu(!menu)} />}
        {/* <!-- End MenuMobile --> */}

        {/* Incoming Calls */}
        {/* <IncomingCalls device="mobile" /> */}
        {/* End Incoming Calls */}

        {/* Call History */}
        {url.pathname === "/chat/call-history" && <CallHistory />}
        {/* End Call History */}

        {/* Call History */}
        {/* <Calling device="mobile" /> */}
        {/* End Call History */}
      </div>
    </>
  );
}

export default Leftside;
