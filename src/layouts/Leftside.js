import React from "react";
import { NavbarLeft, FormSearch, SortingChatlist } from "../components";
import { Chat } from "../components/Atoms";

function Leftside(props) {
  return (
    <>
      <div class="col-12 col-md-5 col-xl-4 px-3 bg-white leftside">
        {/* <!-- Navbar --> */}
        <NavbarLeft />
        {/* <!-- End Navbar --> */}

        {/* <!-- Search --> */}
        <FormSearch />
        {/* <!-- End Search--> */}

        {/* <!-- Sorting Chatlist --> */}
        <SortingChatlist />
        {/* <!-- End Sorting Chatlist --> */}

        {/* <!-- Chatlist --> */}
        <section class="chatlist">
          {props.chatlist.map((e) => {
            return <Chat data={e} />;
          })}
        </section>
        {/* <!-- End Chatlist --> */}
      </div>
    </>
  );
}

export default Leftside;
