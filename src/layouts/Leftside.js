import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import {
  NavbarLeft,
  FormSearch,
  SortingChatlist,
  CallHistory,
  Calling,
  Contact,
  Loading,
  Setting,
} from "../components";
import { Chatlist, Menu, MenuMobile, IncomingCalls } from "../components/Atoms";
import axios from "axios";
import { api } from "../config/api";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { deleteChatlist, getChatlist } from "../redux/actions/chatlist";

function Leftside({ userToken }) {
  const dispatch = useDispatch();
  const url = useLocation();
  const sortChatlist = new URLSearchParams(useLocation().search).get("sort");
  const { data: chatlist, error, loading } = useSelector((s) => s.Chatlist);
  const { data: auth } = useSelector((s) => s.Auth);
  // const [keyword, setKeyword] = useState("");
  const [menu, setMenu] = useState(false);
  const [Window, setWindow] = useState(false);

  useEffect(() => {
    // getChatlist();
    dispatch(getChatlist(auth.id, sortChatlist, auth.token));
  }, [sortChatlist]);

  console.log(api.imgUrl);

  return (
    <>
      {/* {loading && <Loading />} */}

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
        <FormSearch
          windowHandler={() => setWindow(!Window)}
          user={auth.id}
          token={auth.token}
          sort={sortChatlist}
        />
        {/* <!-- End Search--> */}

        {/* <!-- Sorting Chatlist --> */}
        <SortingChatlist />
        {/* <!-- End Sorting Chatlist --> */}

        {/* <!-- Chatlist --> */}
        <section className="chatlist">
          {chatlist !== null &&
            chatlist.map((e) => {
              return <Chatlist key={e.chatroom_id} data={e} />;
            })}
          {error && <div>chat is empty</div>}
        </section>
        {/* <!-- End Chatlist --> */}

        {/* <!-- Menu --> */}
        {menu &&
          url.pathname !== "/contact" &&
          url.pathname !== "/call-history" && <Menu />}
        {/* <!-- End Menu --> */}

        {/* <!-- MenuMobile --> */}
        {menu && <MenuMobile menuHandler={() => setMenu(!menu)} />}
        {/* <!-- End MenuMobile --> */}

        {/* Profile */}
        {url.pathname === "/setting" && <Setting />}

        {/* Incoming Calls */}
        {/* <IncomingCalls device="mobile" /> */}
        {/* End Incoming Calls */}

        {/* Call History */}
        {url.pathname === "/call-history" && <CallHistory />}
        {/* End Call History */}

        {/* Calling History */}
        {/* <Calling device="mobile" /> */}
        {/* End Calling */}

        {url.pathname === "/contact" && <Contact />}
      </div>
    </>
  );
}

export default Leftside;
