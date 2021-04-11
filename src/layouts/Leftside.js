import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {
  NavbarLeft,
  FormSearch,
  SortingChatlist,
  CallHistory,
  Calling,
} from "../components";
import { Chatlist, Menu, MenuMobile, IncomingCalls } from "../components/Atoms";
import axios from "axios";
import { api } from "../config/api";
import Swal from "sweetalert2";

function Leftside({ userToken }) {
  const userId = localStorage.getItem("userID");
  const url = useLocation();
  const sortChatlist = new URLSearchParams(useLocation().search).get("sort");
  const [chatlist, setChatlist] = useState([]);
  const [contactlist, setContactlist] = useState([]);
  const [menu, setMenu] = useState(false);
  const [Window, setWindow] = useState(false);

  const makeAllRead = (user, chatroom) => {
    axios.patch(
      `${api.baseUrl}/messages/${user}/${chatroom}`,
      {},
      {
        headers: {
          "user-token": `${userToken}`,
        },
      }
    );
  };

  const saveChatroom = (user, chatroom) => {
    axios.patch(
      `${api.baseUrl}/chatrooms/${user}/${chatroom}`,
      { is_saved: true },
      {
        headers: {
          "user-token": `${userToken}`,
        },
      }
    );
  };

  const deleteChatroom = (user, chatroom) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2675ec",
      cancelButtonColor: "#ff0000",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `${api.baseUrl}/chatrooms/${user}/${chatroom}`,
            {},
            {
              headers: {
                "user-token": `${userToken}`,
              },
            }
          )
          .then((res) => {
            if (res.status === 200) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const getContact = (user) => {
    axios
      .get(`${api.baseUrl}/contacts/${user}`, {
        headers: {
          "user-token": `${userToken}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setContactlist(res.data.data.friend_list);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    axios
      .get(`${api.baseUrl}/chatrooms/${userId}/${sortChatlist || ""}`, {
        headers: {
          "user-token": `${userToken}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setChatlist(res.data.data);
        }
      })
      .catch((err) => {
        if (err.response.data.message === "Chatroom not found") {
          setChatlist(null);
        }
      });
  }, [sortChatlist]);

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
          {chatlist !== null &&
            chatlist.map((e) => {
              return (
                <Chatlist
                  key={e.id}
                  data={e}
                  update={(user, chatroom) => makeAllRead(user, chatroom)}
                  saveChatroom={(user, chatroom) =>
                    saveChatroom(user, chatroom)
                  }
                  deleteChatroom={(user, chatroom) =>
                    deleteChatroom(user, chatroom)
                  }
                />
              );
            })}
          {chatlist === null && <div>chat is empty</div>}
        </section>
        {/* <!-- End Chatlist --> */}

        {/* <!-- Menu --> */}
        {menu && <Menu get={() => getContact(userId)} />}
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

        {/* Calling History */}
        {/* <Calling device="mobile" /> */}
        {/* End Calling */}
      </div>
    </>
  );
}

export default Leftside;
